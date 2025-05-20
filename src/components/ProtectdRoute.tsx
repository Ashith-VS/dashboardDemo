import { Navigate, Outlet } from "react-router";

const ProtectedRoute = () => {
  const token = localStorage.getItem('auth-token')

  // console.log('token: ', token);

  return !token ? <Navigate to={'/login'} replace /> : <Outlet />
}

export default ProtectedRoute