import React, { useEffect } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { useState } from "react";
import Card from "./Card";
import axios from "axios";

function Freebook() {
  const [book, setBook] = useState([]);
  useEffect(() => {
    const getBooks = async () => {
      try {
        const res = await axios.get("http://localhost:3000/book");
        const data = res.data.filter((book) => book.category === "free");
        setBook(data);
        console.log(data);
      } catch (error) {
        console.log(error);
      }
    };
    getBooks();
  }, []);
  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <>
      <div className="max-w-screen-2xl container mx-auto md:px-20 px-4">
        <h1 className="font-semibold text-xl pb-2">free offerd books</h1>
        <div>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fugit illo
            voluptates odio neque rerum. Deleniti ab incidunt expedita, hic
            quisquam eaque nobis reiciendis alias aliquam et ipsum deserunt
            culpa dolorem.
          </p>
        </div>

        <div>
          <Slider {...settings}>
            {book.map((item) => (
              <Card item={item} key={item._id} />
            ))}
          </Slider>
        </div>
      </div>
    </>
  );
}

export default Freebook;
