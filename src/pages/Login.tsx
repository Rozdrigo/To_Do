import React, { useState } from 'react';
import axios from 'axios';

import { Link } from 'react-router-dom';

import { useNavigate } from 'react-router-dom'
import { FaLock, FaUserAlt } from 'react-icons/fa'

import './styles/Login.css'

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
          }
          ).catch(err => window.alert(err))
        } type="submit"></input>
        <Link className='Link' to="/CreateUser">Não tenho uma conta</Link>
    </div>
  );
}

export default Login;
