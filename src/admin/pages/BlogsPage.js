import React, { useEffect, useState } from 'react';
import Navbar from '../components/Navbar';
import '../../assets/styles/custom.css'; // Adjust the path as needed
import { Link } from 'react-router-dom';

const BlogsPage = () => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const response = await fetch('http://127.0.0.1:8000/blogs');
        const data = await response.json();
        setBlogs(data);
      } catch (error) {
        console.error('Error fetching blogs:', error);
      }
    };

    fetchBlogs();
  }, []);

  const handleDownload = async (blogId) => {
    try {
      const response = await fetch(`http://127.0.0.1:8000/blog/${blogId}/download`);
      if (response.ok) {
        const blob = await response.blob();
        const url = window.URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = `blog_${blogId}.pdf`;
        document.body.appendChild(a);
        a.click();
        a.remove();
      } else {
        console.error('Failed to download PDF');
      }
    } catch (error) {
      console.error('Error downloading PDF:', error);
    }
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <div className="container mx-auto px-2">
        <div className="flex flex-wrap">
          <div className="flex items-center py-4 w-full">
            <div className="w-full">
              <div className="">
                <div className="flex flex-wrap justify-between">
                  <div className="items-center">
                    <h1 className="font-semibold text-xl mb-1 block dark:text-slate-100">Blogs</h1>
                    <ol className="list-reset flex text-sm">
                      <li><a href="#" className="text-gray-500">T-Wind</a></li>
                      <li><span className="text-gray-500 mx-2">/</span></li>
                      <li className="text-blue-600 hover:text-blue-700">Blogs</li>
                    </ol>
                  </div>
                  <div className="flex items-center">
                    <button className="px-3 py-2 lg:px-4 bg-blue-500 text-white text-sm font-semibold rounded hover:bg-blue-600">Create New</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-2 min-h-[calc(100vh-138px)] relative pb-14">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4 gap-4 mb-4">
          {blogs.map(blog => (
            <div key={blog.id} className="card">
              <Link to={`/blog/${blog.id}/view`}>
                <img className="rounded-t-lg" src={blog.image_url} alt={blog.title} />
              </Link>
              <div className="card-body">
                <span className="focus:outline-none text-[12px] bg-green-500/10 text-green-500 dark:text-green-600 rounded font-medium py-1 px-2">{blog.category}</span>
                <Link to={`/blog/${blog.id}/view`} className="my-3 block text-[20px] font-medium tracking-tight text-gray-800 dark:text-white">{blog.title}</Link>
                <p className="font-normal text-gray-500 text-sm dark:text-gray-400">
                  {blog.content}
                </p>
                <div className="divider"></div>
                <div className="btn-group">
                  <Link to={`/blog/${blog.id}/view`} className="text-center w-full border border-gray-300 rounded-md py-2">View Details</Link>
                  <Link to={`/blog/${blog.id}/edit`} className="text-center w-full border border-gray-300 rounded-md py-2">Edit Blog</Link>
                  <button onClick={() => handleDownload(blog.id)} className="text-center w-full border border-gray-300 rounded-md py-2">Download PDF</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BlogsPage;
