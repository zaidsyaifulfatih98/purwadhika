import React, { useState } from 'react';
import Backendless from './backendless';

interface RegisterFormData {
  email: string;
  password: string;
  name: string;
}

const RegisterPage: React.FC = () => {
  const [form, setForm] = useState<RegisterFormData>({ email: '', password: '', name: '' });
  const [message, setMessage] = useState<string>('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      await Backendless.UserService.register({
        email: form.email,
        password: form.password,
        name: form.name,
      });
      setMessage('Registration successful. Please login.');
    } catch (error: any) {
      setMessage(error.message || 'Registration failed');
    }
  };

  return (
    <div>
      <h2>Register</h2>
      <form onSubmit={handleSubmit}>
        <input name="name" type="text" placeholder="Name" value={form.name} onChange={handleChange} /><br />
        <input name="email" type="email" placeholder="Email" value={form.email} onChange={handleChange} /><br />
        <input name="password" type="password" placeholder="Password" value={form.password} onChange={handleChange} /><br />
        <button type="submit">Register</button>
      </form>
      <div>{message}</div>
    </div>
  );
};

export default RegisterPage;