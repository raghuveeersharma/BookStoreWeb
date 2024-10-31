import React from "react";

function Card(props) {
  return (
    <>
      <div className="mt-4 my-3 p-3">
      <div className="card bg-base-100 w-92 shadow-xl  hover:shadow-2xl hover:scale-105 dark:bg-slate-900 dark:text-white dark:border duration-200">
        <figure>
          <img
            src={props.item.image}
            alt="Shoes"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">
            {props.item.name}
            <div className="badge badge-secondary">{props.item.category}</div>
          </h2>
          <p>{props.item.title}</p>
          <div className="card-actions justify-between">
            <div className="badge badge-outline">${props.item.price}</div>
            <div className="cursor-pointer px-2 py-1 border border-black rounded-full hover:border-pink-500 hover:bg-pink-500 hover:text-white duration-200">Buy now</div>
          </div>
        </div>
      </div>
      </div>
      
    </>
  );
}

export default Card;
