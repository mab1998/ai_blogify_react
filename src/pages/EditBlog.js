// src/pages/EditBlog.js
import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';
import QuillEditor from '../components/QuillEditor';

const AdminEditBlog = () => {
  const { blogId } = useParams();
  const navigate = useNavigate();
  const [blog, setBlog] = useState({ title: '', article: '' });

  useEffect(() => {
    const fetchBlog = async () => {
      try {
        const response = await fetch(`http://localhost:8000/blog/${blogId}`);
        const data = await response.json();
        setBlog(data);
      } catch (error) {
        console.error('Error fetching blog:', error);
      }
    };

    fetchBlog();
  }, [blogId]);

  const handleChange = (name, value) => {
    setBlog({ ...blog, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(`http://localhost:8000/blog/${blogId}/edit`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(blog),
      });

      if (response.ok) {
        alert('Blog updated successfully');
        navigate('/blogs'); // Redirect to blogs page
      } else {
        alert('Failed to update blog');
      }
    } catch (error) {
      console.error('Error updating blog:', error);
    }
  };

  return (
    <div className="flex flex-col min-h-screen">
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-2xl font-bold text-left mt-8">Edit Blog</h1>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="title" className="block text-sm font-medium text-gray-700">Title</label>
            <input
              id="title"
              name="title"
              type="text"
              value={blog.title}
              onChange={(e) => handleChange('title', e.target.value)}
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="article" className="block text-sm font-medium text-gray-700">Article</label>
            <QuillEditor
              value={blog.article}
              onChange={(value) => handleChange('article', value)}
            />
          </div>
          <button
            type="submit"
            className="px-4 py-2 bg-blue-500 text-white text-sm font-semibold rounded hover:bg-blue-600 focus:outline-none"
          >
            Save
          </button>
        </form>
      </div>
    </div>
  );
};

export default AdminEditBlog;
