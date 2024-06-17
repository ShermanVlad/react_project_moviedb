import {Outlet} from "react-router";
import HeaderComponent from "../components/headerComponent/HeaderComponent";
import React from "react";

const MainLayout = () => {
    return (
        <div>
            <HeaderComponent/>
            <aside></aside>
            <Outlet/>
        </div>
    );
};

export default MainLayout;