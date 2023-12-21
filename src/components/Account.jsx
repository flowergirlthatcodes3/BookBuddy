
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
             <h2 className="user-read">Look who is reading today: {user.firstname}</h2>
        
            <button  onClick={() => logout()}className="logout">Logout</button>
            <hr/>
            <div> 
           
            <h4 className="acc2">Check Out My Cool Reading List:</h4>
            <ul className="acc3">
                {
                checkOutBook.map((book) => (
                    <li key={book.id}>
                        <h4 className="title">{book.title}</h4>
                        <p className="auth">The Author: {book.author}</p>
                        <div className="return">
                        <button onClick={() => handleReturn(book.id)} className="return-but">Put Me Back On The Shelf!</button>
                        </div>
                       
                    </li>
                    ))
                    }

                
                
              
            </ul>
            </div>
        </div>
    )
}

export default Account