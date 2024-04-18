import React, { useEffect } from 'react';
import { useContext } from 'react';
import AppContext from '../context/AppContext';
import { NavLink } from 'react-router-dom';
import { MdHome, MdDataObject, MdAccessibilityNew, MdAutoGraph } from "react-icons/md";
import { FaUser } from "react-icons/fa";
import useWindowWidth from '../hooks/useWindowWidth';

const MenuItem = ({name,icon})=>{
  const {showSidebar} = useContext(AppContext);
  return (
    <NavLink to={`/${name}`} className={({isActive}) => `${isActive ? 'bg-cyan-600' : 'bg-neutral-600'} hover:bg-cyan-600 hover:scale-105 transition-all duration-200 rounded-lg md:w-full px-4 h-12 flex items-center ${showSidebar ? "justify-start" : "justify-center"} gap-2`}>
      {icon}
      {showSidebar ? name : ""}
    </NavLink>
  )
}

const Sidebar = () => {
  const {showSidebar,toggleSidebar} = useContext(AppContext);
  const {isMobile} = useWindowWidth();
  return (
    isMobile ? <div className={`h-[70px] w-full mt-12 bg-neutral-950 transition-all duration-150 flex items-center gap-2 px-5 py-2.5`}>
      <MenuItem name='Insights' icon={<MdAutoGraph size={22}/>}/>
      <MenuItem name='Individual' icon={<MdAccessibilityNew size={22}/>}/>
      <MenuItem name='RawData' icon={<MdDataObject size={22}/>}/>
    </div> : 
    <div className={`${showSidebar ? "w-[200px]" : "w-[70px]"} min-h-dvh pt-14 bg-neutral-950 transition-all duration-150 flex flex-col items-center gap-2 px-2.5 py-5`}>
      <MenuItem name='Insights' icon={<MdAutoGraph size={22}/>}/>
      <MenuItem name='Individual' icon={<MdAccessibilityNew size={22}/>}/>
      <MenuItem name='RawData' icon={<MdDataObject size={22}/>}/>
    </div>
  )
}

export default Sidebar