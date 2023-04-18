import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { usePosts } from './hooks/usePosts';
import './styles/App.css';
import PostList from './components/PostList';
import PostForm from './components/PostForm';
import PostFilter from './components/PostFilter';
import MyModal from './components/MyModal/MyModal';
import MyButton from './components/UI/button/MyButton';

function App() {
  const [posts, setPosts] = useState([
    { id: 1, title: 'Javascript ', body: 'description JS' },
    { id: 2, title: 'Phyton', body: 'description Phyton' },
    { id: 3, title: 'Ruby', body: 'description Ruby' },
  ]);

  const [filter, setFilter] = useState({ sort: '', query: '' });
  const [modal, setModal] = useState(false);
  const sortedAndSearchedPosts = usePosts(posts, filter.sort, filter.query);

  useEffect(() => {
    fetchPosts();
  }, []);

  const createPost = (newPost) => {
    setPosts([...posts, newPost]);
    setModal(false);
  };

  async function fetchPosts() {
    const response = await axios.get('https://jsonplaceholder.typicode.com/posts');
    setPosts(response.data);
  }

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
      <PostList remove={removePost} posts={sortedAndSearchedPosts} title="Посты" />
    </div>
  );
}

export default App;
