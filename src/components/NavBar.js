import React from "react";
import { NavLink } from "react-router-dom";

const NavBar = function () {
    return(
        <ul>
            <li>
                <NavLink to="/">
                    <button>Home</button>
                </NavLink>
            </li>
            <li>
                <NavLink to="/coding">
                    <button>Coding</button>
                </NavLink>
                <NavLink to="/experience">
                    <button>Experience</button>
                </NavLink>
            </li>
        </ul>
    )
};

export default NavBar;