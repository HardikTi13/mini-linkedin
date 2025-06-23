import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './auth/login';
import Signup from './auth/signup';
import Home from './component/home/index'

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<Signup />} />
        <Route path='/' element={<Home/>}/>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
