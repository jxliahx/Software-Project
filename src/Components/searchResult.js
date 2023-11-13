import React from 'react'
import './searchBar.css';

export const SearchResult = ({result}) => {
    return (
        <div
            //onClick={(e) => alert(`You selected ${result}!`)}
        >
            {result.username}
        </div>
    )
}