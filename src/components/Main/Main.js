import React from 'react'
import { Routes, Route } from "react-router-dom"

import Home from '../../pages/Home/Home'
import About from '../../pages/About/About'
import TodoApp from '../../pages/TodoApp/TodoApp'

// routes 
import {routes} from "../../routes/routes"

import './Style.css'
import TodoDetails from '../../pages/TodoApp/TodoDetails'
const Main = () => {
  return (

    <>
      <div className='main-container'>
        {/* <h3>Main</h3> */}
        <div>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/about' element={<About />} />
            <Route path='/todoApp' element={<TodoApp />} />
            <Route path="/todoApp/:id" element={<TodoDetails/>}/>
           {/* {routes.map(route => <Route path={route.path} element={route.element}/>)} */}
          </Routes>

        </div>
      </div>
    </>
  )
}

export default Main