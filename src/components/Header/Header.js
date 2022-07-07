import React, { useContext } from 'react'
import { HiMenu } from 'react-icons/hi'
import { themeContext } from '../..'

import Switch from "react-switch"

import "./Style.css"
const Header = ({ openMenu, menu }) => {

  const { theme, setTheme , toggleTheme } = useContext(themeContext)

  

  return (
    <>
      {/* <p>header</p> */}
      
      <div style={{ display: "flex", justifyContent: "space-between" , width : "100%" }} >
        <div> {!menu && <HiMenu className='openIcon' onClick={openMenu} />}</div>
        <div style={{marginRight : "30px"}}>
          <Switch
            // uncheckedIcon={true}
            // checkedIcon={true}
            onChange={toggleTheme}
            checked={theme === "light"}
          />
         
        </div>
      </div>
      
    </>
  )
}

export default Header