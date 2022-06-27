import React from 'react'
import { Routes, Route } from "react-router-dom"

// import Home from '../../pages/Home/Home'
// import About from '../../pages/About/About'
// import TodoApp from '../../pages/TodoApp/TodoApp'

// routes 
import {routes} from "../../routes/routes"
const Main = () => {
  return (

    <>
      <div>
        <h3>Main</h3>
        <div>
          <Routes>
            {/* <Route path='/' element={<Home />} />
            <Route path='/about' element={<About />} />
            <Route path='/todoApp' element={<TodoApp />} /> */}
           {routes.map(route => <Route path={route.path} element={route.element}/>)}
          </Routes>

        </div>
      </div>
    </>
  )
}

export default Main