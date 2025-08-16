import React from 'react';
import { NavLink } from 'react-router-dom';

export default function Sidebar() {
  return (
    <div className="sidebar p-3">
      <NavLink className="mb-2" to="/" end>
        Dashboard
      </NavLink>
      <NavLink className="mb-2" to="/members">
        Members
      </NavLink>
      <NavLink className="mb-2" to="/classes">
        Classes
      </NavLink>
      <NavLink className="mb-2" to="/reports">
        Reports
      </NavLink>
    </div>
  );
}
