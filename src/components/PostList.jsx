// import React, { useState } from 'react';
import PostItem from './PostItem';

const PostList = ({ posts, title }) => {
  return (
    <>
      <h1 style={{ textAlign: 'center' }}>{title}</h1>
      {posts.map((post, i) => (
        <PostItem number={i + 1} post={post} key={post.id} />
      ))}
    </>
  );
};

export default PostList;
