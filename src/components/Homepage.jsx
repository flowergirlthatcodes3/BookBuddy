import { Link, Navigate } from "react-router-dom"
import Books from "./Books"



const Homepage = ({books}) => {

    return (
        <div>
        

                <h2>Welcome to our library!</h2>
               
                <Link className="linkallb" to={'/books'}>All Books!</Link>
               
          


           

            
           

    
        </div>
    )
}

export default Homepage