import React, { useState } from 'react';
import axios from 'axios';

export default function Register() {
  const [form, setForm] = useState({
    username: '',
    first_name: '',
    last_name: '',
    email: '',
    password: ''
  });
  const handleChange = e => setForm({...form, [e.target.name]: e.target.value});
  const handleSubmit = async e => {
    e.preventDefault();
    try {
      await axios.post('/api/register/', form);
      alert('Registered successfully. Please login.');
    } catch (err) {
      alert('Registration failed: ' + (err.response?.data || err.message));
    }
  };
  return (
    <div style={{maxWidth:480, margin:'20px auto'}}>
      <h2>Sign-up</h2>
      <form onSubmit={handleSubmit}>
        <div><input name="username" placeholder="Username" value={form.username} onChange={handleChange} required /></div>
        <div><input name="first_name" placeholder="First Name" value={form.first_name} onChange={handleChange} required /></div>
        <div><input name="last_name" placeholder="Last Name" value={form.last_name} onChange={handleChange} required /></div>
        <div><input name="email" type="email" placeholder="Email" value={form.email} onChange={handleChange} required /></div>
        <div><input name="password" type="password" placeholder="Password" value={form.password} onChange={handleChange} required /></div>
        <div><button type="submit">Register</button></div>
      </form>
    </div>
  );
}
