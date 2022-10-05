import React from 'react'
import { NavLink } from 'react-router-dom'
function Nav() {
 
  return (
    <>
      <nav>
        <ul>
          <li>
            <NavLink exact  className={isActive=>isActive ? " isActive" : ""} to='/'>Home</NavLink>
          </li>
          <li>
            <NavLink exact  className={isActive=>isActive ? " isActive" : ""} to='/about'>About</NavLink>
          </li>
          <li>
            <NavLink  className={isActive=>isActive ? " isActive" : ""} to='/users'>Users</NavLink>
          </li>
        </ul>
      </nav>
    </>
  )
}

export default Nav
