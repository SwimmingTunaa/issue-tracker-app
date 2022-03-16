import React from 'react'
import { Link } from "react-router-dom";

function Nav()
{
  return (
    <div className="nav">
      <h2>Issue Tracker</h2>
      <ul>
        <li><Link to="/dashboard">Dashboard</Link></li>
        <li><Link to="/bugs">Bugs</Link></li>
        <li><Link to="/teams">Teams</Link></li>
      </ul>
    </div>
  )
}

export default Nav


