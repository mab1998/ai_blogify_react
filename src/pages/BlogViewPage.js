// src/pages/ViewBlog.js
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Navbar from '../components/Navbar';

const AdminBlogViewPage = () => {
  const { blogId } = useParams();
  const [blog, setBlog] = useState(null);

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

  const downloadBlogAsPDF = async () => {
    try {
      const response = await fetch(`http://localhost:8000/blog/${blogId}/download`);
      if (!response.ok) {
        throw new Error('Failed to download blog');
      }

      const blob = await response.blob();
      const url = window.URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = `blog_${blogId}.pdf`;
      a.click();
      window.URL.revokeObjectURL(url);
    } catch (error) {
      console.error('Error downloading blog:', error);
    }
  };

  if (!blog) {
    return <div>Loading...</div>;
  }

  return (
    <div className="flex flex-col min-h-screen">
      {/* <Navbar /> */}
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-2xl font-bold text-left mt-8">View Blog</h1>
        <div className="grid grid-cols-3 gap-4">
          <div className="bg-white p-4 shadow-lg rounded-lg col-span-2" id="blog">
            <h2 className="text-xl font-bold">{blog.title}</h2>
            <div dangerouslySetInnerHTML={{ __html: blog.article }} />
          </div>
          <div className="col-span-1">
            <div className="bg-white p-4 shadow-lg rounded-lg mb-4">
              <h2 className="text-xl font-bold">Action :</h2>
              <div className="flex justify-between mt-4 grid grid-cols-2 gap-2">
                <button type="button" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={() => copyText(blog.article)}>
                  <i className="fas fa-copy"></i> Copy Text
                </button>
                <button className="copy-button bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={() => copyHtml(blog.article)}>
                  <i className="fas fa-copy"></i> Copy HTML
                </button>
                <button className="download-pdf bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={downloadBlogAsPDF}>
                  <i className="fas fa-download"></i> Download PDF
                </button>
                <button className="edit-blog bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={() => window.location.href = `/blog/${blogId}/edit`}>
                  <i className="fas fa-edit"></i> Edit Blog
                </button>
                <button className="delete-blog bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">
                  <i className="fas fa-trash"></i> Delete Blog
                </button>
              </div>
            </div>
            {blog.video_id && (
              <div className="bg-white p-4 shadow-lg rounded-lg mb-4">
                <h2 className="text-xl font-bold mb-4">Source :</h2>
                <div className="video-container" style={{ width: '100%' }}>
                  <iframe width="100%" height="315" src={`https://www.youtube.com/embed/${blog.video_id}`} frameBorder="0" allowFullScreen></iframe>
                </div>
              </div>
            )}
            {blog.keywords && blog.keywords.length > 0 && (
              <div className="bg-white p-4 shadow-lg rounded-lg mb-8">
                <h2 className="text-xl font-bold mb-4">Keywords :</h2>
                <ul className="flex flex-wrap">
                  {blog.keywords.map((keyword, index) => (
                    <li key={index} className="bg-gray-200 text-gray-700 px-2 py-1 rounded-full mr-2 mb-2">{keyword}</li>
                  ))}
                </ul>
              </div>
            )}
            {blog.transcript && (
              <div className="bg-white p-4 shadow-lg rounded-lg mb-8">
                <h2 className="text-xl font-bold mb-4">Transcription :</h2>
                <p className="text-gray-700">{blog.transcript}</p>
              </div>
            )}
            {blog.summarization && (
              <div className="bg-white p-4 shadow-lg rounded-lg">
                <h2 className="text-xl font-bold mb-4">Summarization :</h2>
                <p className="text-gray-700">{blog.summarization}</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

const copyText = (text) => {
  navigator.clipboard.writeText(text)
    .then(() => {
      alert('Text copied to clipboard');
    })
    .catch(() => {
      alert('Failed to copy text to clipboard');
    });
};

const copyHtml = (html) => {
  navigator.clipboard.writeText(html)
    .then(() => {
      alert('HTML copied to clipboard');
    })
    .catch(() => {
      alert('Failed to copy HTML to clipboard');
    });
};

export default AdminBlogViewPage;
