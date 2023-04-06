import React, { useState, useMemo } from 'react';
import './styles/App.css';
import PostList from './components/PostList';
import PostForm from './components/PostForm';
import MySelect from './components/MySelect';
import MyInput from './components/UI/input/MyInput';

function App() {
  const [posts, setPosts] = useState([
    { id: 1, title: 'Javascript ', body: 'description JS' },
    { id: 2, title: 'Phyton', body: 'description Phyton' },
    { id: 3, title: 'Ruby', body: 'description Ruby' },
  ]);

  const [selectedSort, setSelectedSort] = useState('');
  const [searchQuery, setSearchQuery] = useState('');

  const sortedPosts = useMemo(() => {
    if (selectedSort) {
      console.log('getSortedPosts');
      return [...posts.sort((a, b) => a[selectedSort].localeCompare(b[selectedSort]))];
    }
    return posts;
  }, [selectedSort, posts]);

  const createPost = (newPost) => {
    setPosts([...posts, newPost]);
  };

  const sortedAndSearchedPosts = useMemo(() => {
    return sortedPosts.filter((post) =>
      post.title.toLowerCase().includes(searchQuery.toLowerCase()),
    );
  }, [searchQuery, sortedPosts]);

  const removePost = (post) => {
    setPosts(posts.filter((elem) => elem.id !== post.id));
  };

  const sortPosts = (sort) => {
    console.log(sort);
    setSelectedSort(sort);
  };

  return (
    <div className="App">
      <PostForm create={createPost} />
      <hr style={{ margin: '15px' }}></hr>
      <div>
        <MyInput
          value={searchQuery}
          onChange={(e) => {
            setSearchQuery(e.target.value);
          }}
          type="text"
          placeholder="Поиск..."
        />
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
      {sortedAndSearchedPosts.length ? (
        <PostList remove={removePost} posts={sortedAndSearchedPosts} title="Посты" />
      ) : (
        <h2 style={{ textAlign: 'center' }}>Посты не найдены!</h2>
      )}
    </div>
  );
}

export default App;
