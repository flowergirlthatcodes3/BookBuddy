
import axios from "axios"
import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"


const Account = ({user, setUser, setToken, token, books }) => {
    const [checkOutBook, setCheckOutBook] = useState([])
    const [returnError, setReturnError] = useState(null)
    const navigate = useNavigate()

  useEffect(() => {
    const fetchCheckOutBook = async () => {
        const loggedInToken = window.localStorage.getItem('token')
        try {
            const response = await axios.get('https://fsa-book-buddy-b6e748d1380d.herokuapp.com/api/reservations/',
            {
              headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${loggedInToken}`,
              },
            }
            );
            console.log(response)
            setCheckOutBook(response.data.reservation)
        } catch (error) {
           console.error('Looks like we reached an error:', error)
        }
    };
    fetchCheckOutBook()
}, [token])


    const handleReturn = async (reservationId) => {
        const loggedInToken = window.localStorage.getItem('token')
        try { 
            const response = await axios.delete(`https://fsa-book-buddy-b6e748d1380d.herokuapp.com/api/reservations/${reservationId}`,
          {
            headers: {
              'Content-Type': 'application/json',
              'Authorization': `Bearer ${loggedInToken}`,
            },
        }
            );
            console.log(response.data)
            navigate('/books')
    } catch (error) {
        console.error('Looks like we ran into an error returning this book:', error)
        setReturnError('Looks like we ran into an error returning this book. Please try your return again.')
    }
    }
            


        
    
    const logout = () => {
        window.localStorage.removeItem('token');
        setToken(null)
        setUser({})
        navigate('/')
    }
    if(!user.books){
        return null
    }
    
    return(
        <div>
            <h1>Account</h1>
            <button onClick={() => logout()}>Logout</button>
            <hr/>
            <div> 
            <h2>Look who is reading today: {user.firstname}</h2>
            <h4>Check Out My Cool Reading List:</h4>
            <ul>
                {
                checkOutBook.map((book) => (
                    <li key={book.id}>
                        <h4>{book.title}</h4>
                        <p>The Author: {book.author}</p>
                        <button onClick={() => handleReturn(book.id)}>Put Me Back On The Shelf!</button>
                    </li>
                    ))
                    }

                
                
              
            </ul>
            </div>
        </div>
    )
}

export default Account