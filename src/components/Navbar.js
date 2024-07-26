import React, { useState } from "react";
import "./navbar.css";

import logo from "../photos/ascend-logo.png";
import { GiJumpAcross } from "react-icons/gi";
import { MdViewColumn } from "react-icons/md";
import { TbRuler2, TbRuler2Off } from "react-icons/tb";
import { LiaToggleOffSolid, LiaToggleOnSolid } from "react-icons/lia";
import { FaCircleInfo } from "react-icons/fa6";

function Navbar() {
  const [showMenu, setShowMenu] = useState(false);

  const toggleShowMenu = () => setShowMenu(!showMenu);

  return (
    <>
      <nav className="navbar">
        {showMenu && (
          <div className="navbar-container">
            {/* Jump */}
            <div className="navbar-item jump">
              <div className="navbar-item-icon jump-icon">
                <GiJumpAcross />
              </div>
              <div className="navbar-item-label">JUMP</div>
            </div>

            {/* Units */}
            <div className="navbar-item">
              <div className="navbar-item-icon units">
                <MdViewColumn />
              </div>
              <div className="navbar-item-label">UNITS</div>
            </div>

            {/* Height Line */}
            <div className="navbar-item">
              <div className="navbar-item-icon height-line">
                <TbRuler2 />
                {/* onClick={handleClick} */}
                {/* className={click ? "height-line" : "crossed-out-height-line"} */}
              </div>
              <div className="navbar-item-label">HEIGHT</div>
            </div>

            {/* Info */}
            <div className="navbar-item info">
              <div className="navbar-item-icon">
                <FaCircleInfo />
              </div>
              <div className="navbar-item-label">INFO</div>
            </div>

            {/* Dark/Light Mode */}
            <div className="navbar-item dark">
              <div className="navbar-item-icon dark-icon">
                <LiaToggleOffSolid />
                {/* onClick={handleClick} */}
                {/* className={click ? "height-line" : "crossed-out-height-line"} */}
              </div>
              <div className="navbar-item-label dark-label">DARK</div>
            </div>
          </div>
        )}

        <div href="" className="nav-logo" onClick={toggleShowMenu}>
          <img src={logo} alt="Ascend Logo" />
        </div>
      </nav>
    </>
  );
}

export default Navbar;
