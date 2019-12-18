import React from 'react'
import { NavLink } from 'react-router-dom';

import '../../sass/_sidebar.scss'

const SideBar = ()=>{
    return(
        <nav className="sidebar">
            <ul className="side-nav">

                <li className="side-nav__item side-nav__item--active">
                <NavLink className="side-nav__link" to="/" exact >
                        <svg className="side-nav__icon">
                            <use xlinkHref="img/sprite.svg#icon-stats-bars"></use>
                        </svg>
                        <span>Stats</span>
                    </NavLink>
                </li>
                <li className="side-nav__item">
                    <NavLink className="side-nav__link" to="/students" exact >
                        <svg className="side-nav__icon">
                            <use xlinkHref="img/sprite.svg#icon-user"></use>
                        </svg>
                        <span>Students</span>
                    </NavLink>
                </li>
                <li className="side-nav__item">
                    <NavLink className="side-nav__link" to="/add/student" exact >
                        <svg className="side-nav__icon">
                            <use xlinkHref="img/sprite.svg#icon-user-plus"></use>
                        </svg>
                        <span>Add a student</span>
                    </NavLink>
                </li>
            </ul>
        </nav>
    );
};

export default SideBar;