import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { auth, db } from '../../firebaseConfig';
import { doc, getDoc, setDoc, updateDoc } from "firebase/firestore";
import { updatePassword, reauthenticateWithCredential, EmailAuthProvider } from "firebase/auth";
import Navbar from '../../components/Navbar';
import { useAuth } from '../../AuthContext'; // Make sure to adjust the import according to your project structure

const Profile = () => {
  const { currentUser } = useAuth();
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    currentPassword: '',
    newPassword: '',
    confirmNewPassword: ''
  });

  const navigate = useNavigate();

  useEffect(() => {
    if (currentUser) {
      setFormData({
        ...formData,
        firstName: currentUser.firstName,
        lastName: currentUser.lastName,
        email: currentUser.email,
      });
    }
  }, [currentUser]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const user = auth.currentUser;
    if (user) {
      if (formData.newPassword !== formData.confirmNewPassword) {
        alert('New password and confirm new password do not match');
        return;
      }
      try {
        const credential = EmailAuthProvider.credential(
          user.email,
          formData.currentPassword
        );
        await reauthenticateWithCredential(user, credential);

        const docRef = doc(db, "users", user.uid);
        const docSnap = await getDoc(docRef);
        if (docSnap.exists()) {
          await updateDoc(docRef, { firstName: formData.firstName, lastName: formData.lastName });
        } else {
          await setDoc(docRef, { firstName: formData.firstName, lastName: formData.lastName });
        }

        if (formData.newPassword) {
          await updatePassword(user, formData.newPassword);
        }

        alert('Profile updated successfully');
      } catch (error) {
        console.error('Error updating profile:', error);
        if (error.code === 'auth/wrong-password') {
          alert('Incorrect current password');
        } else {
          alert('Failed to update profile');
        }
      }
    }
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <div className="container mx-auto px-4 py-8">
        <div className="mb-4">
          <h1 className="font-semibold text-2xl mb-1 dark:text-slate-100">Profile</h1>
          <ol className="list-reset flex text-sm text-gray-500 dark:text-gray-400">
            <li><a href="#" className="text-gray-500 dark:text-gray-400">T-Wind</a></li>
            <li><span className="mx-2">/</span></li>
            <li className="text-gray-500 dark:text-gray-400">Profile</li>
            <li><span className="mx-2">/</span></li>
            <li className="text-blue-600 hover:text-blue-700 dark:text-blue-500">Profile</li>
          </ol>
        </div>

        <form onSubmit={handleSubmit} className="bg-white p-4 rounded-lg shadow-md">
          <div className="mb-4">
            <label htmlFor="firstName" className="block mb-2 text-sm font-medium">First Name</label>
            <input
              type="text"
              id="firstName"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="lastName" className="block mb-2 text-sm font-medium">Last Name</label>
            <input
              type="text"
              id="lastName"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block mb-2 text-sm font-medium">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              readOnly
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="currentPassword" className="block mb-2 text-sm font-medium">Current Password</label>
            <input
              type="password"
              id="currentPassword"
              name="currentPassword"
              value={formData.currentPassword}
              onChange={handleChange}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="newPassword" className="block mb-2 text-sm font-medium">New Password</label>
            <input
              type="password"
              id="newPassword"
              name="newPassword"
              value={formData.newPassword}
              onChange={handleChange}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="confirmNewPassword" className="block mb-2 text-sm font-medium">Confirm New Password</label>
            <input
              type="password"
              id="confirmNewPassword"
              name="confirmNewPassword"
              value={formData.confirmNewPassword}
              onChange={handleChange}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5"
            />
          </div>
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg w-full"
          >
            Update
          </button>
        </form>
      </div>
    </div>
  );
};

export default Profile;
