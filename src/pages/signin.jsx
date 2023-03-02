import React from "react";

const Signin = () => {
  return (
    <div className="m-auto w-[90%] my-5">
      <div className="flex gap-10 ">
        <div className="hidden lg:flex">
          <img
            src="https://www.merohomestay.com/static/media/authImage.92b5019c8b95feb7d986.png
"
            alt="house"
          />
        </div>
        <div className=" m-auto max-w-md ">
          <div className="text-[12px] flex justify-end gap-2 mt-12  ">
            <span className="text-neutral-400">Already have account ? </span>
            Login
          </div>
          <div>
            <h1 className="text-[28px] font-medium text-netral-900">
              Register
            </h1>
            <p className="text-neutral-500 text-[1.2rem] font-medium">
              Fill the form below to register.
            </p>
          </div>
          <form className="flex flex-col flex-wrap gap-3 mt-5 ">
            <div className="flex gap-6">
              <div className="flex flex-col gap-2 w-[50%]">
                <label for="firstName"> First name</label>
                <input
                  type="text"
                  name="firstName"
                  placeholder="Your first name"
                  className="border-[1px] border-grey rounded-[5px] outline-black outline-[1px] leading-10 px-3"
                />
              </div>
              <div className="flex gap-2 flex-col w-[50%]">
                <label for="lastName"> Last name</label>
                <input
                  type="text"
                  className="border-[1px] border-grey rounded-[5px] outline-black outline-[1px] leading-10 px-3"
                  name="lastName"
                  placeholder="Your last name"
                />
              </div>
            </div>
            <div className="flex  gap-2 flex-col">
              <label for="email">Email</label>
              <input
                type="email"
                className="border-[1px] border-grey rounded-[5px] outline-black outline-[1px] leading-10 px-3"
                name="email"
                placeholder="Your email"
              />
            </div>
            <div className="flex gap-2 flex-col">
              <label for="password">Password</label>
              <input
                type="password"
                name="password"
                placeholder="Your password"
                className="border-[1px] border-grey rounded-[5px] outline-black outline-[1px] leading-10 px-3"
              />
            </div>
            <div className="flex gap-2 flex-col">
              <label for="phone">Phone number</label>
              <input
                type="text"
                className="border-[1px] border-grey rounded-[5px] outline-black outline-[1px] leading-10 px-3"
                name="phone"
                placeholder="Your Phone number"
              />
            </div>
            <div className="flex gap-2 flex-col">
              <label for="address">Address</label>
              <input
                type="text"
                className="border-[1px] border-grey rounded-[5px] outline-black outline-[1px] leading-10 px-3"
                name="address"
                placeholder="Your Address"
              />
            </div>
            <div className="text-neutral-600 text-[12px] font-medium">
              By signing in, you're agree to our Terms & Condition and Privacy
              policy
            </div>
            <button className="bg-[rgba(27,63,49)] text-white rounded-[7px] py-3 ">
              Create Account
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Signin;
