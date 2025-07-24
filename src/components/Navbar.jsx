import React from 'react'
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <>
      <nav className='flex justify-between font-poppins bg-blue-500 text-white py-3'>
        <div className="logo">
          <span className='logo font-bold text-xl mx-10 cursor-default transition-all duration-100'>Ticky</span>
        </div>
        <ul className='flex gap-8 mx-10'>
          <li>
            <Link to="/" className='cursor-pointer hover:font-bold transition-all duration-100'>Your Tasks</Link>
          </li>
          <li>
            <Link to="/about" className='cursor-pointer hover:font-bold transition-all duration-100'>About</Link>
          </li>
        </ul>
      </nav>
    </>
  )
}

export default Navbar
