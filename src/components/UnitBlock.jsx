import React, { useState } from "react";
import { DetailsModal } from "./DetailsModal";

const colorArray = ["bg-green-500", "bg-red-500", "bg-white"];

export const UnitBlock = ({ data = [], name = "Empty" }) => {
  let emptyLength = 9 - data.length;
  if (emptyLength < 0) emptyLength = 0;
  const emptyArray = new Array(emptyLength).fill(undefined);
  const [modelDetailsData, setModelDetailsData] = useState([]);

  const [tooltipContent, setTooltipContent] = useState("");
  const [showTooltip, setShowTooltip] = useState(false);
  const [tooltipPosition, setTooltipPosition] = useState({ x: 0, y: 0 });

  const handleViewModal = (data) => {
    setModelDetailsData({ ...data });
  };
  const handleTooltip = (content, event) => {
    setTooltipContent(content);
    setShowTooltip(true);
    setTooltipPosition({ x: event.clientX, y: event.clientY });
  };

  const hideTooltip = () => {
    setShowTooltip(false);
  };

  return (
    <div className=" bg-blue-100  flex flex-col flex-grow hover:bg-blue-200 ease-in-out transition border-indigo-500 border-2 rounded-xl shadow-md">
      <div className=" text-center font-bold text-[17px] bg-indigo-500 rounded-t-md text-white">
        {name}
      </div>
      <div className="flex flex-grow flex-wrap  ">
        {data.map((value, index) => {
          return (
            <div
              className={`  h-14 lg:h-auto  xl:h-auto 2xl:h-auto flex w-1/3  p-1 hover:-translate-y-1 cursor-pointer   hover:scale-110 ease-in-out transition`}
              onClick={() => handleViewModal(value)}
              key={index}
              onMouseEnter={(event) => handleTooltip(value?.type, event)}
              onMouseLeave={hideTooltip}
            >
              <div
                className={` ${
                  value.status === "up"
                    ? colorArray[0]
                    : value.status === "down"
                    ? colorArray[1]
                    : colorArray[2]
                } text-[12px] break-words w-full flex  rounded-md shadow-md border justify-center items-center text-white `}
              >
                <div
                  className={`  break-words w-full h-full p-[1px] text-center`}
                >
                  <div> {value?.ip ? value?.ip : value?.host} </div>
                </div>
              </div>
            </div>
          );
        })}
        {showTooltip && (
          <div
            className=" fixed bg-slate-800 rounded-md text-white text-[14px] pl-2 pr-2 p-1"
            style={{
              top: tooltipPosition.y - 40,
              left: tooltipPosition.x - 25,
            }}
          >
            {tooltipContent}
          </div>
        )}
        <DetailsModal data={modelDetailsData} />
        {emptyArray.map((value, index) => {
          return (
            <div
              className={`h-14 lg:h-auto  xl:h-auto 2xl:h-auto flex w-1/3  p-1 hover:-translate-y-1   hover:scale-110 ease-in-out transition `}
              key={index}
            >
              <div
                className={`${colorArray[2]} flex flex-grow rounded-md shadow-md border`}
              ></div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
