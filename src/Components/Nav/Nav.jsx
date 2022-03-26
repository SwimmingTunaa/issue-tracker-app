import React, {useState, useRef} from 'react';
import { Link } from "react-router-dom";
import "./nav.scss";
import "../../Styles/Globals.scss"
import userPic from '../../images/user-pic.jpeg' 

function Nav()
{
  const dashboard = useRef(null);
  const bugs = useRef(null);
  const teams = useRef(null);

  const handleClick = (ref) =>
  {
      ref.current?.focus();
  }

 

  return (
    <div className="nav">
      <span className='flex w-100'>
         <div className='logo flex aic'>
        <i className="fa-solid fa-2x fa-bug-slash logo"></i>
        <h2 className='color-lightest-gray'>Issue Tracker</h2>
      </div>
        <ul className='links flex aic' >
        <li><Link ref={dashboard} onClick={handleClick(dashboard)} to="/dashboard">Dashboard</Link></li>
        <li><Link ref={bugs} onClick={handleClick(bugs)} to="/bugs">Issues</Link></li>
        <li><Link ref={teams} onClick={handleClick(teams)}to="/teams">Teams</Link></li>
      </ul>
      </span>
      <div className='user flex aic'>
        <h3>Name</h3>
        <img src={userPic} alt='user profile pic'/>
      </div>
    </div>
  )
}

export default Nav


