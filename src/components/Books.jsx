import { Link } from "react-router-dom";

const Books = ({books}) => {
       return (
        <div>
         
    <h1> Check Out Some Cool Books! </h1>
    <ul>
      {
        books.map((book) => {
       return (
            <li key={book.id}>
              <Link to={`/books/${book.id}`}>{book.title} </Link>
              <br />
            </li>
         
       )
       })
      }
       </ul>
          </div>
       )
      }


export default Books;
