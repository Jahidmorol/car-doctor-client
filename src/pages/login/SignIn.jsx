import React from "react";
import signin from '../../assets/images/login/login.svg'

const SignIn = () => {
  return (
    <div className="hero min-h-[32rem] rounded mt-10 bg-base-200">
      <div className="hero-content md:gap-8 flex-col lg:flex-row">
        <div className="text-center lg:text-left md:w-1/2">
          <img src={signin} alt="login" />
        </div>
        <div className="card flex-shrink-0 max-w-sm shadow-2xl bg-base-100 md:w-1/2">
          <div className="card-body">
            <h1 className="text-3xl font-bold text-center">Login now!</h1>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="text"
                placeholder="email"
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="text"
                placeholder="password"
                className="input input-bordered"
              />
              <label className="label">
                <a href="#" className="label-text-alt link link-hover">
                  Forgot password?
                </a>
              </label>
            </div>
            <div className="form-control mt-6">
              <button className="btn bg-[#FF3811]">Login</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
