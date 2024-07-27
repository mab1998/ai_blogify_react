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
import LandingPage from './pages/LandingPage';
// import Landing from './pages/landing';


import AdminHomePage from './admin/pages/HomePage'; // Admin HomePage import
import AdminLayout from './admin/components/Layout'; // Assuming layout for admin pages is the same
import AdminSubscriptionsPage from './admin//pages/SubscriptionsPage';
import StylesPage from './admin//pages/StylesPage';




import AdminAuthLayout from './components/AuthLayout'; // Assuming auth layout for admin pages is the same
import '@fortawesome/fontawesome-free/css/all.min.css';
import AdminBlogsPage from './admin//pages/BlogsPage';
import AdminTransactionsPage from './admin//pages/TransactionsPage';
import AdminUsersPage from './admin//pages/UsersPage';
import AdminSettingsPage from './admin//pages/SettingsPage';
import AdminBlogViewPage from './admin//pages/BlogViewPage'; // Import the new BlogViewPage
import AdminEditBlog from './admin//pages/EditBlog';
import AdminCreateBlog from './admin//pages/CreateBlog'; // Import the CreateBlog component
import AdminWaitingScreen from './admin//pages/WaitingScreen';
import AdminProfile from './admin//pages/Profile';
import AdminLandingPage from './pages/LandingPage';




const App = () => {
  return (
    <AuthProvider>
      <Router>
        <Routes>



                  {/* Admin Routes */}
          {/* Admin Routes */}
          <Route path="/admin" element={<AdminLayout><AdminHomePage /></AdminLayout>} />

          <Route path="/admin/manage_subscription" element={<AdminLayout><AdminSubscriptionsPage /></AdminLayout>} />
          <Route path="//admin/manage_styles" element={<AdminLayout><StylesPage /></AdminLayout>} />
          <Route path="/admin/transactions" element={<AdminLayout><AdminTransactionsPage /></AdminLayout>} />
          <Route path="/admin/users" element={<AdminUsersPage />} />
          <Route path="/admin/settings" element={<AdminLayout><AdminSettingsPage /></AdminLayout>} />

{/* /admin/manage_ */}


          <Route path="/admin/blog/create" element={<AdminCreateBlog />} />
          <Route path="/admin/profile" element={<AdminProfile />} />
          <Route path="/admin/blogs" element={<AdminBlogsPage />} />
          <Route path="/admin/blog/:blogId/view" element={<AdminLayout><AdminBlogViewPage /></AdminLayout>} />
          <Route path="/admin/blog/:blogId/edit" element={<AdminLayout><AdminEditBlog /></AdminLayout>} />
          <Route path="/admin/waiting/:articleId" element={<AdminWaitingScreen />} />
 


{/* Client Route */}
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

          <Route path="/landing" element={<LandingPage />} />


           {/* <Route
            path="/landing"
            element={
              <PrivateRoute>
                                <Layout>

                  <LandingPage />
                                  </Layout>

              </PrivateRoute>
            }
          /> */}


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
              // <PrivateRoute>
                <SubscriptionsPage />
              // </PrivateRoute>
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
