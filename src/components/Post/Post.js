import React from "react";
import { Link } from "react-router-dom";
import "./Post.css";

const Post = ({ post, deletePost }) => {
  return (
    <div>
      <div className="post">
        <div className="post__header">
          <div className="post__header__left">
            <h3>
              {/* {post.userName} */}
              userName
            </h3>
            <div>
              <button onClick={() => deletePost(post.docId)}>Del 🗑</button>
              <Link to={`/edit/${post.docId}`}>
                <button>Edit ✏️</button>
              </Link>
            </div>
          </div>
          <div className="post__header__right"></div>
        </div>
        <img src={post.image} alt="post" className="post__img" />
        <div className="post__body">
          <h4>
            <strong>
              {/* {post.userName} */}
              userName
            </strong>{" "}
            {post.desc}
          </h4>
        </div>
      </div>
    </div>
  );
};

export default Post;
