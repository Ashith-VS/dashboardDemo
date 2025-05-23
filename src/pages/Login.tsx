import React, { useState } from 'react'
import { isEmpty } from 'lodash'
import { useNavigate } from 'react-router'
import { useAppDispatch } from '../redux/hooks'
import { login } from '../redux/slice/authSlice'
import { authServices } from '../services/authServices'

const Login: React.FC = () => {
    const [formData, setFormData] = useState({ username: '', password: '' })
    const [formErrors, setFormErrors] = useState<{ [key: string]: string }>({})
    const navigate = useNavigate()
    const dispatch = useAppDispatch()

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target
        setFormData({ ...formData, [name]: value })
        delete formErrors[name]
    }

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        const errors = handleValidation()
        if (isEmpty(errors)) {
            try {
                await authServices.login(formData.username,formData.password)
                dispatch(login(formData.username))
                navigate('/dashboard')
            } catch (error) {
                console.log('error: ', error);
            }
        } else {
            setFormErrors(errors)
        }
    }

    const handleValidation = () => {
        let error: { [key: string]: string } = {}
        if (isEmpty(formData.username)) {
            error.username = 'User Name is required'
        }
        if (isEmpty(formData.password)) {
            error.password = 'Password is required'
        } else if (formData.password.length < 3) {
            error.password = 'Password must be at least 3 characters';
        }
        return error
    }

    return (
        <div className='h-screen flex justify-center items-center bg-gray-100 dark:bg-black'>
            <div className='w-96 bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg'>
                <h2 className='text-center text-2xl font-semibold mb-6 dark:text-white'>Login</h2>
                <form onSubmit={handleSubmit} className='flex flex-col gap-4'>
                    <input type="text" placeholder='User Name' className='border focus:outline-none focus:ring-1  dark:bg-gray-800 dark:text-white focus:ring-violet-500 rounded-full p-2' name='username' value={formData.username} onChange={handleChange} />
                    {formErrors.username && <p className="text-red-500 text-sm mt-1 ml-2">{formErrors.username}</p>}
                    <input type="text" placeholder='Password' className='border focus:outline-none focus:ring-1 focus:ring-violet-500 rounded-full p-2  dark:bg-gray-800 dark:text-white' name='password' value={formData.password} onChange={handleChange} />
                    {formErrors.password && <p className="text-red-500 text-sm mt-1 ml-2">{formErrors.password}</p>}
                    <button type='submit' className='bg-violet-500 hover:bg-violet-600  text-white rounded-full px-4 py-2  '>Sign In</button>
                </form>
            </div>
        </div>
    )
}

export default Login