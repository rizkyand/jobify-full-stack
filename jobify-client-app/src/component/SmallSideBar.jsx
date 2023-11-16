import React from 'react';
import Wrapper from "../assets/wrappers/SmallSidebar";

import { FaTimes } from 'react-icons/fa';

import Logo from './Logo';
import {Link, NavLink} from 'react-router-dom';
import links from '../utils/links';
import { useDashboardContext } from '../pages/DashboardLayout';
import Links from "../utils/links";
import {NavLinks} from "./index.js";

const SmallSideBar = () => {
    const {showSideBar, toggleSideBar} = useDashboardContext();
    return (<Wrapper>
        <div className={
            showSideBar ? 'sidebar-container show-sidebar' : 'sidebar-container'}>
            <div className="content">
                <button type='button' className="close-btn" onClick={toggleSideBar}><FaTimes/></button>
                <header>
                    <Link to='/'>
                        <Logo/>
                    </Link>
                </header>
                <NavLinks/>
            </div>
        </div>
    </Wrapper>)
};

export default SmallSideBar;