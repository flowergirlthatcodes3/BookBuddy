import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import { Link, useParams } from "react-router-dom";

const Books = ({ books }) => {
  const params = useParams();
  const id = params.id * 1;

  return (
    <ul className="allBooks">
      {books.map((book) => {
        return (
          <>
            <li key={book.id}>
              <Link to={`/books/${book.id}`}>{book.title} </Link>
              <br />
            </li>
            <br />
          </>
        );
      })}
    </ul>
  );
};

export default Books;
