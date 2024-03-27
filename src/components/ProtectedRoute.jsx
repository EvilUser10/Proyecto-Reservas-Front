import React from 'react'
import { Navigate } from 'react-router-dom'
import { useAuth } from './auth/AuthContext'

function ProtectedRoute() {
   const  [user, isAuthenticated] = useAuth(); 
   console.log(isAuthenticated)
   if (!isAuthenticated) return <Navigate to='login' replace/>

  return (
    <Outlet/>
  )
}

export default ProtectedRoute