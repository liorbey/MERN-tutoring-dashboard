import React, { useState } from 'react';
import '../sass/_base.scss';

const TopNav = props => {
    const [searchTerm, setSearchTerm] = React.useState("");
    const [searchResults, setSearchResults] = React.useState([]);
    const handleChange = event => {
    setSearchTerm(event.target.value);
    };

    //*React.useEffect(props => {
       //*     const results = people.filter(person =>
       //*       person.toLowerCase().includes(searchTerm)
       //*     );
       //*     setSearchResults(results);
       //*   }, [searchTerm]);
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

            <form action="#" className="search">
                <input type="text" 
                className="search__input" 
                placeholder="Student Search"
                value={searchTerm}
                onChange={handleChange}
                />
                <button className="search__button">
                    <svg className="search__icon">
                        <use xlinkHref="img/sprite.svg#icon-magnifying-glass"/>
                    </svg>
                </button>
            </form>

            <nav className="user-nav">
                <div className="user-nav__icon-box">
                    <svg className="user-nav__icon">
                        <use xlinkHref="img/sprite.svg#icon-clipboard"></use>
                    </svg>
                    <span className="user-nav__notification">7</span>
                </div>
                <div className="user-nav__user" onMouseOver={openUserHandler} onMouseOut={closeUserHandler}>
                    {IsClicked ? <p>yes</p> : <p>no</p>}
                    <img src="img/user.jpg" alt="User" className="user-nav__user-photo"/>
                    <span className="user-nav__user-name">Lior</span>
                </div>
            </nav>
        </header>
        </React.Fragment>
    );
};

export default TopNav;