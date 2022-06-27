import React from 'react'
import { HiMenu } from 'react-icons/hi'

import "./Style.css"
const Header = ({openMenu , menu}) => {
  return (
    <>
    {/* <p>header</p> */}
    <div >
    {!menu && <HiMenu className='openIcon' onClick={openMenu}/>}
    </div>
    </>
  )
}

export default Header