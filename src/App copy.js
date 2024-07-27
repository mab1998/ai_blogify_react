import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { AuthProvider } from './AuthContext';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import LandingPage from './pages/LandingPage'; // Import the LandingPage
import HomePage from './pages/HomePage';
import PrivateRoute from './components/PrivateRoute';
import Layout from './components/Layout';
import AuthLayout from './components/AuthLayout';
import '@fortawesome/fontawesome-free/css/all.min.css';
import BlogsPage from './pages/BlogsPage';
import SubscriptionsPage from './pages/SubscriptionsPage';
import TransactionsPage from './pages/TransactionsPage';
import UsersPage from './pages/UsersPage';
import SettingsPage from './pages/SettingsPage';
import BlogViewPage from './pages/BlogViewPage'; // Import the new BlogViewPage
import EditBlog from './pages/EditBlog';
import CreateBlog from './pages/CreateBlog'; // Import the CreateBlog component
import WaitingScreen from './pages/WaitingScreen';
import Profile from './pages/Profile';

const App = () => {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/login" element={<AuthLayout><LoginPage /></AuthLayout>} />
          <Route path="/register" element={<AuthLayout><RegisterPage /></AuthLayout>} />

          <Route
            path="/dashboard"
            element={
              <PrivateRoute>
                <Layout>
                  <HomePage />
                </Layout>
              </PrivateRoute>
            }
          />

          <Route
            path="/dashboard/blog/create"
            element={
              <PrivateRoute>
                <CreateBlog />
              </PrivateRoute>
            }
          />

          <Route 
            path="/profile" 
            element={
              <PrivateRoute>
                <Profile />
              </PrivateRoute>
            }
          />

          <Route
            path="/dashboard/blogs"
            element={
              <PrivateRoute>
                <BlogsPage />
              </PrivateRoute>
            }
          />

          <Route
            path="/dashboard/blog/:blogId/view"
            element={
              <PrivateRoute>
                <Layout>
                  <BlogViewPage />
                </Layout>
              </PrivateRoute>
            }
          />

          <Route
            path="/dashboard/blog/:blogId/edit"
            element={
              <PrivateRoute>
                <Layout>
                  <EditBlog />
                </Layout>
              </PrivateRoute>
            }
          />

          <Route
            path="/waiting/:articleId"
            element={
              <PrivateRoute>
                <WaitingScreen />
              </PrivateRoute>
            }
          />

          <Route
            path="/dashboard/subscriptions"
            element={
              <PrivateRoute>
                <SubscriptionsPage />
              </PrivateRoute>
            }
          />

          <Route
            path="/dashboard/transactions"
            element={
              <PrivateRoute>
                <TransactionsPage />
              </PrivateRoute>
            }
          />

          <Route
            path="/dashboard/users"
            element={
              <PrivateRoute>
                <UsersPage />
              </PrivateRoute>
            }
          />

          <Route
            path="/dashboard/settings"
            element={
              <PrivateRoute>
                <Layout>
                  <SettingsPage />
                </Layout>
              </PrivateRoute>
            }
          />
        </Routes>
      </Router>
    </AuthProvider>
  );
};

export default App;
