import React from "react";
import { Link } from "react-router-dom";

const ServiceCard = ({ service }) => {
  // console.log(service);
  const { img, title, price, _id } = service;
  // console.log(_id);
  return (
    <div className="card md:w-96 bg-base-100 shadow-xl">
      <figure className="px-10 pt-10 h-60">
        <img src={img} alt="Shoes" className="rounded-xl" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{title}</h2>
        <div className="flex items-center justify-between">
          <p className="text-[#FF3811]">Price: {price}</p>
          <div className="card-actions">
            <Link to={`/checkout/${_id}`}><button className=" btn btn-circle bg-[#FF3811]">Buy Now</button></Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
