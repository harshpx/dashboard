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
            navigate('/Insights')
            login(savedUser);
        }
    },[])

    return (
        <div className='min-h-screen min-w-full bg-neutral-800 flex items-center justify-center text-white overflow-hidden'>
            <Navbar/>
            <div className='flex flex-wrap md:flex-nowrap items-center w-full overflow-hidden'>
                <Sidebar/>
                <div className='p-2 h-screen overflow-scroll w-full'>
                    <Outlet/>
                </div>
            </div>
        </div>
    )
}

export default Layout;