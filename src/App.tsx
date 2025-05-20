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

const App = () => {

  return (
    <BrowserRouter>
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
    </BrowserRouter>
  )
}

export default App