import React from "react";
import waltonLogo from "../assets/images/Walton.png";

export const Navbar = () => {
  return (
    <div>
      <div className=" bg-blue-100  border-b-2 border-blue-300 p-2 flex w-full justify-between items-center">
        <div>
          <img
            src={waltonLogo}
            width={100}
            height={60}
            className=" mt-[-12px] mb-[-12px]"
            alt="React Image"
          />
        </div>
        <div
          className={`lg:text-2xl xl:text-2xl 2xl:text-2xl  md:text-xl sm:text-base font-extrabold text-center uppercase`}
        >
          <span className="text-[#09008cec]">Live</span>
          <span className="text-[#ff3131]"> Monitoring</span>

          <span className="text-[#09008cec]"> Dashboard</span>
        </div>
        <div className=" mr-10 flex">
          {/* <div className=" h-full mr-2 text-blue-900 text-[18px]"> Live</div> */}
          <span className="animate-ping  inline-flex w-6 h-6 rounded-full bg-red-700 opacity-100">
            <div className=" text-[10px] text-gray-200 flex justify-center items-center text-center pl-[2.5px]">
              {" "}
              Live
            </div>
          </span>
        </div>
      </div>
    </div>
  );
};
