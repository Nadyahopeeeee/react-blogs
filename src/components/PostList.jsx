import PostItem from './PostItem';

const PostList = ({ posts, title, remove }) => {
  return (
    <>
      <h1 style={{ textAlign: 'center' }}>{title}</h1>
      {posts.map((post, i) => (
        <PostItem remove={remove} number={i + 1} post={post} key={post.id} />
      ))}
    </>
  );
};

export default PostList;
