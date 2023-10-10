import React, { useRef, useState } from 'react'
import "../css/search.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import { useNavigate } from 'react-router-dom'
import server from '../host'


const Search = () => {
    const resCont = useRef()
    const navigate = useNavigate()
    const [keyword, setKeyword] = useState("")
    const [results, setResults] = useState([])

    const fetchData = async (value) => {
        const {data} = await server.get("/api/v1/products")
        const rec = data.products.filter(product => {
            return value && product && product?.title?.toLowerCase().includes(value)
        })
        setResults(rec);
    }

    const handleChange = (value) => {
        setKeyword(value)
        fetchData(value)
        resCont.current.style.display = "block"
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        resCont.current.style.display = "none"
        if (keyword.trim()) {
            navigate(`/search?q=${keyword}`)
        } else {
            navigate('/products/')
        }
    }

    const handleSearch = (name) => {
        setKeyword(name)
        navigate(`/search?q=${name}`)
    }
    return (
        <div className='search-bar'>
            <div className="search-container">
                <form onSubmit={handleSubmit}>
                    <input type="search" name='search' placeholder='Search' autoComplete='off' value={keyword}
                        onChange={(e) => handleChange(e.target.value)} />
                    <button type='submit'>
                        <FontAwesomeIcon icon={faMagnifyingGlass} size="lg" style={{ color: "#ffffff", }} />
                    </button>
                </form>
            </div>
            <div className="results-container" ref={resCont}>
                {
                    results.map((result, id) => (
                        <div key={id} onClick={() => handleSearch(result.title)}>
                            {result.title}
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default Search
