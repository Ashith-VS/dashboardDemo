import React, { useState } from 'react'
import type { FormData } from '../types/settings';
import { useAppDispatch, useAppSelector } from '../redux/hooks';
import type { RootState } from '../redux/store';
import { login, toggleDarkMode } from '../redux/slice/authSlice';

const Settings: React.FC = () => {
  const dispatch = useAppDispatch()
  const { username, isDarkMode } = useAppSelector((state: RootState) => state.auth);
  const [formData, setFormData] = useState<FormData>({ name: username || '', email: '' });


  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch(login(formData.name))
    console.log('Profile data:', formData);
  }

  return (
    <div className='min-h-screen p-6 flex  justify-center items-center'>
      <div className="bg-white dark:bg-gray-900  p-8 shadow-lg rounded">
        <h1 className="text-2xl font-bold mb-6 text-gray-800 dark:text-white ">Profile Settings</h1>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div >
            <label className="block mb-1  dark:text-gray-300">Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full p-2 border rounded dark:bg-gray-800 dark:text-white dark:border-gray-700"
            />
          </div>
          <div>
            <label className="block mb-1 dark:text-gray-300">Email</label>
            <input
              type="text"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full p-2 border rounded dark:bg-gray-800 dark:text-white dark:border-gray-700 "
            />
          </div>
          <div className="flex items-center dark:text-gray-300">
            <input
              type="checkbox"
              id="darkMode"
              checked={isDarkMode}
              onChange={() => dispatch(toggleDarkMode())}
              className="mr-2"
            />
            <label htmlFor="darkMode">Dark Mode</label>
          </div>
          <button
            type="submit"
            className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
          >
            Save Profile
          </button>
        </form>
      </div>
    </div>
  )
}

export default Settings