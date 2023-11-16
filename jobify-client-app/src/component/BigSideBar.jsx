import React from 'react';
import Wrapper from "../assets/wrappers/BigSidebar.js";
import {FaTimes} from "react-icons/fa";
import {Link, NavLink} from "react-router-dom";
import Logo from "./Logo.jsx";
import links from "../utils/links.jsx";
import {useDashboardContext} from "../pages/DashboardLayout.jsx";
import {NavLinks} from "./index.js";


const BigSideBar = () => {
    const {showSideBar, toggleSideBar} = useDashboardContext();
    return (
    <Wrapper>
        <div className={showSideBar? 'sidebar-container' : 'sidebar-container show-sidebar'}>
            <div className="content">
                <header>
                    <Logo/>
                </header>
                <NavLinks isBigSideBar/>
            </div>
        </div>
    </Wrapper>
)};

export default BigSideBar;