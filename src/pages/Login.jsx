import React, { useEffect, useState } from 'react'
import { useContext } from 'react';
import AppContext from '../context/AppContext';
import { useNavigate } from 'react-router-dom';

import { LuSettings2 } from "react-icons/lu";

const Login = () => {
  const savedUser = localStorage.getItem('username');
  const {userName,login} = useContext(AppContext);
  const navigate = useNavigate();

  const [currUser,setCurrUser] = useState('');
  const loginHandler = ()=>{
    login(currUser);
    navigate('/');
  }

  useEffect(()=>{
    if(savedUser){
      login(savedUser);
      navigate('/');
    }
  },[userName,savedUser])
  return (
    <div className='min-h-screen min-w-full flex items-center justify-center bg-neutral-800'>
      <div className='rounded-lg bg-neutral-600 p-6 h-52 w-1/3 xl:w-1/4 flex flex-col gap-5 items-center justify-evenly'>
        <div className='flex gap-2 items-center justify-center text-white text-xl'>
          <LuSettings2 size={24}/>
          <h1 className=''>Login To Dashboard</h1>
        </div>
        <input type="text" name="username" value={currUser} onChange={(e)=>setCurrUser(e.target.value)} placeholder='Enter your name' className='leading-10 px-4 rounded-lg w-full lg:w-3/4'/>
        <button onClick={loginHandler} className='px-3 py-1 rounded-lg bg-cyan-600 text-white hover:scale-110 duration-150'>Login</button>
      </div>
    </div>
  )
}

export default Login;