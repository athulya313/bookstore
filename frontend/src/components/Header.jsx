import React from 'react'
import './Header.css'
import { FaBook } from 'react-icons/fa';

function Header() {
  return (
    <div>
        <nav className='navbar'>
            <div className='container'>
                <a className='navbar1' href='/' ><FaBook/> BookStore</a>
                <ul className='navmain'>
                    <li className='navitem'>
                        <a className='navlink' href='/'>Home</a>
                    </li>
                    <li className='navitem'> 
                        <a className='navlink' href='/books'>Books</a>
                    </li>
                    <li>
                        <a className='navlink' href='/add'>Add</a>
                    </li>
                </ul>
            </div>


        </nav>
    </div>
  )
}

export default Header