import React from "react";
import { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";
import { AuthContext } from "../../providers/AuthProvider";

const CheckOut = () => {
  const services = useLoaderData();
  const {user} = useContext(AuthContext)
  console.log(user);
  const {title, img, price, _id} = services

  const handleSubmit = event => {
    event.preventDefault();

    const form = event.target
    const name = form.name.value;
    const email = user?.email;
    const date = form.date.value;
    const order = {
      customerName: name,
      serviceId: _id,
      service: title,
      img,
      email,
      date,
      price,
    }
    console.log(order);

    fetch('http://localhost:5000/checkout',{
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(order)
    })
    .then(res => res.json())
    .then(data => {
      console.log(data);
      if(data.insertedId){
        Swal.fire({
          title: 'Success!',
          text: 'Do you want to continue',
          icon: 'success',
          confirmButtonText: 'Done'
        })
      }
    })
  }


  
  return (
    <div>
      <div className="relative h-[300px] rounded-md my-10">
        <img src={img} alt="photo" className="h-[300px] w-full rounded-md" />
        <div className="absolute top-0 w-full bg-gradient-to-r rounded-md from-[#151515] to-[21, 21, 21, 0] h-full">
          <h2 className="absolute top-1/2 left-10 text-3xl text-white">
            {title}
          </h2>
          <button className="absolute bottom-0 rounded-b-none rounded-t-full left-1/4 right-1/4 md:inset-x-[30rem]  btn text-white bg-[#FF3811]">
            Home/Checkout
          </button>
        </div>
      </div>
      {/* ------------------------------------ */}

      <div className="card-body bg-[#F3F3F3] rounded mt-20 mb-10">
        <form onSubmit={handleSubmit}>
          <div className="md:flex gap-5">
            <div className="form-control md:w-1/2">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                type="text"
                defaultValue={user?.displayName}
                placeholder="name"
                name="name"
                className="input input-bordered"
              />
            </div>
            <div className="form-control md:w-1/2">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                defaultValue={user?.email}
                placeholder="email"
                name="lastName"
                className="input input-bordered"
              />
            </div>
          </div>
          <div className="md:flex gap-5">
            <div className="form-control md:w-1/2">
              <label className="label">
                <span className="label-text">Date</span>
              </label>
              <input
                type="date"
                placeholder="date"
                name="date"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control md:w-1/2">
              <label className="label">
                <span className="label-text">Price</span>
              </label>
              <input
                type="text"
                defaultValue={'$ ' + price}
                placeholder="price"
                name="price"
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
