import React, { useState } from 'react';
import api from '../services/api';

import { useNavigate } from 'react-router-dom'
import { FaLock, FaUserAlt } from 'react-icons/fa'

import './styles/Login.css'

function Login() {
  const navigate = useNavigate();

  const [name, setName] = useState('')
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <div className="Login">
      <h2>Login:</h2>
      <FaUserAlt/>
      <input className='LoginInput' autoComplete="true" type="name" onChange={e => setName(e.target.value)} placeholder='Nome'/>
      <input className='LoginInput' autoComplete="true" type="email" onChange={e => setEmail(e.target.value)} placeholder='E-mail'/>
      <FaLock/>
      <input className='LoginInput' autoComplete="true" type="password" onChange={e => setPassword(e.target.value)} placeholder='Senha'/>
      <input
      className='LoginButton'
        onClick={
          () => api.post(
            'users/create',
            {
              name: name,
              email: email,
              password: password
            },
            {
              headers:
              {
                  'Content-Type': 'application/json',
              }
          }
          ).then((res) => {
            window.alert(res)
            navigate('/Login');
          }
          ).catch(err => window.alert(err))
        } type="submit"></input>
    </div>
  );
}

export default Login;
