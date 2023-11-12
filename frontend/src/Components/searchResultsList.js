import React from 'react'
import './searchBar.css';
import { SearchResult } from "./searchResult";

export const SearchResultsList = ({results}) => {
    return (
        <div className="ResultsList">
            {
                results.map((result, id) => (
                    <SearchResult result={result.name} key={id} />
                ))
            }
        </div>
    )
}
