import React , {useState}from 'react'

// style 
import "./Style.css"



// components
import Header from "../components/Header/Header";
import SideBar from '../components/SideBar/SideBar'
import Main from '../components/Main/Main'



const Dashboard = () => {

   const [menu , setMenu] = useState(false)
   const closeMenu = ()=> setMenu(false)
   const openMenu = ()=> setMenu(true)
  

  return (
    <div className='Dashboard'>


      <div className='header'>
        {/* header */}
        <Header openMenu={openMenu} menu={menu}/>
      </div>

      <div className='sidebar-main'>


        <div className={`${menu ? "sidebar" : "sidebar-click-close"}`}>
          {/* side bar ===> links */}
          <SideBar closeMenu={closeMenu} menu={menu} />
        </div>
        <div>
          {/* main   ====> routes(pages)*/}
          <Main className={`${menu ? "main" : "main-click-close"}`}/>

        </div>

      </div>


    </div>
  )
}

export default Dashboard