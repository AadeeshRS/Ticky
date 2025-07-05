import React from 'react'

const Navbar = () => {
  return (
    <>
      <nav className='flex justify-between font-poppins bg-blue-500 text-white py-3'>
        <div className="logo">
          <span className='logo font-bold text-xl mx-10 cursor-default transition-all duration-100'>Ticky</span>
        </div>
        <ul className='flex gap-8 mx-10'>
          <li className='cursor-pointer hover:font-bold transition-all duration-100'>Home</li>
          <li className='cursor-pointer hover:font-bold transition-all duration-100'>Your Tasks</li>
        </ul>
      </nav>
    </>
  )
}

export default Navbar
