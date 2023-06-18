import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <section >
    <nav>
      <div>
       <p>HabitTracker</p>
      </div>
      <div className='nav-links'>
      <NavLink className="navlink" to="/">Home</NavLink>
      <NavLink className="navlink" to="/archive">Archive</NavLink>
      </div>
        
    </nav>
    </section>
  )
}

export default Navbar