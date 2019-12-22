import React, { Fragment, useEffect, useState } from 'react'
import '../../sass/_base.scss'
import StudentList from './StudentList';
import Students from '../../pages/Students';
import ErrorModal from '../../shared/UI/ErrorModal';

const Search = props =>{
    const [error, setError] = useState();
    const [loadedUsers, setLoadedUsers] = useState();
    const [isLoading, setIsLoading] = useState();
    const [searchTerm, setSearchTerm] = useState("");
    const [searchResults, setSearchResults] = useState([]);
    const handleChange = event => {
    setSearchTerm(event.target.value);
    };
    useEffect(()=>{
        const sendRequest = async () => {
            setIsLoading(true);
            try{
                const response = await fetch('http://localhost:5000/api/students');
                const responseData = await response.json();

                if (!response.ok){
                    throw new Error(responseData.message);
                }
    
                setLoadedUsers(responseData.students);
            }catch(err){
                setIsLoading(false)
                setError(err.message);
            }

        }
        sendRequest();
    },[searchTerm])
    
    
    useEffect(() => {
        if (loadedUsers) {
            const results = loadedUsers.filter(person =>
                person.name.toLowerCase().includes(searchTerm)
                );
            setSearchResults(results);
        }
        }, [searchTerm]);
        
    const errorHandler = () =>{
        setError(null);
        }
    return(
        <Fragment>
            <ErrorModal error = {error} onClear = {errorHandler}/>
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
