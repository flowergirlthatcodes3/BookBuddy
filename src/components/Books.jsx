import axios from "axios"
import { useEffect } from "react"
import { useState } from "react"
import { Link, useParams,  } from "react-router-dom"


const Books = ({books}) => {
    const params = useParams()
    const id = params.id*1

   

   
    

   return (
        <div className="allBooks">
            <h1>Reading Is Cool!</h1>
            <h3>Check Out Our Books Here!</h3>
            <ul>
                {
                    books.map((book) =>{
                        return (
                            <li key={book.id}>
                                <Link to={`/books/${book.id}`}>{book.title}</Link>
                            </li>
                        )
                    })
                }
                
                
            </ul>
        
        </div>
   )
}
    
export default Books