import React, { useEffect, useState, useRef } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from '../../firebaseConfig';
import { Chart, registerables } from 'chart.js';

Chart.register(...registerables);

const AdminHomePage = () => {
  const [user] = useAuthState(auth);
  const [userData, setUserData] = useState({
    usersCount: 'N/A',
    subscribedCount: 'N/A',
    earnedLastMonth: 'N/A',
    generatedBlogCount: 'N/A',
    chartData: [],  // Add this line to hold chart data
    chartLabels: [],  // Add this line to hold chart labels
    chartTitle: ''  // Add this line to hold chart title
  });
  const chartRef = useRef(null);

  useEffect(() => {
    const fetchData = async () => {
      if (user) {
        try {
          const token = await user.getIdToken();
          const response = await fetch(`http://127.0.0.1:8000/user/${user.uid}`, {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          });

          if (!response.ok) {
            throw new Error('Network response was not ok');
          }

          const data = await response.json();
          setUserData(data);
        } catch (error) {
          console.error('Error fetching data:', error);
        }
      }
    };

    fetchData();
  }, [user]);

  useEffect(() => {
    if (userData.chartData.length > 0 && userData.chartLabels.length > 0) {  // Ensure data is available
      const ctx = document.getElementById('bar').getContext('2d');
      if (chartRef.current) {
        chartRef.current.destroy();
      }
      chartRef.current = new Chart(ctx, {
        type: 'bar',
        data: {
          labels: userData.chartLabels,  // Use dynamic labels
          datasets: [{
            label: userData.chartTitle,  // Use dynamic title
            data: userData.chartData,  // Use dynamic data
            backgroundColor: [
              'rgba(255, 99, 132, 0.2)',
              'rgba(54, 162, 235, 0.2)',
              'rgba(255, 206, 86, 0.2)',
              'rgba(75, 192, 192, 0.2)',
              'rgba(153, 102, 255, 0.2)',
              'rgba(255, 159, 64, 0.2)',
              'rgba(255, 99, 132, 0.2)',
              'rgba(54, 162, 235, 0.2)',
              'rgba(255, 206, 86, 0.2)',
              'rgba(75, 192, 192, 0.2)',
              'rgba(153, 102, 255, 0.2)',
              'rgba(255, 159, 64, 0.2)',
            ],
            borderColor: [
              'rgba(255, 99, 132, 1)',
              'rgba(54, 162, 235, 1)',
              'rgba(255, 206, 86, 1)',
              'rgba(75, 192, 192, 1)',
              'rgba(153, 102, 255, 1)',
              'rgba(255, 159, 64, 1)',
              'rgba(255, 99, 132, 1)',
              'rgba(54, 162, 235, 1)',
              'rgba(255, 206, 86, 1)',
              'rgba(75, 192, 192, 1)',
              'rgba(153, 102, 255, 1)',
              'rgba(255, 159, 64, 1)',
            ],
            borderWidth: 1,
          }],
        },
        options: {
          plugins: {
            title: {
              display: true,
              text: userData.chartTitle  // Use dynamic title
            }
          },
          scales: {
            y: {
              beginAtZero: true,
            },
          },
        },
      });
    }
  }, [userData.chartData, userData.chartLabels, userData.chartTitle]);  // Re-render chart when data changes

  return (
    <div className="flex flex-col min-h-screen">
      <div className="container mx-auto px-2">
        <div className="flex flex-wrap">
          <div className="flex items-center py-4 w-full">
            <div className="w-full">
              <div className="">
                <div className="flex flex-wrap justify-between">
                  <div className="items-center">
                    <h1 className="font-semibold text-xl mb-1 block dark:text-slate-100">Blogs</h1>
                    <ol className="list-reset flex text-sm">
                      <li><button className="text-gray-500">T-Wind</button></li>
                      <li><span className="text-gray-500 mx-2">/</span></li>
                      <li className="text-blue-600 hover:text-blue-700">Dashboard</li>
                    </ol>
                  </div>
                  <div className="flex items-center">
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex-grow container mx-auto px-2 py-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3 mb-3">
          <div className="sm:col-span-3 md:col-span-2 lg:col-span-2 xl:col-span-3">
            <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              <div className="md:col-span-2 lg:col-span-2 xl:col-span-1">
                <div className="bg-white dark:bg-slate-800 shadow rounded-md w-full p-4 relative overflow-hidden">
                  <div className="flex justify-between items-center">
                    <div className="absolute -left-6 -top-4 text-blue-500 p-3 text-center inline-flex items-center justify-center w-32 h-32">
                      <i className="ti ti-users text-3xl"></i>
                    </div>
                    <div className="self-center ml-auto">
                      <h3 className="my-1 font-semibold text-2xl dark:text-slate-200">{userData.usersCount}</h3>
                      <p className="text-gray-400 mb-0 font-medium">Users</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="md:col-span-2 lg:col-span-2 xl:col-span-1">
                <div className="bg-white dark:bg-slate-800 shadow rounded-md w-full p-4 relative overflow-hidden">
                  <div className="flex justify-between items-center">
                    <div className="absolute -left-6 -top-4 text-blue-500 p-3 text-center inline-flex items-center justify-center w-32 h-32">
                      <i className="ti ti-clock text-3xl"></i>
                    </div>
                    <div className="self-center ml-auto">
                      <h3 className="my-1 font-semibold text-2xl dark:text-slate-200">{userData.subscribedCount}</h3>
                      <p className="text-gray-400 mb-0 font-medium">Subscribed</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="md:col-span-2 lg:col-span-2 xl:col-span-1">
                <div className="bg-white dark:bg-slate-800 shadow rounded-md w-full p-4 relative overflow-hidden">
                  <div className="flex justify-between items-center">
                    <div className="absolute -left-6 -top-4 text-blue-500 p-3 text-center inline-flex items-center justify-center w-32 h-32">
                      <i className="ti ti-activity text-3xl"></i>
                    </div>
                    <div className="self-center ml-auto">
                      <h3 className="my-1 font-semibold text-2xl dark:text-slate-200">{userData.earnedLastMonth}</h3>
                      <p className="text-gray-400 mb-0 font-medium">Earned last month</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="md:col-span-2 lg:col-span-2 xl:col-span-1">
                <div className="bg-white dark:bg-slate-800 shadow rounded-md w-full p-4 relative overflow-hidden">
                  <div className="flex justify-between items-center">
                    <div className="absolute -left-6 -top-4 text-blue-500 p-3 text-center inline-flex items-center justify-center w-32 h-32">
                      <i className="ti ti-confetti text-3xl"></i>
                    </div>
                    <div className="self-center ml-auto">
                      <h3 className="my-1 font-semibold text-2xl dark:text-slate-200">{userData.generatedBlogCount}</h3>
                      <p className="text-gray-400 mb-0 font-medium">Generated blog</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="md:col-span-4 lg:col-span-4 xl:col-span-3">
            <div className="bg-white dark:bg-slate-800 shadow rounded-md h-full w-full p-4 relative overflow-hidden">
              <div className="chart-container">
                <canvas id="bar" height="70"></canvas>
              </div>
            </div>
          </div>
        </div>
      </div>
      <footer className="text-center py-4">
        © 2024 T-Wind
      </footer>
    </div>
  );
};

export default AdminHomePage;
