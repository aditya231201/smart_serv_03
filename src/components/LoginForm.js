import React, { useState } from 'react';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    if (validatePassword(password)) {
      console.log("Success")
    } else {
      alert("error")
    }
  };

  const validatePassword = (password) => {
    const passwordRegex = /^(?=.*[A-Z])(?=.*\d)(?!.*[^@A-Za-z0-9]).{8,}$/;
    return passwordRegex.test(password);
  };

  return (
    <div className="login-container">
      <h2>Smart Serv</h2>
      <input
        type="email"
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={handleLogin}>Login</button>

      <a href='/forgot-password'>Forgot your Password?</a>
    </div>
  );
};

export default Login;
