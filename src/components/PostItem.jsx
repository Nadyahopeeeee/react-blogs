import React from 'react';

function PostItem({ post }) {
  console.log(post);
  return (
    <div className="post">
      <div className="post__content" style={{ display: 'flex' }}>
        <strong>{post.id}.</strong>
        <div style={{ marginLeft: '5px' }}>{post.title}</div>
      </div>
      <div className="post__btns">
        <button>Удалить</button>
      </div>
    </div>
  );
}

export default PostItem;
