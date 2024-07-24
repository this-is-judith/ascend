import React, { useState } from "react";
import "./navbar.css";
import logo from "../photos/ascend-logo.png";

function Navbar() {
  const [showMenu, setShowMenu] = useState(false);

  const toggleShowMenu = () => setShowMenu(!setShowMenu);

  return (
    <>
      <nav className="navbar">
        <a href="#" className="nav-logo link" onClick={toggleShowMenu}>
          <img src={logo} alt="Ascend Logo" />
        </a>

        <div
          className={
            showMenu ? "navbar-container show-menu" : "navbar-container"
          }
        >
          {/* Jump */}
          <div className="navbar-item">
            <div className="navbar-item-icon"></div>
            <div className="navbar-item-label">JUMP</div>
          </div>

          {/* Pressure */}
          <div className="navbar-item">
            <div className="navbar-item-icon"></div>
            <div className="navbar-item-label">PRESSURE</div>
          </div>

          {/* Temperature */}
          <div className="navbar-item">
            <div className="navbar-item-icon"></div>
            <div className="navbar-item-label">TEMPERATURE</div>
          </div>

          {/* Units */}
          <div className="navbar-item">
            <div className="navbar-item-icon"></div>
            <div className="navbar-item-label">UNITS</div>
          </div>

          {/* Height Line */}
          <div className="navbar-item">
            <div className="navbar-item-icon">
              {/* onClick={handleClick} */}
              {/* className={click ? "height-line" : "crossed-out-height-line"} */}
            </div>
            <div className="navbar-item-label">HEIGHT LINE</div>
          </div>

          {/* Dark/Light Mode */}
          <div className="navbar-item">
            <div className="navbar-item-icon">
              {/* onClick={handleClick} */}
              {/* className={click ? "height-line" : "crossed-out-height-line"} */}
            </div>
            <div className="navbar-item-label">DARK</div>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
