import React from 'react';
import { Link } from "react-router-dom";
import "./nav.scss";
import "../../Styles/Globals.scss"

function Nav()
{
  return (
    <div className="nav">
      <div className='logo flex aic'>
        <i className="fa-solid fa-2x fa-bug-slash logo"></i>
        <h2 className='color-lightest-gray'>Issue Tracker</h2>
      </div>
      <ul >
        <li><Link to="/dashboard">Dashboard</Link></li>
        <li><Link to="/bugs">Bugs</Link></li>
        <li><Link to="/teams">Teams</Link></li>
      </ul>
    </div>
  )
}

export default Nav


