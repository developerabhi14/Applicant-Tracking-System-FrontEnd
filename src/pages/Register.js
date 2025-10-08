import React, {useState} from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";


export default function Register(){
    const[name, setName]=useState("")
    const[email, setEmail]=useState("")
    const[password, setPassword]=useState("")
    const[role, setRole]=useState("candidate")
    const[error, setError]=useState("")
    const[success, setSuccess]=useState("")
    const navigate=useNavigate();

    const handleSubmit=async (e) => {
        e.preventDefault();
        setError();
        setSuccess();

        try{
            await axios.post("http://localhost:8000/auth/register", {
                name,email,password,role
            });
            setSuccess("Registration successful! Redirecting to Login...");
            setTimeout(() => navigate("/", 1500))
        }catch(err){
            setError(err.response?.data?.detail || "Registration failed. Try Again");
        }
    };

    return (
        <div style={{ maxWidth: "450px", margin: "50px auto"}}>
            <h2>Register</h2>
            <form onSubmit={handleSubmit}>
                <div style={{ marginBottom: "10px"}}>
                    <label>Name</label>
                    <input
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                        style={{ width: "100%", padding:"8px"}}
                    />
                </div>

                <div style={{ marginBottom: "10px"}}>
                    <label>Email</label>
                    <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                        style={{ width: "100%", padding:"8px"}}
                    />
                </div>

                <div style={{ marginBottom: "10px"}}>
                    <label>Password</label>
                    <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                        style={{ width: "100%", padding:"8px"}}
                    />
                </div>

                <div style={{ marginBottom: "10px"}}>
                    <label>Role</label>
                    <select
                        value={role}
                        onChange={(e) => setRole(e.target.value)}
                        style={{ width: "100%", padding:"8px"}}
                    >
                        <option value="candidate">Candidate</option>
                        <option value="company_personnel">Company Personnel</option>
                    </select>
                </div>

                {error && <p style={{ color:"red" }}>{error}</p>}
                {error && <p style={{ color:"green" }}>{success}</p>}

                <button type="submit" style={{ padding: "10px 20px"}}>
                    Register
                </button>
            </form>

        </div>
    );
}