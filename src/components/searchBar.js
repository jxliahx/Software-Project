import React, {useState} from 'react'
import './searchBar.css';
import { faMagnifyingGlass, faSearch } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export const SearchBar = ({setResults}) => {

    const[input, setInput] = useState("");

    const fetchData= (value) => {
        fetch("https://jsonplaceholder.typicode.com/users")
        .then((response) => response.json()
        .then((json) => {
            const results = json.filter((user) => {
                return (
                    value && 
                    user && 
                    user.username 
                    && user.username.toLowerCase().includes(value)
                );
            });
            //console.log(json);
            setResults(results);
        }));
    }

    const handleChange = (value) => {
        setInput(value);
        fetchData(value);
    }

    return (
        <div className='SearchWrapper'>
            <FontAwesomeIcon icon={faMagnifyingGlass} size="2x" />
            <input
                className='Search'
                id="search"
                placeholder="Enter username..."
                value={input} 
                onChange={(e) => handleChange(e.target.value)}               
            />

        </div>
    )
}

export default SearchBar;