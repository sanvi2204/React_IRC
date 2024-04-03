import React, { useRef, useState } from 'react';
import '../assets/css/login.css';
const LoginForm = () => {
  const emailRef = useRef(null);
  const passwordRef = useRef(null);
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const email = emailRef.current.value;
    const password = passwordRef.current.value;

    // Basic validation
    if (!email || !password) {
      setError('Please fill in all fields');
      return;
    }

    // Further validation logic (e.g., email format validation) can be added here

    // Clear any previous errors
    setError('');


    console.log('Email:', email);
    console.log('Password:', password);


    emailRef.current.value = '';
    passwordRef.current.value = '';
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Email:</label>
        <input type="email" ref={emailRef} />
      </div>
      <div>
        <label>Password:</label>
        <input type="password" ref={passwordRef} />
      </div>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <button type="submit">Login</button>
    </form>
  );
};

export default LoginForm;