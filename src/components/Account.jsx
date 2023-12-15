
import axios from "axios"
import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"


const Account = ({user, setUser, setToken, token, books }) => {
    const [checkedOutBook, setCheckedOutBook] = useState([])
    const [returnError, setReturnError] = useState(null)
    const navigate = useNavigate()

    useEffect(() => {
        const fetchCheckOutBook = async () => {
            const loggedInToken = window.localStorage.getItem('token')
            try {
                const response = await axios.get('https://fsa-book-buddy-b6e748d1380d.herokuapp.com/api/reservations',
                {
                  headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${loggedInToken}`,
                  },
                }
                );
                setCheckedOutBook(response.data.reservation)
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
            <button onClick={() => {logout()}}>Logout</button>
            <hr/>
            <h2>Look who's reading today: {user.firstname}</h2>
            <h4>This could be a good place to show checked out books...</h4>

            
            
           
        </div>
    )
}

export default Account