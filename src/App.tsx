import React, { lazy, Suspense } from 'react'
import { Navigate, Route, Routes } from 'react-router'
import { BrowserRouter } from 'react-router'
const Loader = lazy(() => import('./components/Loader'));
const Header = lazy(() => import('./components/Header'));
import { useAppSelector } from './redux/hooks'
import type { RootState } from './redux/store'
import { ToastContainer } from 'react-toastify';
const SuspenseLoader = lazy(() => import('./components/SuspenseLoader'));
const Dashboard = lazy(() => import('./pages/Dashboard'));
const Login = lazy(() => import('./pages/Login'));
const Users = lazy(() => import('./pages/Users'));
const Settings = lazy(() => import('./pages/Settings'));
const PageNotFound = lazy(() => import('./pages/PageNotFound'));
const ProtectedRoute = lazy(() => import('./components/ProtectdRoute'));

const App: React.FC = () => {
  const { isDarkMode } = useAppSelector((state: RootState) => state.auth);
  return (
    <div className={isDarkMode ? 'dark' : ''}>
      <div className="bg-white dark:bg-black">
        <BrowserRouter>
          <Header />
          <Loader />
          <Suspense fallback={<SuspenseLoader />}>
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
          </Suspense>
          <ToastContainer position='top-left' />
        </BrowserRouter>
      </div>
    </div>
  )
}

export default App