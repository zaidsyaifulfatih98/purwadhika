import React, { useState } from 'react';
import Backendless from './backendless';

interface LoginFormData {
  email: string;
  password: string;
}

const LoginPage: React.FC = () => {
  const [form, setForm] = useState<LoginFormData>({ email: '', password: '' });
  const [message, setMessage] = useState<string>('');
  const [user, setUser] = useState<any>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const loggedInUser = await Backendless.UserService.login(form.email, form.password, true);
      setUser(loggedInUser);
      setMessage('Login successful!');
    } catch (error: any) {
      setMessage(error.message || 'Login failed');
      setUser(null);
    }
  };

  return (
    <div>
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <input name="email" type="email" placeholder="Email" value={form.email} onChange={handleChange} /><br />
        <input name="password" type="password" placeholder="Password" value={form.password} onChange={handleChange} /><br />
        <button type="submit">Login</button>
      </form>
      <div>{message}</div>
      {user && <div>Welcome, {user.name}!</div>}
    </div>
  );
};

export default LoginPage;