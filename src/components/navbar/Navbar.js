import React, { useState } from "react";
import "./Navbar.css";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  function handleOpen(e) {
    setOpen(!open);
  }

  return (
    <>
      <nav>
        <div className="nav_container">
          <li className="logo">
            <a href="./App">
              Grow<span>.finance</span>
            </a>
          </li>
          <li className="mid_menu">
            <li className="item">supply</li>
            <li className="item">Trade</li>
            <li className="item">
              <p className="open">
                Docs <i className="fa fa-caret-down" aria-hidden="true"></i>
                <ul className="dropdown">
                  <li>Gitbook</li>
                  <li>Github</li>
                </ul>
              </p>
            </li>
            <li className="item">
              <p className="open">
                Community{" "}
                <i className="fa fa-caret-down" aria-hidden="true"></i>
                <ul className="dropdown">
                  <li>Discord</li>
                  <li>Twitter</li>
                  <li>Medium</li>
                </ul>
              </p>
            </li>
          </li>
          <li className="btn">
            <button>Launch App</button>
          </li>
          <li className="menu_bar">
            <button onClick={handleOpen}>
              <i class="fa fa-bars fa-2x" aria-hidden="true"></i>
            </button>
            {open ? (
              <ul className="dropdown_menu">
                <li className="item">supply</li>
                <li className="item">Trade</li>
                <li className="item">
                  <p className="res-down">
                    Docs <i class="fa fa-caret-down" aria-hidden="true"></i>
                    <ul className="dropdown">
                      <li>Gitbook</li>
                      <li>Github</li>
                    </ul>
                  </p>
                </li>
                <li className="item">
                  <p className="res-down">
                    Community{" "}
                    <i class="fa fa-caret-down" aria-hidden="true"></i>
                    <ul className="dropdown">
                      <li>Discord</li>
                      <li>Twitter</li>
                      <li>Medium</li>
                    </ul>
                  </p>
                </li>
              </ul>
            ) : (
              <></>
            )}
          </li>
        </div>
      </nav>
    </>
  );
}
