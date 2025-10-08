import React from "react";
import { useAuth } from "../context/AuthContext";
export default function Dashboard(){

    const { user }=useAuth();

    if(!user) return null;

    return(
        <div style={{ padding: "20px"}}>
            <h2>Welcome, {user.name}</h2>
            {user.role==="company_personnel" && (
                <div>
                    <h3>Company Dashboard</h3>
                    <p>Here you cn create jobs and view applications</p>
                </div>
            )}

            {user.role==="candidate" && (
                <div>
                    <h3>Candidate Dashboard</h3>
                    <p>Here you can browse jobs and apply</p>
                </div>
            )}
        </div>
    );
}