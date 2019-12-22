import React, {useState} from 'react'
import { NavLink } from 'react-router-dom';

import '../../sass/_sidebar.scss'


const SideBar = ()=>{
    const [activeTab, setActiveTab] = useState('1');

    return(
        <nav className="sidebar">
            <ul className="side-nav">

                <li onClick = {()=>setActiveTab('1')} className={activeTab==='1'? "side-nav__item side-nav__item--active": "side-nav__item"}>
                <NavLink className="side-nav__link" to="/stats" exact >
                        <svg className="side-nav__icon">
                            <use xlinkHref="img/sprite.svg#icon-stats-bars"></use>
                        </svg>
                        <span>Stats</span>
                    </NavLink>
                </li>
                <li onClick = {()=>setActiveTab('2')} className={activeTab==='2'? "side-nav__item side-nav__item--active": "side-nav__item"}>
                    <NavLink className="side-nav__link" to="/students" exact>
                        <svg className="side-nav__icon">
                            <use xlinkHref="img/sprite.svg#icon-user"></use>
                        </svg>
                        <span>Students</span>
                    </NavLink>
                </li>
                <li onClick = {()=>setActiveTab('3')} className={activeTab==='3'? "side-nav__item side-nav__item--active": "side-nav__item"}>
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