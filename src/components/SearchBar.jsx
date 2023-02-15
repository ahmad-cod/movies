
export default function SearchBar(props) {
    console.log(props.query)
    return (
        <div className="search-bar">
            <input
                type="text" 
                placeholder="Type to search..."
                value={props.query}
                onChange={e => props.setQuery(e.target.value)}
                />
        </div>
    )
}