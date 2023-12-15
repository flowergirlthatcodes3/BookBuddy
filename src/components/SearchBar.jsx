import { useState } from "react";

const SearchBar = ({books}) => {
    const [searchTerm, setSearchTerm] = useState('')
    const filtereredTerms = books.filter((book) => {
        return book.title.indexOf(searchTerm) !== -1

    })
    return(
        <div className="searchB">

            <label>
                <input className="search" type="text" value={searchTerm} onChange={(Event) => {setSearchTerm(Event.target.value)}} />
            </label>
            {
             searchTerm.length > 0 ? 
                <div className="filter"> 
                    <h5>Viewing {filtereredTerms.length} of {books.length}</h5>
                    <ul>
                        {
                          filtereredTerms.map((book) => {
                            return <li key={book.id}>{book.title}</li>


                            })
                        }
                    </ul>
            
        </div>
        : null
                    }


</div>
    )
}
export default SearchBar




