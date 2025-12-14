import React, { useState } from 'react';
import axios from 'axios';

export default function Register() {
  const [form, setForm] = useState({username:'', first_name:'', last_name:'', email:'', password:''});
  const handleChange = e => setForm({...form, [e.target.name]: e.target.value});
  const handleSubmit = async e => {
    e.preventDefault();
    // call backend registration endpoint (create user)
    await axios.post('/api/register/', form);
    alert('Registered');
  };
  return (
    <form onSubmit={handleSubmit}>
      <input name="username" value={form.username} onChange={handleChange} placeholder="Username" required />
      <input name="first_name" value={form.first_name} onChange={handleChange} placeholder="First Name" required />
      <input name="last_name" value={form.last_name} onChange={handleChange} placeholder="Last Name" required />
      <input name="email" value={form.email} onChange={handleChange} placeholder="Email" type="email" required />
      <input name="password" value={form.password} onChange={handleChange} placeholder="Password" type="password" required />
      <button type="submit">Register</button>
    </form>
  );
}
