import React from 'react';
import { RiMenuFoldFill, RiMenuUnfoldFill } from "react-icons/ri";
import { FaUserCircle } from "react-icons/fa";
import { useContext } from 'react';
import AppContext from '../context/AppContext';
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
  const {userName,showSidebar,toggleSidebar,logout} = useContext(AppContext);
  const navigate = useNavigate();
  const logoutHandler = ()=>{
    logout();
    navigate('/Login')
  }
  return (
    <div className='w-full absolute top-0 left-0 bg-neutral-900 min-h-12 px-5 py-1 flex justify-between items-center text-center'>
        <div className='flex items-center justify-center gap-x-4'>
            <div onClick={()=>toggleSidebar()} className='text-white p-2 hover:bg-neutral-600 rounded-lg cursor-pointer'>
              {showSidebar ? <RiMenuFoldFill/>:<RiMenuUnfoldFill/>}
            </div>
            <h1>{`Admin Dashboard`}</h1>
            </div>
        <div className='flex items-center justify-center gap-x-4'>
            <div className='flex gap-x-1 items-center justify-center'>
              <FaUserCircle size={22}/>
              <h1 className='text-[14px]'>Hi, {userName}</h1>
            </div>
            <button onClick={logoutHandler} className='text-sm rounded-lg bg-neutral-700 px-2 py-1.5 hover:bg-neutral-500'>Logout</button>
        </div>
    </div>
  )
}

export default Navbar;