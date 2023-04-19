import React, { useState, useEffect, useMemo } from 'react';
import './styles/App.css';

import { usePosts } from './hooks/usePosts';
import { useFetching } from './hooks/useFetching';
import { getPagesCount, getPagesArray } from './utils/pages';
import PostList from './components/PostList';
import PostForm from './components/PostForm';
import PostFilter from './components/PostFilter';
import MyModal from './components/UI/MyModal/MyModal';
import MyButton from './components/UI/button/MyButton';
import PostService from './API/PostService';
import Loader from './components/UI/Loader/Loader';

function App() {
  const [posts, setPosts] = useState([]);
  const [filter, setFilter] = useState({ sort: '', query: '' });
  const [modal, setModal] = useState(false);
  const [totalPages, setTotalPages] = useState(0);
  const [limit, setLimit] = useState(10);
  const [page, setPage] = useState(1);
  const sortedAndSearchedPosts = usePosts(posts, filter.sort, filter.query);
  let pagesArray = getPagesArray(totalPages);
  console.log('yo', pagesArray);

  const [fetchPosts, isPostsLoading, postError] = useFetching(async () => {
    const response = await PostService.getAll(limit, page);
    setPosts(response.data);
    const totalCount = response.headers['x-total-count'];
    setTotalPages(getPagesCount(totalCount, limit));
  });

  useEffect(() => {
    fetchPosts();
  }, []);

  const createPost = (newPost) => {
    setPosts([...posts, newPost]);
    setModal(false);
  };

  // Получаем post из дочернего элемента
  const removePost = (post) => {
    setPosts(posts.filter((elem) => elem.id !== post.id));
  };

  return (
    <div className="App">
      <MyButton style={{ marginTop: '30px' }} onClick={() => setModal(true)}>
        Создать пользователя
      </MyButton>
      <MyModal visible={modal} setVisible={setModal}>
        <PostForm create={createPost} />
      </MyModal>
      <hr style={{ margin: '15px 0' }}></hr>
      <PostFilter filter={filter} setFilter={setFilter} />
      {isPostsLoading ? (
        <div style={{ display: 'flex', justifyContent: 'center', marginTop: '50px' }}>
          <Loader />
        </div>
      ) : (
        <PostList remove={removePost} posts={sortedAndSearchedPosts} title="Посты" />
      )}
      {postError && <h2>Произошла ошибка {postError}</h2>}
      <div className="page__wrapper">
        {' '}
        {pagesArray.map((p) => (
          <span
            onClick={() => setPage(p)}
            className={p === page ? 'page page__current' : 'page'}
            key={p}
          >
            {p}
          </span>
        ))}
      </div>
    </div>
  );
}

export default App;
