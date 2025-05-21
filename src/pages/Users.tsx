import React, { useEffect, useState } from 'react'
import { Userinputs } from '../utils/constants'
import type { User } from '../types/user'
import { toast } from 'react-toastify'
import { networkRequest } from '../services/apiServices'

const Users: React.FC = () => {
  const [users, setUsers] = useState<User[]>([])
  const [filteredUsers, setFilteredUsers] = useState<User[]>([]);
  const [newUser, setNewUser] = useState({ name: '', email: '', companyName: '' })
  const [search, setSearch] = useState('')
  const [sortOrder, setSortOrder] = useState<'asc' | 'desc'>('asc');

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const data = await networkRequest('/users')
        if (Array.isArray(data)) {
        setUsers(data);
        setFilteredUsers(data)
        }
      } catch (err) {
        console.log('err: ', err);
      }
    };

    fetchUsers();
  }, []);

  useEffect(() => {
    const filtered = users.filter(user => user.name.toLowerCase().includes(search.toLowerCase()))
      .sort((a, b) => {
        if (sortOrder === 'asc') {
          return a.name.localeCompare(b.name)
        } else {
          return b.name.localeCompare(a.name);
        }
      })
    setFilteredUsers(filtered)
  }, [search, users, sortOrder])

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setNewUser({ ...newUser, [name]: value })
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (!newUser.name.trim() || !newUser.email.trim() || !newUser.companyName.trim()) {
      toast.warn("Please fill all fields")
      return;
    }
    const userToAdd = {
      id: Math.max(...users.map(u => u.id), 0) + 1,
      name: newUser.name,
      email: newUser.email,
      company: {
        name: newUser.companyName
      }
    };
    // Add the new user to the beginning of the list
    setUsers([userToAdd, ...users]);
    setNewUser({
      name: '',
      email: '',
      companyName: ''
    });
  }

  const toggleSortOrder = () => {
    setSortOrder(prev => prev === 'asc' ? 'desc' : 'asc');
  };

  return (
    <div className="p-8  bg-gray-100 dark:bg-black min-h-screen">
      
      <div className="flex justify-between items-center mb-6">
        <h1 className='text-center text-2xl font-bold mb-6 dark:text-white'>Users</h1>
        <div className="flex items-center justify-center space-x-4">
          <input
            type="text"
            placeholder="Search by name..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="p-2 border rounded-full dark:bg-gray-800 dark:text-white dark:border-gray-600"
          />
          <button
            onClick={toggleSortOrder}
            className="bg-gray-200 hover:bg-gray-300 px-4 py-2 rounded dark:bg-gray-700 dark:hover:bg-gray-600 text-black dark:text-white"
          >
            Sort {sortOrder === 'asc' ? 'A-Z' : 'Z-A'}
          </button>
        </div>
      </div>
      {/* user form Fields */}
      <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow mb-8">
        <form onSubmit={handleSubmit} className='grid grid-cols-1 md:grid-cols-3 gap-4'>
          {Userinputs.map((item) =>
            <div key={item.name}>
              <label className="block text-sm font-medium text-gray-700 mb-1 dark:text-gray-300">{item.label}</label>
              <input
                type="text"
                name={item.name}
                value={newUser[item.name as keyof typeof newUser]}
                placeholder={item.placeholder}
                onChange={handleInputChange}
                className="w-full p-2 border rounded dark:bg-gray-700 dark:text-white dark:border-gray-600"
              />
            </div>
          )}
          <div className="flex justify-start">
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded"
            >
              Add User
            </button>
          </div>
        </form>
      </div>
      {/* user Table */}
      {filteredUsers.length === 0 ? (
        <div className="bg-white dark:bg-gray-800  p-8 rounded-lg shadow text-center">
          <p className="text-gray-500">No users found</p>
        </div>
      ) : (
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow overflow-hidden">
          <table className="min-w-full divide-y divide-gray-200  dark:divide-gray-600">
            <thead className="bg-gray-50 dark:bg-gray-700">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider dark:text-gray-300">Name</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider dark:text-gray-300">Email</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider dark:text-gray-300">Company</th>
              </tr>
            </thead>
            <tbody className="bg-white dark:bg-gray-800 divide-y divide-gray-200 dark:divide-gray-700">
              {filteredUsers.map(user => (
                <tr key={user.id}>
                  <td className="px-6 py-4 whitespace-nowrap text-gray-900   dark:text-white">{user.name}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-gray-900  dark:text-white">{user.email}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-gray-900  dark:text-white">{user.company.name}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>)}
    </div>
  )
}

export default Users