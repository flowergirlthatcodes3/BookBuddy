import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useAsyncError, useNavigate, useParams } from "react-router-dom";


const SingleBook = ({books, user}) => {
    const params = useParams()
    const bookId = params.id*1

    const [grabMyBook, setGrabMyBook] = useState(null)
    const [checkedoutError, setCheckedoutError] = useState(null)
    const navigate = useNavigate()

    useEffect(() => {
        const book = books.find((book) => book.id === bookId)
        setGrabMyBook(book)
        
    }, [books, bookId])

    const handleCheckout = async () => {
        const loggedInToken = window.localStorage.getItem('token')
        try{
            const response = await axios.patch(    `https://fsa-book-buddy-b6e748d1380d.herokuapp.com/api/books/${bookId}`,
            {
    
              available: false,
            },
            {
              headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${loggedInToken}`
              },
            }
          );
          navigate('/account')

    } catch (error) {
        console.error('Looks like there is an issue checking out this book:', error)
        setCheckedoutError('Looks like there is an issue checking out this book. Please try checking out again.')
    }
}

     if(!grabMyBook) {
    return <div>Sorry, Create an account to view this book.</div>
    }
    else {
    const onDeck = grabMyBook.available ? "YAYYY, let's read!!" : "OH NO, someone is reading this one!"

        return (
            <div>
            <div className="singleBook">
                <h1>{grabMyBook.title}</h1>
                <img className="cover" src={grabMyBook.coverimage}/>
                <h2> Written By: {grabMyBook.author} </h2>
                <p>{grabMyBook.description}</p>
                <h3> Is it on the shelf? {onDeck}</h3>
        
            </div>
            { user.email && (
                <div className="singleb">
                <button onClick={handleCheckout} className="checkout">CheckMeOut!</button>
            
                </div>
            )}
            {checkedoutError && <p> {checkedoutError} </p>}
            <span className="goback"> <Link to='/books'> Let's Get Back To Our Library! </Link>
                 </span>
            </div>
        )   
        }
    }



export default SingleBook