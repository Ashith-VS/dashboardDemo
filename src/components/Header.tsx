import React from 'react';
import { NavLink, useLocation, useNavigate } from 'react-router';
import { useSelector, useDispatch } from 'react-redux';
import { logout } from '../redux/slice/authSlice';
import type { RootState } from '../redux/store';

const Header: React.FC = () => {
  const location = useLocation()
  const showHeader = location.pathname === '/login'
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { username } = useSelector((state: RootState) => state.auth);


  const handleLogout = () => {
    dispatch(logout());
    localStorage.removeItem('auth-token');
    navigate('/login');
  };

  if (showHeader) return

  return (
    <header className={`sticky top-0 z-50 bg-white  dark:bg-black shadow-md`}>
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <div className="flex items-center space-x-8">
          <NavLink
            to="/dashboard"
            className="text-xl font-bold  dark:text-white"
          >
            MyApp
          </NavLink>

          <nav className=" md:flex items-center space-x-6">
            <NavLink
              to="/dashboard"
              className={({ isActive }) =>
                `px-3 py-2 rounded-md text-sm font-medium ${isActive
                  ? 'bg-gray-100 text-gray-900 dark:bg-gray-700 dark:text-white'
                  : 'text-gray-700 hover:bg-gray-100 hover:text-gray-900  dark:hover:bg-gray-700 dark:hover:text-white'}`
              }
            >
              Dashboard
            </NavLink>
            <NavLink
              to="/users"
              className={({ isActive }) =>
                `px-3 py-2 rounded-md text-sm font-medium ${isActive
                  ? 'bg-gray-100 text-gray-900 dark:bg-gray-700 dark:text-white'
                  : 'text-gray-700 hover:bg-gray-100 hover:text-gray-900  dark:hover:bg-gray-700 dark:hover:text-white'}`
              }
            >
              Users
            </NavLink>
            <NavLink
              to="/settings"
              className={({ isActive }) =>
                `px-3 py-2 rounded-md text-sm font-medium ${isActive
                  ? 'bg-gray-100 text-gray-900 dark:bg-gray-700 dark:text-white'
                  : 'text-gray-700 hover:bg-gray-100 hover:text-gray-900 dark:hover:bg-gray-700 dark:hover:text-white'}`
              }
            >
              Settings
            </NavLink>
          </nav>
        </div>

        <div className="flex items-center space-x-4">
          {username && (
            <span className={`text-sm text-gray-700 dark:text-white`}>
              Welcome, {username}
            </span>
          )}
          <button
            onClick={handleLogout}
            className={`px-4 py-2 rounded-md text-sm font-medium bg-red-600 hover:bg-red-700 text-white`}
          >
            Logout
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;