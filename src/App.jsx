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

  const api = `https://www.omdbapi.com/?s=${query}&apikey=7536432`

  const getMovies = () => {
    fetch(api)
      .then(response => response.json())
      .then(data => setMovies(data.Search))
  }

  const getGenres = () => {
    const url = 'https://www.omdbapi.com/?apikey=7536432&i='
    let movieGenres = []

    movies&& movies.forEach(movie => {
      fetch(`${url}${movie.imdbID}`)
      .then(response => response.json())
      .then(data => {
        const genresArr = data.Genre.split(',')
        movieGenres.push({
          id: data.imdbID,
          img: data.Poster,
          title: data.Title,
          genre: data.Genre,
          plot: data.Plot,
          year: data.Year
        })
        setGenresList(prevState => [...prevState, ...genresArr])
      }  
      )
      setGenres(movieGenres)
    })
  }

  useEffect(() => getMovies(), [query])
  useEffect(() => getGenres(), [movies])

  const filter = (query, queryType) => {
    if(query === filterQuery) return setFiltered([])

    const filteredMovies = (queryType === 'year') ?
      genres.filter(movie => movie[queryType] === query) :
      genres.filter(movie => movie[queryType].includes(query))

    setFilterQuery(query)
    setFiltered(filteredMovies)
  }
  
  return (
    <div className="App">
      <header role={'banner'}>
        <Heading heading='Movies'/>
        <SearchBar query={query} setQuery={setQuery} />
        <Filter filter={filter} movies={movies} genres={genres} genresList={genresList} />
      </header>
      <Hero />
      <main>
        <MovieList movies={movies} genres={genres} filtered={filtered} />
      </main>
    </div>
  )
}

export default App
