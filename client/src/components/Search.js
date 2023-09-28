import React from 'react'
import "../css/search.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'


const Search = () => {
    return (
        <div className="search-container">
            <form>
                <input type="text" name='search' placeholder='Search' autoComplete='off' />
                <button type='submit'>
                    <FontAwesomeIcon icon={faMagnifyingGlass} size="lg" style={{ color: "#ffffff", }} />
                </button>
            </form>
        </div>
    )
}

export default Search
