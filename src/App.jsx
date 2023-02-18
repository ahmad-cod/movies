import { useEffect, useState } from 'react'
import './App.css'
import SearchBar from './components/SearchBar'
import MovieList from './components/MovieList'
import Heading from './components/MovieListHeading'
import Filter from './components/Filter'
import Hero from './components/Hero'

function App() {
  const [movies, setMovies] = useState([])
  const [filtered, setFiltered] = useState([])
  const [query, setQuery] = useState('avengers')
  const [filterQuery, setFilterQuery] = useState(null)
  const [genres, setGenres] = useState([])
  const [genresList, setGenresList] = useState([])

  const api = `http://www.omdbapi.com/?s=${query}&apikey=7536432`

  const getMovies = () => {
    fetch(api)
      .then(response => response.json())
      .then(data => setMovies(data.Search))

    getGenres()

  }

  const getGenres = () => {
    const url = 'http://www.omdbapi.com/?apikey=7536432&i='
    let movieGenres = []

    movies&& movies.forEach(movie => {
      fetch(`${url}${movie.imdbID}`)
      .then(response => response.json())
      .then(data => {
        const genresArr = data.Genre.split(',')
        movieGenres.push({
          id: data.imdbID,
          genre: data.Genre,
          plot: data.Plot
        })
        setGenresList(prevState => [...prevState, ...genresArr])
      }  
      )
      setGenres(movieGenres)
    })
  }

  useEffect(() => getMovies(), [query])

  const filterBy = query => {
    if(query === filterQuery) return setFiltered([])

    const filteredMovies = movies.filter(movie => movie.Year === query)
    setFilterQuery(query)
    setFiltered(filteredMovies)
  }
  const filterByGenre = (query) => {
    if(query === filterQuery) return setFiltered([])

    const filteredMovies = genres.filter(movie => movie.genre === query) 
  }

  return (
    <div className="App">
      <header role={'banner'}>
        <Heading heading='Movies'/>
        <SearchBar query={query} setQuery={setQuery} />
        <Filter filterBy={filterBy} movies={movies} genres={genres}
         filterByGenre={filterByGenre} genresList={genresList} />
      </header>
      <Hero />
      <main>
        <MovieList movies={movies} filtered={filtered} />
      </main>
    </div>
  )
}

export default App
