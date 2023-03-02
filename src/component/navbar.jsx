import { Link, Navigate, useLocation } from "react-router-dom";
import Sidebar from "./sidebar";
import LinkData from "./sidebarData";
import "./nabbar.css";
import { useState } from "react";

const NavbarComponent = () => {
  const { pathname } = useLocation();
  const navbarData = LinkData;
  console.log(navbarData);

  const [sidebar, setSidebar] = useState(false);
  return (
    <>
      <div className="w-full bg-[rgba(27,63,49)]">
        <div className=" text-white  font-medium flex  justify-between items-center h-[80px]  w-[95%] m-auto">
          <div className="w-[30%]">
            <Link to={"/"}>
              <img
                src="	https://www.merohomestay.com/static/media/logo.166c6531161f7646df6183d11afa05c4.svg"
                className="h-[55px]"
              />
            </Link>
          </div>

          <div className=" hidden w-[30%] md:flex justify-center text-[1.4rem] ">
            {navbarData.map((e, index) => {
              return (
                <Link to={e.path} key={index}>
                  <span
                    className={`mx-2 ${
                      pathname === e.path ? " border-b-2  " : ""
                    }`}
                  >
                    {e.name}
                    {console.log(e.name)}
                  </span>
                </Link>
              );
            })}
          </div>
          <div className="w-[30%]">
            <div className="flex justify-end md:hidden">
              {" "}
              <button
                onClick={() => {
                  setSidebar(!sidebar);
                }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="w-6 h-6"
                  className="h-8"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                  />
                </svg>
              </button>
            </div>
            <div className="hidden md:flex justify-end  ">
              <button className="pr-5" onClick={() => Navigate("/register")}>
                Register
              </button>
              <button className="bg-white text-[rgba(27,63,49)] px-[24px] py-[10px] rounded-[25px]">
                Sign In
              </button>
            </div>
          </div>
        </div>
      </div>

      <div
        className={
          sidebar
            ? "fixed right-[0%] transition-[800ms]"
            : "fixed right-[-100%] transition-[800ms]"
        }
      >
        <div className=" md:hidden  h-full bg-[rgba(27,63,49)] w-[400px] top-0   active">
          {" "}
          {/* <div className="cross_icon flex justify-end mx-3">
            <button>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="h-9 text-white "
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div> */}
          <div className="flex flex-col gap-16 items-center">
            <div className="text-white flex flex-col gap-10 font-small text-[1.4rem] items-center justify-center mt-[3em]">
              {navbarData.map((e, index) => {
                return (
                  <Link to={e.path} key={index}>
                    <span className={`mx-2`}>
                      {e.name}
                      {console.log(e.name)}
                    </span>
                  </Link>
                );
              })}
            </div>
            <div className="flex justify-end gap-10 font-bold text-[1.2rem]">
              <button
                className=" text-white"
                onClick={() => Navigate("/register")}
              >
                Register
              </button>
              <button className="bg-white text-[rgba(27,63,49)] px-[24px] py-[10px] rounded-[25px]">
                Sign In
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default NavbarComponent;
