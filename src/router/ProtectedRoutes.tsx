import React, { useContext } from 'react'
import { AuthContext } from '../auth/context/authContext'
import { Navigate } from 'react-router-dom';

export const ProtectedRoutes = ({children}) => {
    const {isLogged} = useContext(AuthContext);
    
  return isLogged ? children : <Navigate to={"/login"}/>
}