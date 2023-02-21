import { useEffect } from "react"

export default function Filter({ filterBy, movies, filterByGenre, genresList }) {
    useEffect(() => {
        
    }, [])
    const availableGenres = []
    const availableYears = []
    if(movies) {
        for(let movie of movies) {
            if(!availableYears.includes(movie.Year)) {
                availableYears.push(movie.Year)
            }
        }
        for(let item of genresList) {
            if(!availableGenres.includes(item)) {
                availableGenres.push(item)
            }
        }
    }
    return (
        <div className="filter">
            <div className="filter-components">
                
                <div className="container genre">
                    <h4>Genre</h4>
                    <ul className="filter-list">
                        {availableGenres.length ? 
                        availableGenres.map((genre, index) => 
                         <li key={index}>
                            <input type={"radio"} name='genreFilterQuery' onClick={() => filterByGenre(genre)} />{genre}
                         </li>)
                        : <p>Loading...</p>
                    }
                    </ul>
                </div>
                <div className="container">
                    <h4>Year</h4>
                    <ul className="filter-list">
                        {availableYears.length ? 
                        availableYears.map((year, index) => 
                         <li key={index}>
                            <input type={"radio"} name='yearFilterQuery' onClick={() => filterBy(year)} />
                            <label className="filter-item">{year}</label>
                         </li>)
                        : <p>Loading...</p>
                    }
                    </ul>
                </div>
            </div>
        </div>
    )
}