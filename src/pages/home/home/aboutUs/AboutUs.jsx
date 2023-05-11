import React from "react";
import person from '../../../../assets/images/about_us/person.jpg'
import parts from '../../../../assets/images/about_us/parts.jpg'

const AboutUs = () => {
  return (
    <div className="card md:card-side bg-base-100 shadow-xl my-20">
      <figure className="md:w-1/2 m-5">
        <div className="relative">
        <img
          src={person}
          alt="Movie"
          className="h-[400px] w-[400px] "
        />
        <img src={parts} alt="photo" className="absolute md:h-60 w-60 bottom-0 right-0 md:right-20 border-8 border-white rounded"/>
        </div>
      </figure>
      <div className="card-body md:w-1/2">
        <h4 className="text-[#FF3811] font-bold">About us</h4>
        <h2 className="card-title font-bold text-3xl mb-5">We are qualified <br/> & of experience <br/> in this field</h2>
        <p className="mb-5">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. </p>
        <p>the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. </p>
        <button className="btn bg-[#FF3811] me-5 mt-5 max-w-[10rem]">Discover More</button>
      </div>
    </div>
  );
};

export default AboutUs;
