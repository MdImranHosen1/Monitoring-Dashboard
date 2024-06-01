import React, { useEffect, useState } from "react";
import closeButton from "../assets/images/closeButton.png";

export const DetailsModal = ({ data = {} }) => {
  const [viewDetails, setViewDetails] = useState(false);

  const toggleView = () => {
    setViewDetails(!viewDetails);
  };

  useEffect(() => {
    if (data.length !== 0) {
      toggleView();
    }
  }, [data]);
  return (
    viewDetails && (
      <div>
        <div className=" z-50 w-full h-screen fixed left-0 top-0 center flex items-center justify-center">
          <div
            className={`w-auto h-auto bg-blue-50 border-2 ${
              data.status === "up" ? "border-green-600" : "border-red-600"
            } border-b-8  rounded-lg p-5`}
          >
            <div className=" flex  justify-between w-full mb-3">
              <div className=" text-[22px]">Name: {data?.name}</div>
              <div onClick={toggleView}>
                <img
                  width={40}
                  src={closeButton}
                  alt=""
                  className=" cursor-pointer hover:rotate-90 hover:bg-red-300 rounded-xl hover:opacity-80 ease-in-out transition-all"
                />
              </div>
            </div>
            <hr className=" mb-2"></hr>
            <div className=" text-[22px]">
              <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
                <table className="w-full text-[16px] text-left rtl:text-right text-gray-600">
                  <tbody>
                    <tr className="bg-white border-b">
                      <th
                        scope="row"
                        className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap"
                      >
                        TYPE:
                      </th>
                      <td className="px-6 py-4">{data?.type}</td>
                    </tr>
                    <tr className="bg-white border-b">
                      <th
                        scope="row"
                        className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap"
                      >
                        NAME:
                      </th>
                      <td className="px-6 py-4">{data?.name}</td>
                    </tr>
                    <tr className="bg-white border-b">
                      <th
                        scope="row"
                        className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap"
                      >
                        DESC:
                      </th>
                      <td className="px-6 py-4">{data?.desc}</td>
                    </tr>
                    <tr className="bg-white border-b">
                      <th
                        scope="row"
                        className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap"
                      >
                        {data?.ip ? "IP:" : "HOST:"}
                      </th>
                      <td className="px-6 py-4">
                        {data?.ip ? data?.ip : data?.host}
                      </td>
                    </tr>
                    <tr className="bg-white border-b">
                      <th
                        scope="row"
                        className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap"
                      >
                        RELATION:
                      </th>
                      <td className="px-6 py-4"> {data?.relation}</td>
                    </tr>
                    <tr className="bg-white">
                      <th
                        scope="row"
                        className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap "
                      >
                        STATUS:
                      </th>
                      <td className="px-6 py-4"> {data?.status}</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
        <div
          className="z-40 top-0 backdrop-blur-sm  left-0 h-screen w-full flex fixed"
          onClick={toggleView}
        ></div>
      </div>
    )
  );
};
