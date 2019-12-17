import React, { useState } from 'react';
import '../sass/_base.scss';

const TopNav = props => {
    const [IsClicked, setUserIsClicked] = useState(false);

    const openUserHandler = () =>{
        setUserIsClicked(true);
    };

    const closeUserHandler = () =>{
        setUserIsClicked(false);
    };

    return(
        <React.Fragment>
        <header className="header">
            <img src="/img/logo.png" alt="BeyTech logo" className="logo"/>

            <nav className="user-nav">
                <div className="user-nav__icon-box">
                    <svg className="user-nav__icon">
                        <use xlinkHref="img/sprite.svg#icon-clipboard"></use>
                    </svg>
                    <span className="user-nav__notification">7</span>
                </div>
                <div className="user-nav__user" onMouseEnter={openUserHandler} onMouseLeave={closeUserHandler} >
                <div className="user-nav__drawer-box" >
                    {IsClicked ? <button className="user-nav__drawer">sign out</button>: null}
                    </div>
                    <img src="img/user.jpg" alt="User" className="user-nav__user-photo"/>
                    <span className="user-nav__user-name">Lior</span>
                </div>
            </nav>
        </header>
        </React.Fragment>
    );
};

export default TopNav;