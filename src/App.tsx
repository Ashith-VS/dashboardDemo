import React from 'react'
import { Navigate, Route, Routes } from 'react-router'
import { BrowserRouter } from 'react-router'
import Dashboard from './pages/Dashboard'
import Login from './pages/Login'
import Users from './pages/Users'
import Settings from './pages/Settings'
import PageNotFound from './pages/PageNotFound'
import ProtectedRoute from './components/ProtectdRoute'
import Loader from './components/Loader'
import Header from './components/Header'
import { useAppSelector } from './redux/hooks'
import type { RootState } from './redux/store'
import { ToastContainer } from 'react-toastify';

const App: React.FC = () => {
  const { isDarkMode } = useAppSelector((state: RootState) => state.auth);
  return (
    <div className={isDarkMode ? 'dark' : ''}>
      <div className="bg-white dark:bg-black">
        <BrowserRouter>
          <Header />
          <Loader />
          <Routes>
            <Route path='/' element={<Navigate to={'/login'} />} />
            <Route path='/login' element={<Login />} />
            <Route element={<ProtectedRoute />}>
              <Route path='/dashboard' element={<Dashboard />} />
              <Route path='/users' element={<Users />} />
              <Route path='/settings' element={<Settings />} />
            </Route>
            <Route path='*' element={<PageNotFound />} />
          </Routes>
          <ToastContainer position='top-left' />
        </BrowserRouter>
      </div>
    </div>
  )
}

export default App