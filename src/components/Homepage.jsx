import { Link} from "react-router-dom";
import Books from "./Books";
import SearchBar from "./SearchBar";

const Homepage = ({books}) => {
  const user = window.localStorage.getItem('token')
  return (
    <div>

     <h2 className="home">Check out our library!</h2> 
     <div>
     { 
     user ? <h4> Welcome back BookBuddy!</h4> : null}
     </div>
      <div className='search-bar'>
    <h2 className="searchfav"> Search Your Favorite Book Here:</h2>
    <SearchBar books={books} />
    </div>
      <button className="linkallb">
      <Link className="linkallb" to='/books'>
        All Books!
      </Link>
      </button>

      
    </div>
  );
};

export default Homepage;
