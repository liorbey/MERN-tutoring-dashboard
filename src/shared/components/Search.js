import React, { Fragment, useEffect, useState } from 'react'
import '../../sass/_base.scss'
import StudentList from './StudentList';
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
                const response = await fetch(`${process.env.REACT_APP_BACKEND_URL}/students`);
                const responseData = await response.json();

                if (!response.ok){
                    throw new Error(responseData.message);
                }
                setLoadedUsers(responseData.students);
                setSearchResults(responseData.students);
            }catch(err){
                setIsLoading(false)
                setError(err.message);
            }
        }
        sendRequest();
    },[])

    
    const placeDeletedHandler = deletedStudentId => {
        setSearchResults(prevStudents =>
        prevStudents.filter(student => student.id !== deletedStudentId)
        );
    };

    useEffect(props => {
        if (searchTerm) {
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
            {loadedUsers && <StudentList res = {searchResults} onDeletePlace={placeDeletedHandler}/>}
            </form>
        </Fragment>
        );
    };

export default Search;
