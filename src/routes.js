

import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/home'

export default function RoutesApp() {
  return (
    <BrowserRouter>
   
        <Routes>
            <Route path='/' element={<Home/>}/>
        </Routes>
    </BrowserRouter>
  )
}
