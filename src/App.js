import React, { useState } from 'react';
import './styles/App.css';
import PostList from './components/PostList';

function App() {
  const [posts, setPosts] = useState([
    { id: 1, title: 'Javascript1', body: 'description' },
    { id: 2, title: 'Javascript2', body: 'description' },
    { id: 3, title: 'Javascript3', body: 'description' },
  ]);

  const [posts2, setPosts2] = useState([
    { id: 1, title: 'Python1', body: 'description' },
    { id: 2, title: 'Python2', body: 'description' },
    { id: 3, title: 'Python3', body: 'description' },
  ]);

  return (
    <div className="App">
      <PostList posts={posts} title="Список постов 1" />
      <PostList posts={posts2} title="Список постов 2" />
    </div>
  );
}

export default App;
