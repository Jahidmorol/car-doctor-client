import React from "react";
import { useEffect } from "react";
import { useContext } from "react";
import { useState } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import OrderReview from "./OrderReview";
import image from "../../assets/images/checkout/checkout.png";
import Swal from "sweetalert2";

const OrderRevews = () => {
  const { user } = useContext(AuthContext);
  const [orderReviews, setOrderReviews] = useState([]);
  console.log(orderReviews);

  const url = `http://localhost:5000/orderreviews?email=${user.email}`;
  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        // console.log(data);
        setOrderReviews(data);
      });
  }, [url]);

  const handleDelete = (_id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:5000/orderreviews/${_id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            if (data.deletedCount > 0) {
              Swal.fire("Deleted!", "Your file has been deleted.", "success");
              const remaing = orderReviews.filter(
                (orderR) => orderR._id !== _id
              );
              setOrderReviews(remaing);
            }
          });
      }
    });
  };

  return (
    <>
      <div className="relative h-[300px] rounded-md my-10">
        <img src={image} alt="photo" className="h-[300px] w-full rounded-md" />
        <div className="absolute top-0 w-full bg-gradient-to-r rounded-md from-[#151515] to-[21, 21, 21, 0] h-full">
          <div className="absolute top-1/2 left-10">
            <h2 className="text-3xl text-white">Order Reviews</h2>
            <p className="text-[#FF3811] text-sm mt-1">Home-Product Details</p>
          </div>
        </div>
      </div>
      {/* ------------------------------------ */}
      <div className="overflow-x-auto w-full my-20">
        <table className="table w-full">
          {orderReviews.map((orderReview) => (
            <OrderReview
              key={orderReview._id}
              orderReview={orderReview}
              handleDelete={handleDelete}
            ></OrderReview>
          ))}
        </table>
      </div>
    </>
  );
};

export default OrderRevews;
