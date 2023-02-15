
export default function Movie(props) {
    return (
        <div>
            <img src={props.Poster} alt="Movie's Poster" />
            <h3>{props.Title}</h3>
            <p>{props.Released}</p>
            <p>{props.Genre}</p>
            <p>{props.Plot}</p>
        </div>
    )
}