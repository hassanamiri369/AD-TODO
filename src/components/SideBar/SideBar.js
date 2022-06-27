import React from 'react'
import { Link } from 'react-router-dom'

import "./Style.css"
import { GrClose } from 'react-icons/gr';

import { FcAbout } from 'react-icons/fc';

import { FcTodoList } from 'react-icons/fc';
import { AiFillHome } from 'react-icons/ai';


const SideBar = ({ closeMenu, menu }) => {

  return (
    <>


      <div className='sideBar-container'>
        <div className='closeIcon' >
          {menu && <span><GrClose className='close' onClick={closeMenu} /></span>}
        </div>
        <div className='sidebar-content'>
          <div>
              <span><AiFillHome size={'24px'}/></span>
            <span> <Link className='Link' to={'/'}>Home</Link></span>
          </div>

          <div>
           <span> <FcAbout size={'24px'}/></span>
           <span><Link className='Link' to={'/about'}>About</Link></span>
          </div>
          <div>
            <span><FcTodoList size={'24px'}/></span>
            <span><Link className='Link' to={'/todoApp'}>TodoApp</Link></span>
          </div>
        </div>
      </div>
    </>
  )
}

export default SideBar