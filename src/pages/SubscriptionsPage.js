import React, { useEffect, useState } from 'react';
import Navbar from '../components/Navbar';
import '../assets/styles/custom.css'; // Adjust the path as needed

const SubscriptionsPage = () => {
  const [subscriptions, setSubscriptions] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchSubscriptions = async () => {
      try {
        const response = await fetch('http://127.0.0.1:8000/subscriptions');
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setSubscriptions(data);
      } catch (error) {
        console.error('Error fetching subscriptions:', error);
        setError('Error fetching subscriptions');
      }
    };

    fetchSubscriptions();
  }, []);

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <div className="container mx-auto px-2 min-h-[calc(100vh-138px)] relative pb-14 grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
        {error && <p className="text-red-500">{error}</p>}
        {subscriptions.length > 0 ? (
          subscriptions.map((plan) => (
            <div key={plan.id} className="card">
              <div className="card-body flex-grow text-center p-14">
                <span className="inline-flex bg-primary-500/20 text-primary-500 font-semibold uppercase text-[0.688rem] leading-4 tracking-widest py-1 px-3 rounded-full mb-4">
                  {plan.name}
                </span>
                <h2 className="font-bold uppercase tracking-wide text-center mb-4 text-gray-800 dark:text-slate-400">
                  {plan.name}
                </h2>
                <div className="text-base font-medium mb-10 sm:mb-8 lg:mb-10">
                  <span className="flex items-center justify-center">
                    <ins className="text-5xl tracking-tight text-gray-800 font-extrabold no-underline mx-3 dark:text-slate-200">
                      ${plan.price}
                    </ins>
                    <span className="text-gray-400">/month</span>
                  </span>
                </div>
                <div className="mb-8 sm:mb-0 xl:mb-12 flex flex-col items-center sm:block">
                  <ul role="list" className="grid grid-cols-1 lg:grid-cols-2 gap-x-8 gap-y-4 xl:grid-cols-1">
                    {(plan.features || []).map((feature, i) => (
                      <li key={i} className="flex items-center lg:w-64 xl:w-auto text-gray-600 font-semibold dark:text-slate-500">
                        <i className="fas fa-check mr-2 text-primary-400 text-xs"></i>
                        {feature}
                      </li>
                    ))}
                    {plan.supported_platforms.map((platform, i) => (
                      <li key={i} className="flex items-center lg:w-64 xl:w-auto text-gray-600 font-semibold dark:text-slate-500">
                        <i className="fas fa-check mr-2 text-primary-400 text-xs"></i>
                        Supported Platform: {platform}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <div className="mt-auto p-4">
                <a href="#" className="block mx-auto text-center w-60 md:w-64 xl:w-60 bg-blue-500 text-white hover:bg-blue-600 rounded-lg font-semibold p-3 focus:outline-none">
                  Get this package
                </a>
              </div>
            </div>
          ))
        ) : (
          <p className="text-center text-gray-600">No subscriptions available</p>
        )}
        <footer className="mt-8">
          <div className="text-center text-gray-500 dark:text-gray-400">
            © 2024 T-Wind
          </div>
        </footer>
      </div>
    </div>
  );
};

export default SubscriptionsPage;
