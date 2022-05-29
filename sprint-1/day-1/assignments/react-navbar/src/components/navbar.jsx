import React from 'react'
import Button from './Button/button'
import Links from './Links/links'
import Logo from './Logo/logo'
import'./navbar.css'

const Navbar =({}) =>{
    return(
        <div className='navbar_wrapper'>
            <Logo />
            <Links />
            <Button />
        </div>
    )
}

export default Navbar


