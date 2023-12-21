import React from "react";
import Slogo from "../assets/Slogo.svg";
import Sisyphus from "../assets/Sisyphus.svg";
import Avatar from "../assets/Avatar.svg";

export default function Quote() {
  return (
    <div className="mt-[115px] h-[568px] w-full bg-gray-50 px-[90px] py-24">
      <div className="flex flex-col items-center justify-between gap-10 ">
        <div className="flex w-[140.83px] flex-row items-center justify-between">
          <img src={Slogo} alt="logo" />
          <img src={Sisyphus} alt="sisyphus" />
        </div>
        <h2 className="self-stretch text-center text-5xl font-bold leading-[60px] text-gray-800">
          We’ve been with unicraft to kick start every new project and can’t
          imagine working without it.
        </h2>
        <div className=" inline-flex flex-col items-center justify-start">
          <img src={Avatar} alt="avatar" className="mb-4" />
          <div className="mb-1 text-center text-lg font-medium leading-7 text-gray-900">
            Candice Wu
          </div>
          <div className="text-center text-base font-normal leading-normal text-gray-500">
            Product Manager, Sisyphus
          </div>
        </div>
      </div>
    </div>
  );
}
