import React, { useEffect } from "react";
// import list from "../../public/list.json";
import Card from "./Card";
import { Link } from "react-router-dom";
import axios from "axios";
import { useState } from "react";

function Course() {
  const [book, setBook] = useState([]);

  useEffect(() => {
    const getBooks = async () => {
      try {
        const res = await axios.get("http://localhost:3000/book");
        setBook(res.data);
      } catch (error) {
        console.log(error);
      }
    };

    getBooks();
  }, []);

  return (
    <div>
      <div className="max-w-screen-2xl container mx-auto md:px-20 px-4 pt-24">
        <div className="text-center justify-center items-center  ">
          <h1 className="text-2xl md:text-4xl ">
            we're delight to have you{" "}
            <span className="text-pink-500">here:)</span>
          </h1>
          <p className="mt-12">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Pariatur
            reiciendis, nemo quibusdam, aspernatur consequuntur officiis
            suscipit, quia est ipsa facilis quidem ut nesciunt molestiae
            explicabo doloremque maxime numquam fugit similique? Veniam nemo
            tempora ea amet quidem ex earum corporis nesciunt distinctio, itaque
            nobis unde soluta placeat harum assumenda! Atque, dicta.
          </p>
          <div className="mt-12">
            <Link
              to="/"
              className="bg-pink-500 text-white px-4 py-2 rounded-full  hover:bg-pink-700 duration-300"
            >
              Back
            </Link>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mt-12">
          {book.map((item) => (
            <Card key={item.id} item={item} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Course;
