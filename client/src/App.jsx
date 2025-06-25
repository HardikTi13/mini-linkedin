import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './auth/login';
import Signup from './auth/signup';
import Home from './component/home/index'
import AllProposal from './component/proposal/index'
import Aboutproposal from './component/aboutproposal/index'
import CreateProposal from './component/createProposal/index'

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<Signup />} />
        <Route path='/' element={<Home/>}/>
        <Route path='/proposal' element={<AllProposal/>}/>
        <Route path='/proposal/:id' element={<Aboutproposal/>}/>
        <Route path='/proposal/create' element={<CreateProposal/>}/>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
