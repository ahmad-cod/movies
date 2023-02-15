import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Movie from './components/Movie'
import SearchBar from './components/SearchBar'
import MovieList from './components/MovieList'

function App() {
  const [movies, setMovies] = useState([])
  const [query, setQuery] = useState('avengers')

  const api = `http://www.omdbapi.com/?s=${query}&apikey=7536432`

  const getMovies = () => {
    fetch(api)
      .then(response => response.json())
      .then(data => setMovies(data.Search))
  }

  useEffect(() => {
    getMovies()
  }, [query])

  console.log(movies)
  return (
    <div className="App">
      <header>
        <h1>Movies</h1>
        <SearchBar query={query} setQuery={setQuery} />
      </header>
      <main>
        <MovieList movies={movies} />
      </main>
    </div>
  )
}

export default App
