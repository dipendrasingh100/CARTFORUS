import React, { useState } from 'react'
import "../css/search.css"
import axios from "axios"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'


const Search = () => {
    const [input, setInput] = useState("")
    const [results, setResults] = useState([])

    const fetchData = async (value) => {
        const data = await axios.get("https://jsonplaceholder.typicode.com/users")
        const rec = data.data.filter(user => {
            return value && user && user?.name.toLowerCase().includes(value)
        })
        setResults(rec);
    }

    const handleChange = (value) => {
        setInput(value)
        fetchData(value)
    }

    const handleSearch = (name)=>{
        setInput(name)
    }
    return (
        <div className='search-bar'>
            <div className="search-container">
                <form>
                    <input type="search" name='search' placeholder='Search' autoComplete='off' value={input}
                        onChange={(e) => handleChange(e.target.value)} />
                    <button type='submit'>
                        <FontAwesomeIcon icon={faMagnifyingGlass} size="lg" style={{ color: "#ffffff", }} />
                    </button>
                </form>
            </div>
            <div className="results-container">
                {
                    results.map((result, id) => (
                        <div key={id} onClick={()=>handleSearch(result.name)}>
                            {result.name}
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default Search
