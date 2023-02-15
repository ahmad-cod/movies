import Movie from "./Movie";

export default function MovieList({ movies }) {
    return (
        <section className="movie-list">
            {movies && movies.map((movie, index) => <Movie key={index} {...movie} />)  }
        </section>
    )
}