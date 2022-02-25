import React from 'react';
import {Routes, Route, BrowserRouter} from 'react-router-dom';
import Home from './pages/Home';


const Router = () => {
  return (
    <BrowserRouter>
        <Routes>
            <Route path='/' exact element={<Home/>} />
        </Routes>      
    </BrowserRouter>
  );
}

export default Router;