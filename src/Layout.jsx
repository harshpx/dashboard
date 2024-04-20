import React, { useEffect } from 'react';
import Sidebar from './components/Sidebar';
import Navbar from './components/Navbar';
import { Outlet, useNavigate, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import { useContext } from 'react';
import AppContext from './context/AppContext';

const Layout = () => {
    const savedUser = localStorage.getItem('username');
    const {userName,login} = useContext(AppContext);
    const navigate = useNavigate();
    const location = useLocation();

    useEffect(()=>{
        if(!savedUser) navigate('/Login');
        else {
            navigate('/Insights')
            login(savedUser);
        }
    },[])

    return (
        <div className='min-h-screen min-w-full bg-neutral-800 flex items-center justify-center text-white overflow-hidden'>
            <div className='z-10'>
                <Navbar/>
            </div>
            <div className='flex flex-wrap md:flex-nowrap items-center w-full overflow-hidden'>
                <Sidebar/>
                <AnimatePresence initial={false} mode='sync'>
                    <div className='p-2 h-screen overflow-scroll w-full'>
                        <motion.div
                            key={location.pathname}
                            initial={{y:'4%'}}
                            animate={{y:'0%'}}
                            exit={{y:'-4%'}}
                            transition={{duration:0.7}}
                            className=''
                        >
                            <Outlet/>
                        </motion.div>
                    </div>
                </AnimatePresence>
            </div>
        </div>
    )
}

export default Layout;