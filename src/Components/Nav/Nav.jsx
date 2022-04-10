import React, {useState, useRef, forwardRef } from 'react';
import { NavLink } from "react-router-dom";
import "./nav.scss";
import "../../Styles/Globals.scss"
import userPic from '../../images/user-pic.jpeg' 

function Nav({username})
{
  return (
    <div className="nav">
      <span className='flex w-100'>
         <div className='logo flex aic'>
        <i className="fa-solid fa-2x fa-bug-slash logo"></i>
        <h2>Issue Tracker</h2>
      </div>
        <ul className='links flex aic' >
          <li>
            <div>
              <NavLink activeClassName='active' to="/dashboard">Dashboard</NavLink>
            </div>
          </li>
          <li><div><NavLink activeClassName='active' to="/issues">Issues</NavLink></div></li>
          <li><div><NavLink activeClassName='active' to="/teams">Teams</NavLink></div></li>
      </ul>
      </span>
      <div className='user flex aic'>
        <h3>{username}</h3>
        <img src={userPic} alt='user profile pic'/>
      </div>
    </div>
  )
}

export default Nav


