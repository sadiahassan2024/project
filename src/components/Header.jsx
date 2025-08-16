// src/components/Header.jsx
import React from "react";
import { FaBars, FaMoon, FaBell, FaComment, FaGift } from "react-icons/fa";

export default function Header() {
  return (
    <nav className="navbar-custom d-flex justify-content-between px-4">
      {/* Left Section */}
      <div className="d-flex align-items-center gap-3">
        <strong className="fs-5">My FitNess</strong>
        <FaBars className="fs-5 icon-button" />
        <span className="fw-bold">Dashboard</span>
      </div>

      {/* Center Section */}
      <div className="d-none d-md-block w-50 search-bar">
        <input type="text" className="form-control" placeholder="Search Here" />
      </div>

      {/* Right Section */}
      <div className="d-flex align-items-center gap-3">
        <div className="position-relative icon-button">
          <FaMoon />
        </div>
        <div className="position-relative icon-button">
          <FaBell />
          <span className="badge-custom">12</span>
        </div>
        <div className="position-relative icon-button">
          <FaComment />
          <span className="badge-custom">3</span>
        </div>
        <div className="position-relative icon-button">
          <FaGift />
          <span className="badge-custom">2</span>
        </div>
      </div>
    </nav>
  );
}
