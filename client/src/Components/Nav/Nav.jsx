import React, {useState, useRef, forwardRef } from 'react';
import { NavLink } from "react-router-dom";
import "./nav.scss";
import userPic from '../../images/user-pic.jpeg' 
  
function Nav({username})
{
  return (
    <div className="nav grid-nav jcc">
      <div className='logo flex aic jcc'>
        <i className="fa-solid fa-2x fa-bug-slash accent-color"></i>
        <h1 className='accent-color'>iSquash</h1>
      </div>

      <ul className='flex-c aifs' >
        <li>
            <NavLink activeClassName='active' to="/dashboard">Dashboard</NavLink>
        </li>
        <li>
            <NavLink activeClassName='active' to="/profile">Profile</NavLink>
        </li>
        <li>
            <NavLink activeClassName='active' to="">Sign Out</NavLink>
        </li>
      </ul>
   
      <div className="flex w-100 jcsb projects-heading">
        <p>Projects</p>
        <div>
          <div>
            <i class="fa-solid fa-square status-green"></i>
            <i class="fa-solid fa-square status-red"></i>
          </div>
        </div>
      </div>
      
      <ul className='links aic' >
        <li>
            <NavLink className={"flex jcsb"} activeClassName='active' to="/issues">
            <p style={{"font-size": "1.25rem"}}>All Projects</p>
            <div className='flex'>
              <p style={{"fontWeight" : "bold"}}>142</p>
              <p>142</p>
            </div>
          </NavLink>
        </li>
      </ul>
        
    
        {/* <div className='user flex aic'>
          <h3>{username}</h3>
          <img src={userPic} alt='user profile pic'/>
        </div> */}
  </div>
  )
}

export default Nav


