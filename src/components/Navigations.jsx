import { Link } from "react-router-dom"

const Navigations = ({user,books,}) => {
    
    
    return (
        <nav>
            <Link to='/books'>Let's Read!</Link>
            <Link to='/about'>About Us!</Link>
            
            {
                user.email ? (
                    <span>
                        <Link to="/account">My Account!</Link>
                    </span>
                
                ) : (
                    
                    <span>
                        <Link to="/login">Login</Link>
                        <Link to='/register'>Register</Link>
                    </span>
                )
            }
        </nav>
    )
}

export default Navigations