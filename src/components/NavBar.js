import React from "react";
import { NavLink } from "react-router-dom";
import "../static/Nav.css";


const NavBar = function () {
    return(
        <div className="nav-container">
            <ul className="internal">
                <li>
                    <NavLink to="/">
                        <img className="home-logo" src="https://img.icons8.com/ios-glyphs/60/ffffff/home.png"/>   
                    </NavLink>
                </li>
                <li className="website-sections">
                    <NavLink to="/coding">
                        <button>Coding</button>
                    </NavLink>
                    <NavLink to="/experience">
                        <button>Experience</button>
                    </NavLink>
                    <NavLink to="/contact">
                        <button>Contact</button>
                    </NavLink>
                </li>
            </ul>
            <ul className="external">
                <li>
                    <a href="https://github.com/StrtMilne" target="_blank">
                        <img src="https://img.icons8.com/ios-glyphs/60/ffffff/github.png"/>
                    </a>
                </li>
                <li>
                    <a href="https://www.linkedin.com/in/strtmilne/" target="_blank">
                        <img src="https://img.icons8.com/ios-glyphs/60/ffffff/linkedin.png"/>
                    </a>
                </li>
            </ul>
        </div>
    )
};

export default NavBar;