import React , {useState , useContext}from 'react'

import { themeContext } from '..';

// style 
import "./Style.css"



// components
import Header from "../components/Header/Header";
import SideBar from '../components/SideBar/SideBar'
import Main from '../components/Main/Main'



const Dashboard = () => {

  const { theme, setTheme , toggleTheme } = useContext(themeContext)

  

   const [menu , setMenu] = useState(false)
   const closeMenu = ()=> setMenu(false)
   const openMenu = ()=> setMenu(true)
  

  return (
    <div className='Dashboard'>


      <div className={`${theme === "light" ? "lightHeader" : "darkHeader"}`}>
        {/* header */}
        <Header openMenu={openMenu} menu={menu}/>
      </div>

      <div className='sidebar-main'>


        <div className={`${menu ? "sidebar" : "sidebar-click-close"}`}>
          {/* side bar ===> links */}
          <SideBar closeMenu={closeMenu} menu={menu} />
        </div>

        <div style={{width : "100%"}}>
          {/* main   ====> routes(pages)*/}
          <Main className="main"/>

        </div>

      </div>


    </div>
  )
}

export default Dashboard