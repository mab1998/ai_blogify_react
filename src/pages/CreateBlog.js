import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';

const CreateBlog = () => {
  const [formData, setFormData] = useState({
    url: '',
    blogSize: 'Medium',
    blogTone: 'engaging',
    mediaLanguage: 'en',
    blogLanguage: 'english',
    writersPov: 'third-person',
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const isValidYouTubeUrl = (url) => {
    const regex = /^(https?\:\/\/)?(www\.youtube\.com|youtu\.?be)\/.+$/;
    return regex.test(url);
  };


  const handleSubmit = async (e) => {
  e.preventDefault();

  const { url } = formData;
  if (!url || !isValidYouTubeUrl(url)) {
    alert('Please enter a valid YouTube URL');
    return;
  }

  // Map formData keys to the expected model attributes
  const payload = {
    youtube_url: formData.url,
    writer_point_of_view: formData.writersPov,
    blog_generation_mode: "auto", // Assuming this value
    blog_language: formData.blogLanguage,
    media_language: formData.mediaLanguage,
    blog_tone: formData.blogTone,
    blog_size: formData.blogSize,
    article_id: new Date().getTime().toString() // Example for article_id
  };

  try {
    const response = await fetch('http://localhost:8000/create_article', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(payload),
    });

    const data = await response.json();
    if (response.ok && data.status === 'Blog creation started') {
      navigate(`/waiting/${data.article_id}`);
    } else {
      alert('Failed to generate the article');
    }
  } catch (error) {
    console.error('Error generating article:', error);
    alert('Failed to generate the article');
  }
};


//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     const { url } = formData;
//     if (!url || !isValidYouTubeUrl(url)) {
//       alert('Please enter a valid YouTube URL');
//       return;
//     }

//     // Map formData keys to the expected model attributes
//     const payload = {
//       youtube_url: formData.url,
//       writer_point_of_view: formData.writersPov,
//       blog_generation_mode: "auto", // Assuming this value
//       blog_language: formData.blogLanguage,
//       media_language: formData.mediaLanguage,
//       blog_tone: formData.blogTone,
//       blog_size: formData.blogSize,
//       article_id: new Date().getTime().toString() // Example for article_id
//     };

//     try {
//       const response = await fetch('http://localhost:8000/create_article', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify(payload),
//       });

//       const data = await response.json();
//       if (response.ok && data.status === 'Blog creation started') {
//         navigate(`/waiting?article_id=${data.article_id}`);
//       } else {
//         alert('Failed to generate the article');
//       }
//     } catch (error) {
//       console.error('Error generating article:', error);
//       alert('Failed to generate the article');
//     }
//   };



  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <div className="container mx-auto px-4 py-8">

     <div className="mb-4">
          <h1 className="font-semibold text-2xl mb-1 dark:text-slate-100">Create Blog</h1>
          <ol className="list-reset flex text-sm text-gray-500 dark:text-gray-400">
            <li><a href="#" className="text-gray-500 dark:text-gray-400">T-Wind</a></li>
          
            <li><span className="mx-2">/</span></li>
            <li className="text-blue-600 hover:text-blue-700 dark:text-blue-500">Create Blog</li>
          </ol>
        </div>

    

        <section className="mb-6 bg-white p-4">
          <label htmlFor="url" className="block mb-2 text-sm font-medium">Video/Audio URL</label>
          <input 
            type="text" 
            id="url" 
            name="url" 
            placeholder="Insert any YouTube video" 
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" 
            value={formData.url} 
            onChange={handleChange} 
          />
        </section>
        <div id="blog-settings" className="bg-white rounded-lg shadow-md p-6">
          <div className="text-lg font-semibold mb-4">Blog Settings</div>
          <div className="grid grid-cols-2 gap-4 mb-6">
            <div>
              <label htmlFor="blogSize" className="block text-sm font-medium text-gray-700 mb-2">Blog Size</label>
              <select 
                id="blogSize" 
                name="blogSize" 
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" 
                value={formData.blogSize} 
                onChange={handleChange}
              >
                <option value="Small">Small</option>
                <option value="Medium">Medium</option>
                <option value="Large">Large</option>
              </select>
            </div>
            <div>
              <label htmlFor="blogTone" className="block text-sm font-medium text-gray-700 mb-2">Blog Tone</label>
              <select 
                id="blogTone" 
                name="blogTone" 
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" 
                value={formData.blogTone} 
                onChange={handleChange}
              >
                <option value="engaging">Engaging</option>
                <option value="inspirational">Inspirational</option>
                <option value="informative">Informative</option>
                <option value="professional">Professional</option>
                <option value="conversational">Conversational</option>
                <option value="promotional">Promotional</option>
                <option value="storytelling">Storytelling</option>
                <option value="educational">Educational</option>
                <option value="news">News</option>
                <option value="humorous">Humorous</option>
                <option value="casual">Casual</option>
                <option value="review">Review</option>
                <option value="how-to">How To</option>
              </select>
            </div>
            <div>
              <label htmlFor="mediaLanguage" className="block text-sm font-medium text-gray-700 mb-2">Media Language</label>
              <select 
                id="mediaLanguage" 
                name="mediaLanguage" 
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" 
                value={formData.mediaLanguage} 
                onChange={handleChange}
              >
                <option value="en">English</option>
                <option value="es">Spanish</option>
                <option value="fr">French</option>
                <option value="de">German</option>
                <option value="it">Italian</option>
                <option value="pt">Portuguese</option>
                <option value="nl">Dutch</option>
                <option value="ru">Russian</option>
                <option value="zh">Chinese</option> 
                <option value="ja">Japanese</option>
                <option value="ko">Korean</option>
                <option value="ar">Arabic</option>
                <option value="hi">Hindi</option>
                <option value="bn">Bengali</option>
                <option value="tr">Turkish</option>
                <option value="pl">Polish</option>
                <option value="sv">Swedish</option>
                <option value="da">Danish</option>
                <option value="no">Norwegian</option>
                <option value="fi">Finnish</option>
                <option value="telgu">Telugu</option>
              </select>
            </div>
            <div>
              <label htmlFor="blogLanguage" className="block text-sm font-medium text-gray-700 mb-2">Blog Language</label>
              <select 
                id="blogLanguage" 
                name="blogLanguage" 
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" 
                value={formData.blogLanguage} 
                onChange={handleChange}
              >
                <option value="english">English</option>
                <option value="spanish">Spanish</option>
                <option value="french">French</option>
                <option value="german">German</option>
                <option value="italian">Italian</option>
                <option value="portuguese">Portuguese</option>
                <option value="dutch">Dutch</option>
                <option value="russian">Russian</option>
                <option value="chinese">Chinese</option>
                <option value="japanese">Japanese</option>
                <option value="korean">Korean</option>
                <option value="arabic">Arabic</option>
                <option value="hindi">Hindi</option>
                <option value="bengali">Bengali</option>
                <option value="turkish">Turkish</option>
                <option value="polish">Polish</option>
                <option value="swedish">Swedish</option>
                <option value="danish">Danish</option>
                <option value="norwegian">Norwegian</option>
                <option value="finnish">Finnish</option>
                <option value="telgu">Telugu</option>
              </select>
            </div>
            <div>
              <label htmlFor="writersPov" className="block text-sm font-medium text-gray-700 mb-2">Writer's Point of View</label>
              <select 
                id="writersPov" 
                name="writersPov" 
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" 
                value={formData.writersPov} 
                onChange={handleChange}
              >
                <option value="first-person">First Person (I and We)</option>
                <option value="second-person">Second Person (You)</option>
                <option value="third-person">Third Person (He, She, They, It)</option>
              </select>
            </div>
          </div>
        </div>
        <button 
          type="submit" 
          id="go_button" 
          className="mb-8 mt-8 bg-green-500 hover:bg-green-700 text-white font-bold mt-2 py-2 px-4 rounded-lg text-xl w-full" 
          onClick={handleSubmit}
        >
          Generate New Article
        </button>
      </div>
    </div>
  );
};

export default CreateBlog;
