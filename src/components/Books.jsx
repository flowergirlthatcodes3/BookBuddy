import { Link } from "react-router-dom";

const Books = ({books}) => {
       return (
        <div>
         
    <h1 className="all"> Check Out Some Cool Books! </h1>
    <ul className="allbooks">
      {
        books.map((book) => {
       return (
        <div key={book.id} >
           <li key={book.id}>
              <Link className="linktob" to={`/books/${book.id}`}>{book.title} </Link>
              <br />
            </li>
        </div>
           
         
       )
       })
      }
       </ul>
          </div>
       )
      }


export default Books;
