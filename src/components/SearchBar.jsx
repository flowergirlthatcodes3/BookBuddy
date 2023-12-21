import { useState } from "react";
import { Link } from "react-router-dom";

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
                    <h5>Viewing {filtereredTerms.length} of {books.length} Books</h5>
                    <ul>
                        {
                          filtereredTerms.map((book) => {
                            return <div key={book.id}> 
                           
                            <Link to={`/books/${book.id}`}>
                                {book.title} Written By:  {book.author}
 
                            </Link>
                            
                          
                                </div>


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




