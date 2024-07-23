// src/pages/WaitingScreen.js
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Navbar from '../components/Navbar';


const WaitingScreen = () => {
  const { articleId } = useParams();
  const [status, setStatus] = useState('processing');

  useEffect(() => {
    const checkStatus = async () => {
      try {
        const response = await fetch(`http://localhost:8000/blog_status/${articleId}`);
        const data = await response.json();
        setStatus(data.status);
      } catch (error) {
        console.error('Error fetching status:', error);
      }
    };

    const interval = setInterval(checkStatus, 5000);

    return () => clearInterval(interval);
  }, [articleId]);

  return (
       <div className="flex flex-col min-h-screen">
      <Navbar />
    <div className="flex flex-col min-h-screen justify-center items-center">

      <h1 className="text-4xl font-bold mb-6">Blog Creation Status</h1>
      <p className="text-2xl">{status === 'completed' ? 'Blog creation completed!' : 'Processing...'}</p>
      {status === 'completed' && (
        <a href={`/blog/${articleId}/view`} className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-lg">View Blog</a>
      )}
    </div>



    </div>

  );
};

export default WaitingScreen;
