import React from "react";

const Post = ({ loading, posts }) => {
  if (loading) {
    return <h2>Loading...</h2>;
  }
  return (
    <ul className="list-group mb-4">
      {posts.map((post, i) => (
        <li className="list-group-item" key={post.id}>
          {post.title}
        </li>
      ))}
    </ul>
  );
};

export default Post;
