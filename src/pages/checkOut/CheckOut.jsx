import React from "react";
import img from "../../assets/images/banner/3.jpg";

const CheckOut = () => {
  return (
    <div>
      <div className="relative h-[300px] rounded-md my-10">
        <img src={img} alt="photo" className="h-[300px] w-full rounded-md" />
        <div className="absolute top-0 w-full bg-gradient-to-r rounded-md from-[#151515] to-[21, 21, 21, 0] h-full">
          <h2 className="absolute top-1/2 left-10 text-3xl text-white">
            Check Out
          </h2>
          <button className="absolute bottom-0 rounded-b-none rounded-t-full inset-x-[30rem]  btn text-white bg-[#FF3811]">
            Home/Checkout
          </button>
        </div>
      </div>
      {/* ------------------------------------ */}

      <div className="card-body bg-[#F3F3F3] rounded mt-20 mb-10">
        <form>
          <div className="md:flex gap-5">
            <div className="form-control md:w-1/2">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="text"
                placeholder="First Name"
                name="firstName"
                className="input input-bordered"
              />
            </div>
            <div className="form-control md:w-1/2">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="text"
                placeholder="Last Name"
                name="lastName"
                className="input input-bordered"
              />
            </div>
          </div>
          <div className="md:flex gap-5">
            <div className="form-control md:w-1/2">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="text"
                placeholder="Your Phone"
                name="phone"
                className="input input-bordered"
              />
            </div>
            <div className="form-control md:w-1/2">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="text"
                placeholder="Your Email"
                name="email"
                className="input input-bordered"
              />
            </div>
          </div>
          <textarea
            placeholder="Your Message"
            className="textarea textarea-bordered textarea-md w-full mt-6 h-[12rem]"
          ></textarea>
          <div className="form-control mt-6">
            <input
              type="submit"
              value="Order Confirm"
              className="btn bg-[#FF3811]"
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default CheckOut;
