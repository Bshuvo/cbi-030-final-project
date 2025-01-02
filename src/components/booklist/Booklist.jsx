import React, { useEffect, useState } from "react";
import pic from "../booklist/book.jpg";

const Booklist = ({ book }) => {
  const [srcbook, setSrcbook] = useState("");

  useEffect(() => {
    setSrcbook(book.split(" ").join("+"));
  }, [book]);

  const [allbooks, setAllbooks] = useState([]);

  useEffect(() => {
    if (srcbook) { 
      fetch(`https://openlibrary.org/search.json?q=${srcbook}`)
        .then((res) => res.json())
        .then((books) => setAllbooks(books.docs));
    }
  }, [srcbook]);

  return (
    <div>
      <div className="">
        {allbooks.length > 0 ? (
          allbooks.map((elem, idx) => (
            <div
              key={idx}
              className="rounded-md bg-lime-200 m-5 p-4 flex items-center gap-3"
            >
              <img className="w-28 rounded" src={pic} alt="Book cover" />
              <div className="p-2">
                <h1>{elem.title}</h1>
                <h1>{elem.author_name ? elem.author_name.join(", ") : "Unknown Author"}</h1>
                <h1>{elem.first_publish_year}</h1>
              </div>
              <h1>Rating</h1>
            </div>
          ))
        ) : (
          <p>No books found.</p>
        )}
      </div>
    </div>
  );
};

export default Booklist;
