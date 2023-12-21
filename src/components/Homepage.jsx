import { Link} from "react-router-dom";
import Books from "./Books";
import SearchBar from "./SearchBar";

const Homepage = ({ books }) => {
  return (
    <div>

      <h2 className="home">Welcome to our library!</h2>
      <div className='search-bar'>
    <h2 className="searchfav"> Search Your Favorite Book Here:</h2>
    <SearchBar books={books} />
    </div>
      <button className="linkallb">
      <Link className="linkallb" to={"/books"}>
        All Books!
      </Link>
      </button>

      
    </div>
  );
};

export default Homepage;
