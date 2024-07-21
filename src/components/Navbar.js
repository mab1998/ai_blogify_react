import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { signOut } from 'firebase/auth';
import { auth } from '../firebaseConfig';
import logo from '../assets/images/logo-sm.png';
import avatar from '../assets/images/users/avatar-4.jpg'; // Adjust the path based on your structure
import CreditStatus from './CreditStatus'; // Import the CreditStatus component
import { useAuth } from '../AuthContext';

const Navbar = () => {
      const { currentUser } = useAuth();

  const [darkMode, setDarkMode] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const savedMode = localStorage.getItem('darkMode');
    if (savedMode) {
      setDarkMode(savedMode === 'true');
    }
  }, []);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    localStorage.setItem('darkMode', !darkMode);
    if (!darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  };

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  const handleSignOut = async () => {
    try {
      await signOut(auth);
      navigate('/login'); // Redirect to the login page after signing out
    } catch (error) {
      console.error('Error signing out:', error);
    }
  };

  return (
    <nav className="bg-gray-900 px-2 sm:px-4 py-2.5 rounded dark:bg-gray-800">
      <div className="container flex flex-wrap justify-between items-center mx-auto">
        <Link to="/" className="flex items-center">
          <img src={logo} className="mr-3 h-6 sm:h-9" alt="T-Wind Logo" />
          <span className="self-center text-xl font-semibold whitespace-nowrap text-white">T-Wind</span>
        </Link>
        <div className="hidden w-full md:flex md:items-center md:w-auto" id="mobile-menu">
          <ul className="flex flex-col mt-4 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium">
            <li>
              <Link to="/" className="flex items-center text-gray-300 hover:text-white">
                <i className="fas fa-home mr-2"></i> Dashboards
              </Link>
            </li>
            <li>
              <Link to="/blogs" className="flex items-center text-gray-300 hover:text-white">
                <i className="fas fa-blog mr-2"></i> Blogs
              </Link>
            </li>
            <li>
              <Link to="/subscriptions" className="flex items-center text-gray-300 hover:text-white">
                <i className="fas fa-credit-card mr-2"></i> Subscriptions
              </Link>
            </li>
            <li>
              <Link to="/transactions" className="flex items-center text-gray-300 hover:text-white">
                <i className="fas fa-history mr-2"></i> Transaction History
              </Link>
            </li>
            <li>
              <Link to="/users" className="flex items-center text-gray-300 hover:text-white">
                <i className="fas fa-user mr-2"></i> Users
              </Link>
            </li>
            <li>
              <Link to="/settings" className="flex items-center text-gray-300 hover:text-white">
                <i className="fas fa-cog mr-2"></i> Settings
              </Link>
            </li>
          </ul>
        </div>
        <div className="flex items-center md:order-2 space-x-6">
          <button
            type="button"
            className="text-gray-300 hover:text-white"
            onClick={toggleDarkMode}
          >
            <i className={`fas ${darkMode ? 'fa-sun' : 'fa-moon'}`}></i>
          </button>
          <CreditStatus /> {/* Include the CreditStatus component */}
          <div className="relative">
            <button
              type="button"
              className="flex text-sm bg-gray-800 rounded-full focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600"
              id="user-menu-button"
              aria-expanded={dropdownOpen}
              onClick={toggleDropdown}
            >
              <span className="sr-only">Open user menu</span>
              <img className="w-8 h-8 rounded-full" src={avatar} alt="user photo" />
            </button>
            {dropdownOpen && (
              <div className="absolute right-0 z-50 mt-2 w-48 bg-white rounded-md shadow-lg py-1 dark:bg-gray-700">
                <div className="py-3 px-4">
                  <span className="block text-sm text-gray-900 dark:text-white">{currentUser?.firstName} {currentUser?.lastName}</span>
                  <span className="block text-sm font-medium text-gray-500 truncate dark:text-gray-400">Admin</span>
                </div>
                <ul className="py-1" aria-labelledby="dropdown">
                  <li>
                    <Link
                      to="/profile"
                      className="block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                    >
                      Dashboard
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/settings"
                      className="block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                    >
                      Settings
                    </Link>
                  </li>
                  <li>
                    <button
                      onClick={handleSignOut}
                      className="w-full text-left block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                    >
                      Sign out
                    </button>
                  </li>
                </ul>
              </div>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
