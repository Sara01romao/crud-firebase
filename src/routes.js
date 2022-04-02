

import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Header from './components/Header'
import Create from './pages/create'
import Home from './pages/home'

export default function RoutesApp() {
  return (
    <BrowserRouter>
        <Header/>
        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/cadastrar' element={<Create/>}/>
        </Routes>
    </BrowserRouter>
  )
}
