import React from 'react';
import {AppContextProvider} from './context/AppContext';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Layout from './Layout';
import Login from './pages/Login';
import Insights from './pages/Insights';
import Individual from './pages/Individual';
import RawData from './pages/RawData';

const App = () => {
    return (
        <AppContextProvider>
            <BrowserRouter>
                <Routes>
                    <Route path='/Login' element={<Login/>}/>
                    <Route path='/' element={<Layout/>}>
                        <Route path='/Insights' element={<Insights/>}/>
                        <Route path='/Individual' element={<Individual/>}/>
                        <Route path='/RawData' element={<RawData/>}/>
                    </Route>
                </Routes>
            </BrowserRouter>
        </AppContextProvider>
    );
};

export default App;