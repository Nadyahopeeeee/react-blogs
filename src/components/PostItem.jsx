import React from 'react';
import MyButton from './UI/button/MyButton';

function PostItem({ post, number, remove }) {
  return (
    <div className="post">
      <div className="post__content">
        <div>
          {' '}
          <strong>
            {number}. {post.title}
          </strong>
        </div>
        <div>{post.body}</div>
      </div>
      <div className="post__btns">
        <MyButton onClick={() => remove(post)}>Удалить</MyButton>
      </div>
    </div>
  );
}

export default PostItem;
