import React from 'react';
import Wrapper from "../assets/wrappers/Navbar.js";
import {FaIcons} from "react-icons/fa";
import {BiSolidHome} from "react-icons/bi";
import {MdHomeWork} from "react-icons/md";
import {TbLayoutSidebarLeftExpandFilled} from "react-icons/tb";
import Logo from "./Logo.jsx";
import logo from "../assets/images/logo.svg";
import {useDashboardContext} from "../pages/DashboardLayout.jsx";
import {LogoutContainer, ThemeButton} from "./index.js";


const Navbar = () => {
    const {toggleSideBar} = useDashboardContext();
    return (
        <Wrapper>
            <div className="nav-center">
                <button type='button' className='toggle-btn' onClick={toggleSideBar}>
                    <TbLayoutSidebarLeftExpandFilled/>
                </button>
                <div>
                    <Logo/>
                    <h4 className="logo-text">Dashboard</h4>
                </div>
                <div className='btn-container'>
                    <ThemeButton/>
                    <LogoutContainer/>
                </div>

            </div>
        </Wrapper>
    );
};

export default Navbar;