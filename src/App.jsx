import React from 'react';
import {AppContextProvider} from './context/AppContext';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Layout from './Layout';
import Login from './pages/Login';
import DashBoard from './pages/Dashboard';
import Orders from './pages/Orders';
import Inventory from './pages/Inventory';

const App = () => {
    return (
        <AppContextProvider>
            <BrowserRouter>
                <Routes>
                    <Route path='/Login' element={<Login/>}/>
                    <Route path='/' element={<Layout/>}>
                        <Route path='/Dashboard' element={<DashBoard/>}/>
                        <Route path='/Orders' element={<Orders/>}/>
                        <Route path='/Inventory' element={<Inventory/>}/>
                    </Route>
                </Routes>
            </BrowserRouter>
        </AppContextProvider>
    );
};

export default App;