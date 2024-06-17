import React from 'react';
import styles from './headerComponent.module.css'
import {Link} from "@mui/material";

const HeaderComponent = () => {
    return (
        <div className={styles.headerDiv}>
            <Link key={'/movies'} className={styles.linkTag}><h3>Sherman films</h3></Link>
            <div className={styles.rightHeaderDiv}>
                <img src='/user-100.png' alt="user-logo" className={styles.userLogo}/>

            </div>
        </div>
    );
};

export default HeaderComponent;