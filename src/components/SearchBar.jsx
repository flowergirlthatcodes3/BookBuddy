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
                <div> 
                    <h3>Viewing {filtereredTerms.length} of {books.length}</h3>
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




