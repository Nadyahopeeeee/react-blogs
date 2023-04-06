import React from 'react';
import MyButton from './UI/button/MyButton';

function PostItem({ post, number }) {
  return (
    <div className="post">
      <div className="post__content">
        <div>
          {' '}
          <strong>{number}.</strong>
          {post.title}
        </div>
        <div>{post.body}</div>
      </div>
      <div className="post__btns">
        <MyButton>Удалить</MyButton>
      </div>
    </div>
  );
}

export default PostItem;
