import React, { useEffect } from 'react';
import Sidebar from './components/Sidebar';
import Navbar from './components/Navbar';
import { Outlet, useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import AppContext from './context/AppContext';

const Layout = () => {
    const savedUser = localStorage.getItem('username');
    const {userName,login} = useContext(AppContext);
    const navigate = useNavigate();

    useEffect(()=>{
        if(!savedUser) navigate('/Login');
        else {
            navigate('/Dashboard');
            login(savedUser);
        }
    },[])

    return (
        <div className='min-h-screen min-w-full bg-neutral-800 flex items-center justify-center text-white overflow-hidden'>
            <Navbar/>
            <div className='flex items-center w-full mt-12 overflow-hidden'>
                <Sidebar/>
                <div className='p-2 min-h-screen'>
                    <Outlet/>
                </div>
            </div>
        </div>
    )
}

export default Layout;