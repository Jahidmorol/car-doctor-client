import React from "react";
import img1 from "../../../../assets/images/banner/1.jpg";
import img2 from "../../../../assets/images/banner/2.jpg";
import img3 from "../../../../assets/images/banner/3.jpg";
import img4 from "../../../../assets/images/banner/4.jpg";
import img5 from "../../../../assets/images/banner/5.jpg";
import img6 from "../../../../assets/images/banner/6.jpg";

const Banner = () => {
  return (
    <div className="carousel h-[500px] md:h-full w-full my-10">
      <div id="slide1" className="carousel-item w-full relative">
        <img src={img1} className="w-full h-[500px] md:h-[600px] rounded-lg" />
        <div className="absolute h-[500px] md:h-full w-full flex-col rounded-lg bg-gradient-to-r from-[#151515] to-[21, 21, 21, 0]">
          <div className=" space-y-5 absolute top-1/4 md:top-1/3 left-2 md:left-20">
            <h2 className="text-5xl font-bold text-white">
              Affordable <br /> Price For Car <br /> Servicing
            </h2>
            <p className="max-w-md text-white">
              There are many variations of passages of available, but the
              majority have suffered alteration in some form
            </p>
            <button className="btn bg-[#FF3811] me-5">Discover More</button>
            <button className="btn btn-outline text-white hover:bg-[#FF3811] border-[#FF3811]">
              Latest Projec
            </button>
          </div>
        </div>
        <div className="absolute flex justify-between md:justify-end transform right-10 bottom-2 md:bottom-10 gap-5">
          <a href="#slide6" className="btn btn-circle">
            ❮
          </a>
          <a
            href="#slide2"
            className="btn btn-circle bg-[#FF3811] hover:bg-orange-600"
          >
            ❯
          </a>
        </div>
      </div>
      {/* -------------------------------- */}
      <div id="slide2" className="carousel-item w-full relative">
        <img src={img2} className="w-full h-[500px] md:h-[600px] rounded-lg" />
        <div className="absolute h-[500px] md:h-full w-full flex-col rounded-lg bg-gradient-to-r from-[#151515] to-[21, 21, 21, 0]">
          <div className=" space-y-5 absolute top-1/4 md:top-1/3 left-2 md:left-20">
            <h2 className="text-5xl font-bold text-white">
              Affordable <br /> Price For Car <br /> Servicing
            </h2>
            <p className="max-w-md text-white">
              There are many variations of passages of available, but the
              majority have suffered alteration in some form
            </p>
            <button className="btn bg-[#FF3811] me-5">Discover More</button>
            <button className="btn btn-outline text-white hover:bg-[#FF3811] border-[#FF3811]">
              Latest Projec
            </button>
          </div>
        </div>
        <div className="absolute flex justify-between md:justify-end transform right-10 bottom-2 md:bottom-10 gap-5">
          <a href="#slide1" className="btn btn-circle">
            ❮
          </a>
          <a
            href="#slide3"
            className="btn btn-circle bg-[#FF3811] hover:bg-orange-600"
          >
            ❯
          </a>
        </div>
      </div>
      {/* -------------------------------- */}
      <div id="slide3" className="carousel-item w-full relative">
        <img src={img3} className="w-full h-[500px] md:h-[600px] rounded-lg" />
        <div className="absolute h-[500px] md:h-full w-full flex-col rounded-lg bg-gradient-to-r from-[#151515] to-[21, 21, 21, 0]">
          <div className=" space-y-5 absolute top-1/4 md:top-1/3 left-2 md:left-20">
            <h2 className="text-5xl font-bold text-white">
              Affordable <br /> Price For Car <br /> Servicing
            </h2>
            <p className="max-w-md text-white">
              There are many variations of passages of available, but the
              majority have suffered alteration in some form
            </p>
            <button className="btn bg-[#FF3811] me-5">Discover More</button>
            <button className="btn btn-outline text-white hover:bg-[#FF3811] border-[#FF3811]">
              Latest Projec
            </button>
          </div>
        </div>
        <div className="absolute flex justify-between md:justify-end transform right-10 bottom-2 md:bottom-10 gap-5">
          <a href="#slide2" className="btn btn-circle">
            ❮
          </a>
          <a
            href="#slide4"
            className="btn btn-circle bg-[#FF3811] hover:bg-orange-600"
          >
            ❯
          </a>
        </div>
      </div>
      {/* -------------------------------- */}
      <div id="slide4" className="carousel-item w-full relative">
        <img src={img4} className="w-full h-[500px] md:h-[600px] rounded-lg" />
        <div className="absolute h-[500px] md:h-full w-full flex-col rounded-lg bg-gradient-to-r from-[#151515] to-[21, 21, 21, 0]">
          <div className=" space-y-5 absolute top-1/4 md:top-1/3 left-2 md:left-20">
            <h2 className="text-5xl font-bold text-white">
              Affordable <br /> Price For Car <br /> Servicing
            </h2>
            <p className="max-w-md text-white">
              There are many variations of passages of available, but the
              majority have suffered alteration in some form
            </p>
            <button className="btn bg-[#FF3811] me-5">Discover More</button>
            <button className="btn btn-outline text-white hover:bg-[#FF3811] border-[#FF3811]">
              Latest Projec
            </button>
          </div>
        </div>
        <div className="absolute flex justify-between md:justify-end transform right-10 bottom-2 md:bottom-10 gap-5">
          <a href="#slide3" className="btn btn-circle">
            ❮
          </a>
          <a
            href="#slide5"
            className="btn btn-circle bg-[#FF3811] hover:bg-orange-600"
          >
            ❯
          </a>
        </div>
      </div>
      {/* -------------------------------- */}
      <div id="slide5" className="carousel-item w-full relative">
        <img src={img5} className="w-full h-[500px] md:h-[600px] rounded-lg" />
        <div className="absolute h-[500px] md:h-full w-full flex-col rounded-lg bg-gradient-to-r from-[#151515] to-[21, 21, 21, 0]">
          <div className=" space-y-5 absolute top-1/4 md:top-1/3 left-2 md:left-20">
            <h2 className="text-5xl font-bold text-white">
              Affordable <br /> Price For Car <br /> Servicing
            </h2>
            <p className="max-w-md text-white">
              There are many variations of passages of available, but the
              majority have suffered alteration in some form
            </p>
            <button className="btn bg-[#FF3811] me-5">Discover More</button>
            <button className="btn btn-outline text-white hover:bg-[#FF3811] border-[#FF3811]">
              Latest Projec
            </button>
          </div>
        </div>
        <div className="absolute flex justify-between md:justify-end transform right-10 bottom-2 md:bottom-10 gap-5">
          <a href="#slide4" className="btn btn-circle">
            ❮
          </a>
          <a
            href="#slide6"
            className="btn btn-circle bg-[#FF3811] hover:bg-orange-600"
          >
            ❯
          </a>
        </div>
      </div>
      {/* -------------------------------- */}
      <div id="slide6" className="carousel-item w-full relative">
        <img src={img6} className="w-full h-[500px] md:h-[600px] rounded-lg" />
        <div className="absolute h-[500px] md:h-full w-full flex-col rounded-lg bg-gradient-to-r from-[#151515] to-[21, 21, 21, 0]">
          <div className=" space-y-5 absolute top-1/4 md:top-1/3 left-2 md:left-20">
            <h2 className="text-5xl font-bold text-white">
              Affordable <br /> Price For Car <br /> Servicing
            </h2>
            <p className="max-w-md text-white">
              There are many variations of passages of available, but the
              majority have suffered alteration in some form
            </p>
            <button className="btn bg-[#FF3811] me-5">Discover More</button>
            <button className="btn btn-outline text-white hover:bg-[#FF3811] border-[#FF3811]">
              Latest Projec
            </button>
          </div>
        </div>
        <div className="absolute flex justify-between md:justify-end transform right-10 bottom-2 md:bottom-10 gap-5">
          <a href="#slide5" className="btn btn-circle">
            ❮
          </a>
          <a
            href="#slide1"
            className="btn btn-circle bg-[#FF3811] hover:bg-orange-600"
          >
            ❯
          </a>
        </div>
      </div>
      {/* -------------------------------- */}
    </div>
  );
};

export default Banner;
