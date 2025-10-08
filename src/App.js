import logo from './logo.svg';
import './App.css';

import react from 'react';

import { BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom';

import Login from './pages/Login';
import Register from './pages/Register';
import Dashboard from './pages/Register';

function App() {
  return (
    <Router>
      <nav style={{ padding: "1rem", background:"#f0f0f0"}} >
        <Link to="/" style={{ marginRight:"10px"}}>Login</Link>
        <Link to="/register" style={{ marginRight:"10px"}}>Register</Link>
        <Link to="/dashboard" style={{ marginRight:"10px"}}>Dashboard</Link>        
      </nav>

      <Routes>
        <Route path='/' element={<Login/>}/>
        <Route path='/register' element={<Register/>}/>
        <Route path='/dashboard' element={<Dashboard/>}/>

      </Routes>
    </Router>

  );
}

export default App;
