import Movie from "./Movie";

export default function MovieList({movies, filtered, genres}) {
    const moviesToBeShown = filtered.length ? filtered : genres
    return (
        <section className="movie-list">      
            {moviesToBeShown && moviesToBeShown.map((movie, index) => <Movie key={index} {...movie} />)  }
        </section>
    )
}