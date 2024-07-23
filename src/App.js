import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { AuthProvider } from './AuthContext';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
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
          <Route path="/login" element={<AuthLayout><LoginPage /></AuthLayout>} />
          <Route path="/register" element={<AuthLayout><RegisterPage /></AuthLayout>} />
          <Route
            path="/"
            element={
              <PrivateRoute>
                <Layout>
                  <HomePage />
                </Layout>
              </PrivateRoute>
            }
          />


          <Route
            path="/blog/create"
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
            path="/blogs"
            element={
              <PrivateRoute>
                <BlogsPage />
              </PrivateRoute>
            }
          />


           <Route
            path="/blog/:blogId/view"
            element={
              <PrivateRoute>
                <Layout>
                  <BlogViewPage />
                </Layout>
              </PrivateRoute>
            }
          />

          <Route
            path="/blog/:blogId/edit"
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

          {/* <Route
            path="/blog/:blog_id/view" // Add the new route for viewing a specific blog
            element={
              <PrivateRoute>
                <BlogViewPage />
              </PrivateRoute>
            }
          /> */}
          <Route
            path="/subscriptions"
            element={
              <PrivateRoute>
                <SubscriptionsPage />
              </PrivateRoute>
            }
          />
          <Route
            path="/transactions"
            element={
              <PrivateRoute>
                <TransactionsPage />
              </PrivateRoute>
            }
          />
          <Route
            path="/users"
            element={
              <PrivateRoute>
                <UsersPage />
              </PrivateRoute>
            }
          />
          <Route
            path="/settings"
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
