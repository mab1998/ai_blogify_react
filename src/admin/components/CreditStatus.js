// src/components/CreditStatus.js
import React from 'react';

const CreditStatus = () => {
  return (
    <div className="relative group">
      <button
        type="button"
        className="flex items-center text-gray-300 hover:text-white focus:outline-none"
      >
        <i className="fas fa-credit-card"></i>
      </button>
      <div className="absolute right-0 hidden mt-2 w-56 bg-white rounded-lg shadow-lg dark:bg-gray-700 group-hover:block">
        <div className="p-4">
          <div className="mb-2 text-sm font-medium text-gray-700 dark:text-gray-300">10 Credits Left</div>
          <div className="relative pt-1">
            <div className="overflow-hidden h-2 mb-4 text-xs flex rounded bg-gray-200 dark:bg-gray-600">
              <div
                style={{ width: '40%' }}
                className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-blue-500"
              ></div>
            </div>
          </div>
          <div className="text-xs text-gray-700 dark:text-gray-300">
            <div>Subscription: <span className="font-medium">Free</span></div>
            <div>Monthly Credits</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreditStatus;
