

import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Header from './components/Header'
import Create from './pages/create'
import Edit from './pages/edit'
import Home from './pages/home'

export default function RoutesApp() {
  return (
    <BrowserRouter>
        <Header/>
        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/cadastrar' element={<Create/>}/>
            <Route path='/editar/:id' element={<Edit/>}/>
        </Routes>
    </BrowserRouter>
  )
}
