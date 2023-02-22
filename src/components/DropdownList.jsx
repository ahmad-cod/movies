
export default function DropdownList({ dropdownArr, handleFilter, className }) {
    const queryType = (className === 'yearsDropdown') ? 'year' : 'genre' 
    return (
        <div className={className}>
            <ul className='overflow'>
                {dropdownArr.length ? 
                dropdownArr.map((query, index) => 
                    <li key={index}>
                    <input type={"radio"} name='filterQuery' id={query}
                        onClick={() => handleFilter(query, queryType)} />
                    <label htmlFor={query}>{query}</label>
                    </li>)
                : <p>Loading...</p>
            }
            </ul>
        </div>
    )
}