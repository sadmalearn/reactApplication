import React from 'react'
import Logo from '../../Assets/homeLogo.png'
import './Header.css'


const Header = () => {
  return (
    <div className='mainHeaderDiv'>
        <div className='logoDiv'>
            <img src={Logo} alt="" />
        <span className='headerText'>
        Inventory Management System
        </span>
        </div>
        <div className='headerNavigate'>
        Home
        </div>
    </div>
  )
}

export default Header