import React from "react";
import { usePosts } from "../../contexts/PostContext";
import Post from "../Post/Post";

const Feed = () => {
  const { posts, deletePost } = usePosts();

  return (
    <>
      {posts.length > 0 ? (
        posts.map((item) => (
          <Post deletePost={deletePost} key={item.docId} post={item} />
        ))
      ) : (
        <h1>Loading...</h1>
      )}
    </>
  );
};

export default Feed;
