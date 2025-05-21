import React from 'react';
import { useNavigate } from 'react-router';

const PageNotFound: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 dark:bg-black   p-4 text-center">
      <div className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-lg max-w-md w-full">
        <h1 className="text-9xl font-bold text-gray-800 mb-4  dark:text-white">404</h1>
        <h2 className="text-2xl font-semibold text-gray-700 dark:text-gray-300 mb-2">Page Not Found</h2>
        <p className="text-gray-600 mb-6 dark:text-gray-400">
          Oops! The page you're looking for doesn't exist or has been moved.
        </p>
        <button
          onClick={() => navigate('/')}
          className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
        >
          Return to Home
        </button>
      </div>
    </div>
  );
};

export default PageNotFound;