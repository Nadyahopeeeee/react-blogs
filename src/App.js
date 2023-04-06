import React, { useState, useMemo } from 'react';
import './styles/App.css';
import PostList from './components/PostList';
import PostForm from './components/PostForm';
import MySelect from './components/MySelect';
import PostFilter from './components/PostFilter';

function App() {
  const [posts, setPosts] = useState([
    { id: 1, title: 'Javascript ', body: 'description JS' },
    { id: 2, title: 'Phyton', body: 'description Phyton' },
    { id: 3, title: 'Ruby', body: 'description Ruby' },
  ]);

  // const [filter.sort, setfilter.sort] = useState('');
  // const [searchQuery, setSearchQuery] = useState('');
  const [filter, setFilter] = useState({ sort: '', query: '' });

  const sortedPosts = useMemo(() => {
    console.log('getSortedPosts');
    if (filter.sort) {
      return [...posts.sort((a, b) => a[filter.sort].localeCompare(b[filter.sort]))];
    }
    return posts;
  }, [filter.sort, posts]);

  const createPost = (newPost) => {
    setPosts([...posts, newPost]);
  };

  const sortedAndSearchedPosts = useMemo(() => {
    return sortedPosts.filter((post) =>
      post.title.toLowerCase().includes(filter.query.toLowerCase()),
    );
  }, [filter.query, sortedPosts]);

  const removePost = (post) => {
    setPosts(posts.filter((elem) => elem.id !== post.id));
  };

  return (
    <div className="App">
      <PostForm create={createPost} />
      <hr style={{ margin: '15px' }}></hr>
      <PostFilter filter={filter} setFilter={setFilter} />
      {sortedAndSearchedPosts.length ? (
        <PostList remove={removePost} posts={sortedAndSearchedPosts} title="Посты" />
      ) : (
        <h2 style={{ textAlign: 'center' }}>Посты не найдены!</h2>
      )}
    </div>
  );
}

export default App;
