import React from 'react';

const AuthLayout = ({ children }) => {
  return (
    <div className="flex flex-col justify-center min-h-screen bg-gray-50 dark:bg-gray-900">
      <div className="w-full max-w-md p-6 m-auto bg-white rounded-md shadow-md dark:bg-gray-800">
        {children}
      </div>
    </div>
  );
};

export default AuthLayout;
