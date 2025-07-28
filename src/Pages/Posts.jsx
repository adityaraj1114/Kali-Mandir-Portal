import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Posts.css"; // 👈 Make sure to import the custom CSS

const Posts = () => {
  const [posts, setPosts] = useState([]);

  // In Posts.jsx
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 10;

  // Pagination Logic
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);

  // Calculate total pages
  const totalPages = Math.ceil(posts.length / postsPerPage);

  useEffect(() => {
    const savedPosts = JSON.parse(localStorage.getItem("posts")) || [];
    setPosts(savedPosts);
  }, []);

  return (
    <div>
    <div className="container py-4">
      <h2
        className="text-center text-gradient mb-5"
        style={{ fontWeight: 700 }}
      >
        📢 Temple Updates
      </h2>

      {posts.length === 0 ? (
        <p className="text-center text-muted">No posts yet.</p>
      ) : (
        posts.map((post) => (
          <div key={post.id} className="post-card">
            <div className="card-body">
              <h4 className="card-title text-dark fw-bold p-2">{post.title}</h4>
              <p className="card-text text-dark p-2">{post.content}</p>
              <div
                className="text-end text-muted p-2"
                style={{ fontSize: "0.9rem" }}
              >
                {post.date}
              </div>
            </div>
          </div>
        ))
      )}
    </div>

    <div className="d-flex justify-content-center mt-4">
  {[...Array(totalPages)].map((_, index) => (
    <button
      key={index}
      onClick={() => setCurrentPage(index + 1)}
      className={`btn mx-1 ${currentPage === index + 1 ? 'btn-primary' : 'btn-outline-primary'}`}
    >
      {index + 1}
    </button>
  ))}
</div>

    </div>

    
  );
};

export default Posts;
