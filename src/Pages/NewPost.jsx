import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Posts'; // Assuming you have some styles for this component 

const NewPost = () => {
  const navigate = useNavigate();
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  // In NewPost.jsx
const existingPosts = JSON.parse(localStorage.getItem('posts')) || [];

if (existingPosts.length >= 50) {
  alert("Maximum of 50 posts allowed.");
  return;
}


  const handleSubmit = (e) => {
    e.preventDefault();

    const newPost = {
      id: Date.now(),
      title,
      content,
      date: new Date().toLocaleString(),
    };

    const existingPosts = JSON.parse(localStorage.getItem('posts')) || [];
    localStorage.setItem('posts', JSON.stringify([newPost, ...existingPosts]));

    setTitle('');
    setContent('');
    navigate('/posts'); // Redirect after post
  };

  return (
    <div className="container py-5 bg-primary-subtle">
      <motion.div
        className="text-center mb-4"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="fw-bold text-primary">New Post</h1>
        <p className="text-muted">Post updates and information for temple visitors.</p>
      </motion.div>

      <motion.form
        onSubmit={handleSubmit}
        className="bg-white shadow-lg p-4 rounded"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
      >
        <div className="mb-3">
          <label className="form-label fw-semibold">Post Title</label>
          <input
            type="text"
            className="form-control"
            placeholder="Enter post title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </div>

        <div className="mb-3">
          <label className="form-label fw-semibold">Post Content</label>
          <textarea
            className="form-control"
            rows="5"
            placeholder="Write your message here..."
            value={content}
            onChange={(e) => setContent(e.target.value)}
            required
          ></textarea>
        </div>

        <button type="submit" className="btn btn-primary w-100 fw-semibold">
          Submit Post
        </button>
      </motion.form>
    </div>
  );
};

export default NewPost;
