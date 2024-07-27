import React from 'react';
import Navbar from './Navbar';

const AdminLayout = ({ children }) => {
  return (
    <div>
      <Navbar />
      <div className="container mx-auto px-4">
        {children}
      </div>
    </div>
  );
};

export default AdminLayout;
