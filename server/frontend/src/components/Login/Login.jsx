import React, { useState } from 'react';
import axios from 'axios';

export default function Login({ onLogin }) {
  const [form, setForm] = useState({username:'', password:''});
  const handleChange = e => setForm({...form, [e.target.name]: e.target.value});
  const handleSubmit = async e => {
    e.preventDefault();
    try {
      const res = await axios.post('/api/login/', form);
      onLogin(res.data.username);
    } catch (err) {
      alert('Login failed');
    }
  };
  return (
    <div style={{maxWidth:420, margin:'20px auto'}}>
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <div><input name="username" placeholder="Username" value={form.username} onChange={handleChange} required /></div>
        <div><input name="password" type="password" placeholder="Password" value={form.password} onChange={handleChange} required /></div>
        <div><button type="submit">Login</button></div>
      </form>
    </div>
  );
}
