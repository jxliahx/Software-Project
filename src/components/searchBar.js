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

/*
const SearchBar = () => {
    const [searchInput, setSearchInput] = useState("");

    const sampleUsers = [
        {name: "Creeper"},
        {name: "Zombie"},
        {name: "Skeleton"},
        {name: "Enderman"},
        {name: "Cow"},
        {name: "Horse"},
    ];

    const handleChange = (e) => {
        e.preventDefault();
        setSearchInput(e.target.value);
    };
  
    if (searchInput.length > 0) {
        sampleUsers.filter((user) => {
        return user.name.match(searchInput);
        });
    }

    return(
        <div>
            <input
                className='Search'
                type="search"
                placeholder="Enter username..."
                onChange={handleChange}
                value={searchInput} />

            <table>
                <tr>
                    <th>User: </th>
                </tr>

                {sampleUsers.map((user, index) => {
                    <div key={index}>
                        <tr>
                            <td>{user.name}</td>
                        </tr>
                    </div>
                })}
            </table>
            
        </div>
    )
}
*/

// const sampleUsers = [
//     {name: "Creeper"},
//     {name: "Zombie"},
//     {name: "Skeleton"},
//     {name: "Enderman"},
//     {name: "Cow"},
//     {name: "Horse"},
// ]

// const handleChange = (e) => {
//     e.preventDefault();
//     setSearchInput(e.target.value);
//   };
  
//   if (searchInput.length > 0) {
//       sampleUsers.filter((user) => {
//       return user.name.match(searchInput);
//   });
//   }

//   function SearchBar() {
//     return(
//         <div>
//             <input
//                 type="search"
//                 placeholder="Enter username..."
//                 onChange={handleChange}
//                 value={searchInput} />

//             <table>
//                 <tr>
//                     <th>User: </th>
//                 </tr>

//                 {sampleUsers.map((user, index) => {
//                     <div>
//                         <tr>
//                             <td>{user.name}</td>
//                         </tr>
//                     </div>
//                 })}
//             </table>
            
//         </div>
//     )
//   }

  export default SearchBar;