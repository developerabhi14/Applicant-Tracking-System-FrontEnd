import React, { useState} from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

export default function Login(){
    const [email, setEmail]=useState("");
    const [password, setPassword]=useState("");
    const [error, setError]=useState("");
    const navigate=useNavigate();
    const{ login } =useAuth();
    
    const handleSubmit =async (e) => {
        e.preventDefault();
        setError("");

        try{
            const response=await axios.post("http://localhost:8000/auth/login",{
                email: email,
                password: password
            });
            console.log(response)

            const {access_token, user}=response.data
           
            localStorage.setItem('token', access_token);
            localStorage.setItem('user', JSON.stringify(user))
            login(access_token, user)
            navigate('/dashboard');
        }catch(err){
            setError("Invalid email or password")
        }
    };

    return (
        <div style={{ maxWidth:"400px", margin:"50px auto"}}>
            <h2>Login</h2>
            <form onSubmit={handleSubmit}>
                <div style={{ marginBottom:"10px"}}>
                    <label>Email</label>
                    <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                        style={{ width: "100%", padding:"8px"}}
                    />
                </div>
                <div style={{ marginBottom:"10px"}}>
                    <label>Password</label>
                    <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                        style={{ width: "100%", padding:"8px"}}
                    />

                </div>
                {error && <p style={{ color:"red"}}>{error}</p>}
                <button type="submit" style={{ padding: "10px 20px"}}>
                    Login
                </button>
            </form>

        </div>
    )
}