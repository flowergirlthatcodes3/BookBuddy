import { Link, useParams } from "react-router-dom";

const SingleBook = ({books}) => {
    const params = useParams()
    const id = params.id*1 

    const book = books.find((book) => {
        return book.id === id
    })

    if (!book) {
    return null
    }
    else {
        const onDeck = book.available ? "YAYYY, let's read!!" : "OH NO, someone is reading this one!"

        return (
            <div className="singleBook">
                <h1>{book.title}</h1>
                <img className="cover" src={book.coverimage}/>
                <h2> Written By: {book.author} </h2>
                <p>{book.description}</p>
                <h3> Is it on the shelf? {onDeck}</h3>
                <Link to='/books'> Let's Get Back To Our Library! </Link>
            
            </div>
        )
        }

}

export default SingleBook