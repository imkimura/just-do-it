import React from 'react';
import {Routes, Route, BrowserRouter} from 'react-router-dom';
import Home from './pages/Home';
import Trainings from './pages/Trainings';


const Router = () => {
  return (
    <BrowserRouter>
        <Routes>
            <Route path='/' exact element={<Home/>} />
            <Route path='/trainings' exact element={<Trainings/>} />
        </Routes>      
    </BrowserRouter>
  );
}

export default Router;