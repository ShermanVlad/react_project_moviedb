import React from 'react';
import styles from './Header.module.css'
import {Link} from "react-router-dom";
import UserInfo from "../UserInfo/UserInfo";
import {useNavigate} from "react-router";

const Header = () => {

    const navigate = useNavigate()

    const setSearchWord = (query:string) => {
        if(query) {
            navigate(`/search/${query}`)
        }else{
            navigate('/movies')
        }
    }

    return (
        <div className={styles.headerDiv}>
            <Link to={'/movies'} className={styles.linkTag}><h3>Sherman</h3></Link>
            <input type="text" placeholder={'Enter movie'} onChange={e => setSearchWord(e.target.value)}/>
            <UserInfo/>
        </div>
    );
};

export default Header;