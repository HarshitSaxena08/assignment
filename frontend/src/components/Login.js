import React, { useState } from 'react';
import axios from 'axios';
import '../styles/Login.css';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:5000/login', { email, password });
      // Store token and user info in local storage
      localStorage.setItem('token', response.data.token);
      localStorage.setItem('user', JSON.stringify(response.data.user));
      // Redirect to protected page
      window.location.href = '/protected';
    } catch (error) {
      console.error('Login failed:', error);
    }
  };

  return (
    <div className="back_Srceen">
      <div className="wrapper">
        
        <h1>SignIn</h1>
        <br />
                
        <svg xmlns="http://www.w3.org/2000/svg" height="40" width="40" className='imageBox' viewBox="0 0 448 512"><path  fill="#61dafb" d="M304 128a80 80 0 1 0 -160 0 80 80 0 1 0 160 0zM96 128a128 128 0 1 1 256 0A128 128 0 1 1 96 128zM49.3 464H398.7c-8.9-63.3-63.3-112-129-112H178.3c-65.7 0-120.1 48.7-129 112zM0 482.3C0 383.8 79.8 304 178.3 304h91.4C368.2 304 448 383.8 448 482.3c0 16.4-13.3 29.7-29.7 29.7H29.7C13.3 512 0 498.7 0 482.3z"/></svg>
        
           <br />
        <form onSubmit={handleSubmit}>
          <div className='input-box'>
            <i className='bx bxs-user'></i>
            <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} required />
          </div>
          <br />
          <div className='input-box'>
            <i className='bx bxs-lock' ></i>
            <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} required />
          </div>
          <br />

          <div className="rememberForgot">
            <label ><input type='checkbox'/> Remember me</label>
            
            <a href="#">Forgot password?</a>
          </div>
          <br/>
          <button type="submit" className="btn ">Login</button>
        </form>
        <br/>
      </div>
    </div>
    
  );
}

export default Login;
