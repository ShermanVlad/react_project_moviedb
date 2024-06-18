import {Outlet} from "react-router";
import Header from "../components/Header/Header";
import React from "react";
import styles from './MainLayout.module.css'
import Genres from "../components/Genres/Genres";

const MainLayout = () => {
    return (
        <div>
            <Header/>
            <div  className={styles.mainLayDiv}>
                <Genres/>
                <Outlet/>
            </div>
        </div>
    );
};

export default MainLayout;