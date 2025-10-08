import React from "react";
import { useAuth } from "../context/AuthContext";
import { Navigate } from "react-router-dom";

export default function ProtectedRoute({children, role}){
    const {user}= useAuth()
    if(!user) return <Navigate to="/"/> // Not logged in
    if (role && user.role!==role) return <Navigate to ="/" />  // Wrong role

    return children
}