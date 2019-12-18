import React, { Fragment } from 'react'
import '../../sass/_base.scss'
const Search = props =>{

    let result = props.peoples.map(a => a.name);

    const [searchTerm, setSearchTerm] = React.useState("");
    const [searchResults, setSearchResults] = React.useState([]);
    const handleChange = event => {
    setSearchTerm(event.target.value);
    };
    React.useEffect(() => {
        const results = result.filter(person =>
        person.toLowerCase().includes(searchTerm)
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
    </form>
    <ul>
    {searchResults.map(item => (
     <li>{item}</li>
   ))}
 </ul>
</Fragment>
    );
};

export default Search;
