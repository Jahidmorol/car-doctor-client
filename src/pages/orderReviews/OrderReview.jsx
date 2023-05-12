import React from "react";

const OrderReview = ({ orderReview, handleDelete, handlePending }) => {
  const { img, service, price, date, _id, status } = orderReview;
  console.log(status);
  return (
    <tbody>
      <tr>
        <th>
          <button onClick={() => handleDelete(_id)} className="btn btn-circle">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </th>
        <td>
          <div className="flex items-center space-x-3">
            <div className="avatar">
              <div className="rounded-md h-24 w-24">
                <img src={img} alt="Avatar Tailwind CSS Component" />
              </div>
            </div>
            <div>
              <h2 className="font-bold">{service}</h2>
              {/* <div className="text-sm opacity-50">United States</div> */}
            </div>
          </div>
        </td>
        <td>$ {price}</td>
        <td>{date}</td>
        <th>
          {status === "Approved" ? (
            <span className="btn btn-xs bg-[#29B170]">Approved</span>
          ) : (
            <button
              onClick={() => handlePending(_id)}
              className="btn btn-xs bg-[#FF3811]"
            >
              Pending
            </button>
          )}
        </th>
      </tr>
    </tbody>
  );
};

export default OrderReview;
