import React from 'react';
import { useContext } from 'react';
import AppContext from '../context/AppContext';
import { NavLink } from 'react-router-dom';

import { MdDashboard, MdInventory } from "react-icons/md";
import { FaTruck } from "react-icons/fa";

const MenuItem = ({name,icon})=>{
  const {showSidebar} = useContext(AppContext);
  return (
    <NavLink to={`/${name}`} className={`bg-neutral-600 rounded-lg w-full px-4 h-12 flex items-center ${showSidebar ? "justify-start" : "justify-center"} gap-1`}>
      {icon}
      {showSidebar ? name : ""}
    </NavLink>
  )
}

const Sidebar = () => {
  const {showSidebar} = useContext(AppContext);
  return (
    <div className={`${showSidebar ? "w-[200px]" : "w-[70px]"} min-h-screen bg-neutral-950 transition-all duration-150 flex flex-col items-center gap-1 px-2.5 py-5`}>
      <MenuItem name='Dashboard' icon={<MdDashboard size={22}/>}/>
      <MenuItem name='Orders' icon={<FaTruck size={22}/>}/>
      <MenuItem name='Inventory' icon={<MdInventory size={22}/>}/>
    </div>
  )
}

export default Sidebar