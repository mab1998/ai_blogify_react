import React, { useRef, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { signInWithEmailAndPassword, setPersistence, browserSessionPersistence, browserLocalPersistence } from 'firebase/auth';
import { auth } from '../firebaseConfig';
import logo from '../assets/images/logo-sm.png'; // Adjust the path based on your structure

const LoginPage = () => {
  const emailRef = useRef();
  const passwordRef = useRef();
  const navigate = useNavigate();
  const [rememberMe, setRememberMe] = useState(false);

  useEffect(() => {
    document.title = 'Login';
    const rememberedEmail = localStorage.getItem('rememberedEmail');
    if (rememberedEmail) {
      emailRef.current.value = rememberedEmail;
    }

    // Check if the user is already logged in
    auth.onAuthStateChanged(user => {
      if (user) {
        navigate('/');
      }
    });
  }, [navigate]);

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      await setPersistence(auth, rememberMe ? browserLocalPersistence : browserSessionPersistence);
      await signInWithEmailAndPassword(auth, emailRef.current.value, passwordRef.current.value);
      if (rememberMe) {
        localStorage.setItem('rememberedEmail', emailRef.current.value);
      } else {
        localStorage.removeItem('rememberedEmail');
      }
      navigate('/');
    } catch (error) {
      console.error("Error signing in", error);
    }
  };

  const handleRememberMeChange = () => {
    setRememberMe(!rememberMe);
  };

  return (
    <>
      <div className="text-center">
        <a href="/">
          <img src={logo} alt="Logo" className="w-14 h-14 mx-auto mb-2" />
        </a>
        <h3 className="font-semibold text-white text-xl mb-1">Let's Get Started T-Wind</h3>
        <p className="text-xs text-gray-400">Sign in to continue to T-Wind.</p>
      </div>
      <form onSubmit={handleLogin} className="mt-6">
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-200">Email</label>
          <input
            type="email"
            id="email"
            ref={emailRef}
            className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
            placeholder="Your Email"
            required
          />
        </div>
        <div className="mt-4">
          <label htmlFor="password" className="block text-sm font-medium text-gray-700 dark:text-gray-200">Your password</label>
          <input
            type="password"
            id="password"
            ref={passwordRef}
            className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
            placeholder="Password"
            required
          />
        </div>
        <a href="#" className="text-xs text-gray-600 hover:underline dark:text-gray-400">Forget Password?</a>
        <div className="mt-3">
          <label className="inline-flex items-center">
            <input 
              type="checkbox" 
              className="form-checkbox text-blue-500 bg-white border-gray-300 rounded dark:bg-gray-700 dark:border-gray-600 dark:focus:border-blue-500 focus:border-blue-500 focus:outline-none focus:ring"
              checked={rememberMe}
              onChange={handleRememberMeChange}
            />
            <span className="ml-2 text-sm text-gray-600 dark:text-gray-200">Remember me</span>
          </label>
        </div>
        <div className="mt-6">
          <button
            type="submit"
            className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-blue-500 rounded hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
          >
            Login
          </button>
        </div>
      </form>
      <p className="mt-6 text-sm text-center text-gray-600 dark:text-gray-200">
        Don't have an account? <a href="/register" className="font-medium text-blue-600 hover:underline">Sign up</a>
      </p>
    </>
  );
};

export default LoginPage;
