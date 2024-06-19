import React from 'react';
import styles from './Header.module.css'
import {Link} from "@mui/material";
import UserInfo from "../UserInfo/UserInfo";

const Header = () => {
    return (
        <div className={styles.headerDiv}>
            <Link key={'/movies'} className={styles.linkTag}><h3>Sherman films</h3></Link>
            <UserInfo/>
        </div>
    );
};

export default Header;