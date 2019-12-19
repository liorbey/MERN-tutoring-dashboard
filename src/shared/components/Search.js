import React, { Fragment } from 'react'
import '../../sass/_base.scss'
import StudentList from './StudentList';
import Students from '../../pages/Students';

const Search = props =>{

    const students = [{
        id: "s1",
        name: "Joe Rogan",
        level: "8/10",
        subject: "python",
        address: '20 W 34th St, New York, NY 10001',
        location: {
        lat: 40.7484405,
        lng: -73.9878584
        },
    },
    {
        id: "s2",
        name: "roe jogan",
        level: "8/10",
        subject: "javascript",
        address: '20 W 34th St, New York, NY 10001',
        location: {
        lat: 40.7484405,
        lng: -73.9878584
        },
    },
    {
        id: "s3",
        name: "William Matt",
        level: "9/10",
        subject: "robotics",
        address: '20 W 34th St, New York, NY 10001',
        location: {
        lat: 40.7484405,
        lng: -73.9878584
        },
    },
    {
        id: "s4",
        name: "Bill Seal",
        level: "6/10",
        subject: "math",
        address: '20 W 34th St, New York, NY 10001',
        location: {
        lat: 40.7484405,
        lng: -73.9878584
        },
    },
    

];
    
    const [searchTerm, setSearchTerm] = React.useState("");
    const [searchResults, setSearchResults] = React.useState([]);
    const handleChange = event => {
    setSearchTerm(event.target.value);
    };
    React.useEffect(() => {
        const results = students.filter(person =>
        person.name.toLowerCase().includes(searchTerm)
        );
        setSearchResults(results);
        }, [searchTerm]);
        
    return(
        <Fragment>
        <form className="search">
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
        <StudentList res = {searchResults}/>
        </form>
        </Fragment>
        );
    };

export default Search;
