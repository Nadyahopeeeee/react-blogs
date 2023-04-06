import React, { useState } from 'react';
import './styles/App.css';
import PostList from './components/PostList';
import PostForm from './components/PostForm';
import MySelect from './components/MySelect';

function App() {
  const [posts, setPosts] = useState([
    { id: 1, title: 'Javascript ', body: 'description JS' },
    { id: 2, title: 'Phyton', body: 'description Phyton' },
    { id: 3, title: 'Ruby', body: 'description Ruby' },
  ]);

  const [selectedSort, setSelectedSort] = useState('');

  const createPost = (newPost) => {
    setPosts([...posts, newPost]);
  };

  const removePost = (post) => {
    setPosts(posts.filter((elem) => elem.id !== post.id));
  };

  const sortPosts = (sort) => {
    console.log(sort);
    setSelectedSort(sort);
    setPosts([...posts.sort((a, b) => a[sort].localeCompare(b[sort]))]);
  };

  return (
    <div className="App">
      <PostForm create={createPost} />
      <hr style={{ margin: '15px' }}></hr>
      <div>
        <MySelect
          value={selectedSort}
          onChange={sortPosts}
          defaultValue="Сортировка:"
          options={[
            { value: 'title', name: 'по названию' },
            { value: 'body', name: 'по описанию' },
          ]}
        />
      </div>
      {posts.length ? (
        <PostList remove={removePost} posts={posts} title="Посты" />
      ) : (
        <h2 style={{ textAlign: 'center' }}>Добавьте новый пост!</h2>
      )}
    </div>
  );
}

export default App;
