import { useState } from 'react'

import { BrowserRouter, Route, Routes } from 'react-router-dom';

import './App.css'
import { PhoneAuth } from './components/PhoneAuth'
import { OTPPage } from './components/OTPPage';
import TicketForm from './components/TicketForm';


function App(){
  return(
    <>
    <BrowserRouter>
    
    <Routes>
    <Route  path="/" element={<PhoneAuth/>}/>
      <Route exact path="/verify-otp" element={<OTPPage/>}/>
      <Route exact path="/ticket-form" element={<TicketForm/>}/>
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
