import React, { useEffect, useState } from 'react';
import Navbar from '../components/Navbar';
import '../assets/styles/custom.css'; // Adjust the path as needed

const TransactionsPage = () => {
  const [transactions, setTransactions] = useState([]);

  useEffect(() => {
    const fetchTransactions = async () => {
      try {
        const response = await fetch('http://127.0.0.1:8000/transactions');
        const data = await response.json();
        setTransactions(data);
      } catch (error) {
        console.error('Error fetching transactions:', error);
      }
    };

    fetchTransactions();
  }, []);

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <div className="container mx-auto px-2">
        <div className="flex flex-wrap">
          <div className="flex items-center py-4 w-full">
            <div className="w-full">
              <div className="">
                <div className="flex flex-wrap justify-between">
                  <div className="items-center">
                    <h1 className="font-semibold text-xl mb-1 block dark:text-slate-100">Transactions</h1>
                    <ol className="list-reset flex text-sm">
                      <li><a href="#" className="text-gray-500">T-Wind</a></li>
                      <li><span className="text-gray-500 mx-2">/</span></li>
                      <li className="text-blue-600 hover:text-blue-700">Transactions</li>
                    </ol>
                  </div>
                  <div className="flex items-center">
                    <button className="px-3 py-2 lg:px-4 bg-blue-500 text-white text-sm font-semibold rounded hover:bg-blue-600">Create New</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-2 min-h-[calc(100vh-138px)] relative pb-14">
        <div className="grid md:grid-cols-12 lg:grid-cols-12 xl:grid-cols-12 gap-4 mb-4">
          <div className="sm:col-span-12 md:col-span-12 lg:col-span-12 xl:col-span-12">
            <div className="card h-full">
              <div className="card-header">
                <h4 className="card-title">Transactions Details</h4>
              </div>
              <div className="card-body">
                <div className="relative overflow-x-auto sm:rounded">
                  <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                    <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-slate-700 dark:text-gray-400">
                      <tr>
                        <th scope="col" className="px-6 py-3">Description</th>
                        <th scope="col" className="px-6 py-3">Payment Method</th>
                        <th scope="col" className="px-6 py-3">Status</th>
                        <th scope="col" className="px-6 py-3">Date Time</th>
                        <th scope="col" className="px-6 py-3">Amount</th>
                        <th scope="col" className="px-6 py-3">Action</th>
                      </tr>
                    </thead>
                    <tbody>
                      {transactions.map((transaction, index) => (
                        <tr key={index} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-slate-700/50">
                          <td className="px-6 py-4">{transaction.description}</td>
                          <td className="px-6 py-4">{transaction.method}</td>
                          <td className="px-6 py-4">{transaction.status}</td>
                          <td className="px-6 py-4">{transaction.dateTime}</td>
                          <td className="px-6 py-4">{transaction.amount}</td>
                          <td className="px-6 py-4 text-right">
                            <a href="#" className="font-medium text-blue-600 dark:text-blue-500 hover:underline">View Invoice</a>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                  {transactions.length === 0 && (
                    <div className="text-center py-4">
                      <p className="text-gray-500">No transactions so far.</p>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
        <footer className="mt-8">
          <div className="text-center text-gray-500 dark:text-gray-400">
            © 2024 T-Wind
          </div>
        </footer>
      </div>
    </div>
  );
};

export default TransactionsPage;
