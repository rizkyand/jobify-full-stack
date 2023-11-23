import React, {createContext, useContext, useState} from 'react';
import {Outlet, redirect, useLoaderData, useNavigate} from "react-router-dom";
import {Navbar, SmallSideBar, BigSideBar} from "../component/index.js";
import Wrapper from "../assets/wrappers/Dashboard.js";
import customFetch from "../utils/CustomFetch.js";
import {toast} from "react-toastify";

const DashBoardContext = createContext();


export const loader = async () =>{
    try {
        const {data} = await customFetch.get('users/current-user');
        return data;
    }catch (e){
        console.log(e);
    }
}

function DashboardLayout() {
    const navigate = useNavigate();
    const {user} = useLoaderData();
    if(!user){
        navigate('/login')
    }
    const userDummy = user;
    const [showSideBar, setShowSetBar] = useState(false);
    const [isDarkTheme, setIsDarkTheme] = useState(false);

    const toggleSideBar = () => {
        setShowSetBar(!showSideBar);
    }
    const toggleDarkTheme = () => {
        const theDarkTheme = !isDarkTheme;
        setIsDarkTheme(theDarkTheme);
    }

    const isUserLogout = async () => {
        navigate('/');
        await customFetch.get('auth/logout');
        toast.success('success logout');
    }

    return (
        <DashBoardContext.Provider
            value={
                {userDummy,
                showSideBar,
                isDarkTheme,
                toggleDarkTheme,
                toggleSideBar,
                isUserLogout}}>
        <Wrapper>
            <main className="dashboard">
                <SmallSideBar/>
                <BigSideBar/>
                <div>
                    <Navbar/>
                    <div className="dashboard-page">
                        <Outlet context={{userDummy}}/>
                    </div>
                </div>
            </main>
        </Wrapper>
        </DashBoardContext.Provider>
    );
}

export const useDashboardContext = () => useContext(DashBoardContext);
export default DashboardLayout;