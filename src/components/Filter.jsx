import { useState } from "react"
import DropdownList from "./DropdownList"
import dropdown from '../assets/icon-arrow-down.svg'
import dropup from '../assets/icon-arrow-up.svg'

export default function Filter({ filterBy, movies, filterByGenre, genresList }) {
    const [genreDrpdown, setGenreDrpdown] = useState(false)
    const [yearsDrpdown, setYearsDrpdown] = useState(false)

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
                    <h4 onClick={() => setGenreDrpdown(prev => !prev)}>
                        Genre <span><img src={!genreDrpdown ? dropdown : dropup}/></span>
                    </h4>
                    {
                        genreDrpdown &&
                        <DropdownList className='genresDropdown' dropdownArr={availableGenres} handleFilter={filterByGenre} />
                    }
                </div>
                <div className="container">
                    <h4 onClick={() => setYearsDrpdown(prev => !prev)}>
                        Year  <span><img src={!yearsDrpdown ? dropdown : dropup}/></span>
                    </h4>
                    {
                        yearsDrpdown &&
                        <DropdownList className='yearsDropdown' dropdownArr={availableYears} handleFilter={filterBy} />
                    }
                </div>
            </div>
        </div>
    )
}