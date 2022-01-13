import React, { useState } from 'react';
import axios from 'axios';

import { useNavigate } from 'react-router-dom'
import { FaLock, FaUserAlt } from 'react-icons/fa'

import './Login.css'

function Login() {
  const navigate = useNavigate();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <div className="Login">
      <h2>Login:</h2>
      <FaUserAlt/>
      <input className='LoginInput' autoComplete="true" type="email" onChange={e => setEmail(e.target.value)} placeholder='E-mail'/>
      <FaLock/>
      <input className='LoginInput' autoComplete="true" type="password" onChange={e => setPassword(e.target.value)} placeholder='Senha'/>
      <input
      className='LoginButton'
        onClick={
          () => axios.post(
            'https://test-flimed-backend.herokuapp.com/users/auth',
            {
              email: email,
              password: password
            }
          ).then((res) => {
            localStorage.setItem('token', res.data.token)
            navigate('/ToDoList');
            window.alert(res.data.message)
          }
          ).catch(err => window.alert(err))
        } type="submit"></input>
    </div>
  );
}

export default Login;
