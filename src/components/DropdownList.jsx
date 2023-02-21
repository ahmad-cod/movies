
export default function DropdownList({ dropdownArr, handleFilter, className }) {
    return (
        <div className={className}>
            <ul className='overflow'>
                {dropdownArr.length ? 
                dropdownArr.map((query, index) => 
                    <li key={index}>
                    <input type={"radio"} name='genreFilterQuery' onClick={() => handleFilter(query)} />{query}
                    </li>)
                : <p>Loading...</p>
            }
            </ul>
        </div>
    )
}