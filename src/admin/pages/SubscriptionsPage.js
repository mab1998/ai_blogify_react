import React, { useEffect, useState } from 'react';
import { loadStripe } from '@stripe/stripe-js';
import Navbar from '../components/Navbar';
import '../../assets/styles/custom.css'; // Adjust the path as needed

const stripePromise = loadStripe('your_stripe_public_key');

const SubscriptionsPage = () => {
  const [subscriptions, setSubscriptions] = useState([]);
  const [alertMessage, setAlertMessage] = useState(null);
  const [alertType, setAlertType] = useState('');

  useEffect(() => {
    const fetchSubscriptions = async () => {
      try {
        const response = await fetch('http://127.0.0.1:8000/subscriptions');
        const data = await response.json();
        setSubscriptions(data);
      } catch (error) {
        console.error('Error fetching subscriptions:', error);
      }
    };

    fetchSubscriptions();
  }, []);

  const handleUpdate = async () => {
    try {
      const response = await fetch('http://127.0.0.1:8000/subscriptions', {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(subscriptions),
      });
      if (response.ok) {
        const updatedSubscriptions = await response.json();
        setSubscriptions(updatedSubscriptions);
        setAlertMessage('Subscriptions updated successfully!');
        setAlertType('success');
      } else {
        console.error('Error updating subscriptions:', response.statusText);
        setAlertMessage('Failed to update subscriptions.');
        setAlertType('error');
      }
    } catch (error) {
      console.error('Error updating subscriptions:', error);
      setAlertMessage('Failed to update subscriptions.');
      setAlertType('error');
    }
  };

  const handleInputChange = (index, field, value) => {
    const updatedSubscriptions = [...subscriptions];
    updatedSubscriptions[index][field] = value;
    setSubscriptions(updatedSubscriptions);
  };

  const handleCheckboxChange = (index, platform) => {
    const updatedSubscriptions = [...subscriptions];
    const platforms = updatedSubscriptions[index].supported_platforms;
    if (platforms.includes(platform)) {
      updatedSubscriptions[index].supported_platforms = platforms.filter(p => p !== platform);
    } else {
      updatedSubscriptions[index].supported_platforms.push(platform);
    }
    setSubscriptions(updatedSubscriptions);
  };

  return (
    <div className="flex flex-col min-h-screen">
      <div className="container mx-auto px-4 py-6">
        <h1 className="font-semibold text-2xl mb-4">Manage Subscriptions</h1>
        {alertMessage && (
          <div className={`alert ${alertType === 'success' ? 'alert-success' : 'alert-error'}`}>
            {alertMessage}
          </div>
        )}
        <table className="min-w-full bg-white dark:bg-gray-800 shadow-md rounded-lg">
          <thead>
            <tr>
              <th className="py-2 px-4 border-b-2 border-gray-300">Name</th>
              <th className="py-2 px-4 border-b-2 border-gray-300">Price ($)</th>
              <th className="py-2 px-4 border-b-2 border-gray-300">Credits</th>
              <th className="py-2 px-4 border-b-2 border-gray-300">YouTube</th>
              <th className="py-2 px-4 border-b-2 border-gray-300">Google Podcast</th>
              <th className="py-2 px-4 border-b-2 border-gray-300">Spotify</th>
              <th className="py-2 px-4 border-b-2 border-gray-300">Vimeo</th>
              <th className="py-2 px-4 border-b-2 border-gray-300">Enabled</th>
            </tr>
          </thead>
          <tbody>
            {subscriptions.map((plan, index) => (
              <tr key={plan.id}>
                <td className="py-2 px-4 border-b border-gray-300">
                  <input
                    type="text"
                    value={plan.name}
                    onChange={(e) => handleInputChange(index, 'name', e.target.value)}
                    className="w-full border-none focus:ring-0 bg-transparent text-gray-900 dark:text-gray-100"
                  />
                </td>
                <td className="py-2 px-4 border-b border-gray-300">
                  <div className="flex items-center">
                    <span>$</span>
                    <input
                      type="number"
                      value={plan.price}
                      onChange={(e) => handleInputChange(index, 'price', e.target.value)}
                      className="w-full border-none focus:ring-0 bg-transparent text-gray-900 dark:text-gray-100 ml-1"
                    />
                  </div>
                </td>
                <td className="py-2 px-4 border-b border-gray-300">
                  <input
                    type="number"
                    value={plan.credits}
                    onChange={(e) => handleInputChange(index, 'credits', e.target.value)}
                    className="w-full border-none focus:ring-0 bg-transparent text-gray-900 dark:text-gray-100"
                  />
                </td>
                <td className="py-2 px-4 border-b border-gray-300 text-center">
                  <input
                    type="checkbox"
                    checked={plan.supported_platforms.includes('YouTube')}
                    onChange={() => handleCheckboxChange(index, 'YouTube')}
                    className="form-checkbox h-4 w-4 text-blue-600"
                  />
                </td>
                <td className="py-2 px-4 border-b border-gray-300 text-center">
                  <input
                    type="checkbox"
                    checked={plan.supported_platforms.includes('Google Podcast')}
                    onChange={() => handleCheckboxChange(index, 'Google Podcast')}
                    className="form-checkbox h-4 w-4 text-blue-600"
                  />
                </td>
                <td className="py-2 px-4 border-b border-gray-300 text-center">
                  <input
                    type="checkbox"
                    checked={plan.supported_platforms.includes('Spotify')}
                    onChange={() => handleCheckboxChange(index, 'Spotify')}
                    className="form-checkbox h-4 w-4 text-blue-600"
                  />
                </td>
                <td className="py-2 px-4 border-b border-gray-300 text-center">
                  <input
                    type="checkbox"
                    checked={plan.supported_platforms.includes('Vimeo')}
                    onChange={() => handleCheckboxChange(index, 'Vimeo')}
                    className="form-checkbox h-4 w-4 text-blue-600"
                  />
                </td>
                <td className="py-2 px-4 border-b border-gray-300 text-center">
                  <input
                    type="checkbox"
                    checked={plan.enabled}
                    onChange={(e) => handleInputChange(index, 'enabled', e.target.checked)}
                    className="form-checkbox h-4 w-4 text-blue-600"
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className="text-center mt-4">
          <button
            onClick={handleUpdate}
            className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600"
          >
            Update All
          </button>
        </div>
        <footer className="mt-8 text-center text-gray-500 dark:text-gray-400">
          © 2024 T-Wind
        </footer>
      </div>
    </div>
  );
};

export default SubscriptionsPage;
