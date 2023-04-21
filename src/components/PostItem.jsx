import React from 'react';
import { useNavigate } from 'react-router-dom';

import MyButton from './UI/button/MyButton';

function PostItem({ post, number, remove }) {
  const navigate = useNavigate();

  return (
    <div className="post">
      <div className="post__content">
        <div>
          <strong>
            {post.id}. {post.title}
          </strong>
        </div>
        <div>{post.body}</div>
      </div>
      <div className="post__btns">
        <MyButton onClick={() => navigate(`/posts/${post.id}`)}>Открыть</MyButton>
      </div>
      <div className="post__btns">
        <MyButton onClick={() => remove(post)}>Удалить</MyButton>
      </div>
    </div>
  );
}

export default PostItem;
