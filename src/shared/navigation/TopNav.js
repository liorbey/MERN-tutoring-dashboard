import React, { useState,useContext } from 'react';
import '../../sass/_base.scss';
import { AuthContext } from '../context/Auth-Context';
import Search from '../components/Search';

const TopNav = props => {
    const auth = useContext(AuthContext);

    const [IsClicked, setUserIsClicked] = useState(false);

    const openUserHandler = () =>{
        setUserIsClicked(true);
    };

    const closeUserHandler = () =>{
        setUserIsClicked(false);
    };

    return(
        <header className="header">
            <img src="/img/logo.png" alt="BeyTech logo" className="logo"/>
            <nav className="user-nav">
                <div className="user-nav__user" onMouseEnter={openUserHandler} onMouseLeave={closeUserHandler} >
                <div className="user-nav__drawer-box" >
                    {IsClicked ?<button onClick = {auth.logout} className="user-nav__drawer">sign out</button>: null}
                    </div>
                    <img src="img/user.jpg" alt="User" className="user-nav__user-photo"/>
                    <span className="user-nav__user-name">testuser</span>
                </div>
            </nav>
        </header>
    );
};

export default TopNav;