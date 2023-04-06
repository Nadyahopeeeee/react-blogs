import React, { useState } from 'react';
import './styles/App.css';
import PostList from './components/PostList';
import PostForm from './components/PostForm';

function App() {
  const [posts, setPosts] = useState([
    { id: 1, title: 'Javascript1', body: 'description' },
    { id: 2, title: 'Javascript2', body: 'description' },
    { id: 3, title: 'Javascript3', body: 'description' },
  ]);

  const createPost = (newPost) => {
    setPosts([...posts, newPost]);
  };

  return (
    <div className="App">
      <PostForm create={createPost} />
      <PostList posts={posts} title="Посты про JS" />
    </div>
  );
}

export default App;
