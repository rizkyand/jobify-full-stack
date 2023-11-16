import React from 'react';
import links from "../utils/links.jsx";
import {NavLink} from "react-router-dom";
import {useDashboardContext} from "../pages/DashboardLayout.jsx";

const NavLinks = ({isBigSideBar}) => {
    const {toggleSideBar, user} = useDashboardContext();
    return (
        <div className="nav-links">
            {links.map((link => {
                const {text, path, icon} = link;
                return (
                    <NavLink to={path} key={text} className="nav-link" onClick={isBigSideBar? null : toggleSideBar} end>
                        <span className='icon'>{icon}</span> {text}
                    </NavLink>
                );
            }))}
        </div>
    );
};

export default NavLinks;