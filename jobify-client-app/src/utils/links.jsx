import React from 'react';

import { IoBarChartSharp } from 'react-icons/io5';
import { MdQueryStats } from 'react-icons/md';
import { FaWpforms } from 'react-icons/fa';
import { ImProfile } from 'react-icons/im';
import { MdAdminPanelSettings } from 'react-icons/md';
import {NavLink} from "react-router-dom";
import Logo from "../component/Logo.jsx";

const links = [
    {
        text : 'add job',
        path : '.',
        icon : <FaWpforms/>
    },
    {
        text : 'all job',
        path : 'all-job',
        icon : <MdQueryStats/>
    },
    {
        text : 'stats',
        path : 'stats',
        icon : <IoBarChartSharp/>
    },
    {
        text : 'profile',
        path : 'profile',
        icon : <ImProfile/>
    },
    {
        text : 'admin',
        path : 'admin',
        icon : <MdAdminPanelSettings/>
    },
];

const Links = ()=>{
    const links = [
        {
            text : 'add job',
            path : '.',
            icon : <FaWpforms/>
        },
        {
            text : 'all job',
            path : 'all-job',
            icon : <MdQueryStats/>
        },
        {
            text : 'stats',
            path : 'stats',
            icon : <IoBarChartSharp/>
        },
        {
            text : 'profile',
            path : 'profile',
            icon : <ImProfile/>
        },
        {
            text : 'admin',
            path : 'admin',
            icon : <MdAdminPanelSettings/>
        },
    ];
    let strNav = '';
    links.forEach(link => {
        const {text, path, icon} = link;
        strNav += <NavLink to={path} key={text} className="nav-links">
                <span>{icon}</span>{text}
            </NavLink>
        ;
    });
    return strNav;
};

//export default Links;
export  default  links;