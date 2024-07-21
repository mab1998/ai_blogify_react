// src/pages/RegisterPage.js
import React, { useRef, useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth';
import { auth } from '../firebaseConfig';

const RegisterPage = () => {
  const firstNameRef = useRef();
  const lastNameRef = useRef();
  const emailRef = useRef();
  const confirmEmailRef = useRef();
  const passwordRef = useRef();
  const navigate = useNavigate();
  const [error, setError] = useState('');

  const handleRegister = async (e) => {
    e.preventDefault();
    if (emailRef.current.value !== confirmEmailRef.current.value) {
      setError('Emails do not match');
      return;
    }
    setError('');

    try {
      const userCredential = await createUserWithEmailAndPassword(auth, emailRef.current.value, passwordRef.current.value);
      const user = userCredential.user;
      await updateProfile(user, {
        displayName: `${firstNameRef.current.value} ${lastNameRef.current.value}`,
      });
      navigate('/');
    } catch (error) {
      console.error('Error registering', error);
      setError('Failed to create an account');
    }
  };

  return (
    <div className="flex flex-col justify-center min-h-screen bg-gray-50 dark:bg-gray-900">
      <div className="w-full max-w-md p-6 m-auto bg-white rounded-md shadow-md dark:bg-gray-800">
        <div className="text-center">
          <h3 className="font-semibold text-xl mb-1 text-gray-900 dark:text-white">Register</h3>
        </div>
        <form onSubmit={handleRegister} className="mt-6">
          {error && <div className="text-red-600 mb-2">{error}</div>}
          <div>
            <label htmlFor="first-name" className="block text-sm font-medium text-gray-700 dark:text-gray-200">First Name</label>
            <input
              type="text"
              id="first-name"
              ref={firstNameRef}
              className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
              placeholder="First Name"
              required
            />
          </div>
          <div className="mt-4">
            <label htmlFor="last-name" className="block text-sm font-medium text-gray-700 dark:text-gray-200">Last Name</label>
            <input
              type="text"
              id="last-name"
              ref={lastNameRef}
              className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
              placeholder="Last Name"
              required
            />
          </div>
          <div className="mt-4">
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-200">Email</label>
            <input
              type="email"
              id="email"
              ref={emailRef}
              className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
              placeholder="Email"
              required
            />
          </div>
          <div className="mt-4">
            <label htmlFor="confirm-email" className="block text-sm font-medium text-gray-700 dark:text-gray-200">Confirm Email</label>
            <input
              type="email"
              id="confirm-email"
              ref={confirmEmailRef}
              className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
              placeholder="Confirm Email"
              required
            />
          </div>
          <div className="mt-4">
            <label htmlFor="password" className="block text-sm font-medium text-gray-700 dark:text-gray-200">Password</label>
            <input
              type="password"
              id="password"
              ref={passwordRef}
              className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
              placeholder="Password"
              required
            />
          </div>
          <div className="mt-6">
            <button
              type="submit"
              className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-blue-500 rounded hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
            >
              Register
            </button>
          </div>
        </form>
        <p className="mt-6 text-sm text-center text-gray-600 dark:text-gray-200">
          Already have an account? <Link to="/login" className="font-medium text-blue-600 hover:underline">Login</Link>
        </p>
      </div>
    </div>
  );
};

export default RegisterPage;
