import Movie from "./Movie";

export default function MovieList({movies, filtered, favouriteComponent}) {
    const moviesToBeShown = filtered.length ? filtered : movies
    return (
        <section className="movie-list">
            
            {moviesToBeShown && moviesToBeShown.map((movie, index) => <Movie key={index} {...movie} favComponent={favouriteComponent} />)  }
        </section>
    )
}