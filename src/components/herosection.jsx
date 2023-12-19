import React from "react";
import Zapier from "../assets/companies/Zapier.svg";
import Spotify from "../assets/companies/Spotify.svg";
import Zoom from "../assets/companies/Zoom.svg";
import Slack from "../assets/companies/Slack.svg";
import Amazon from "../assets/companies/Amazon.svg";
import Adobe from "../assets/companies/Adobe.svg";

export const HeroSection = () => {
  return (
    <>
      <div className="mb-10 mt-24 flex h-auto w-full flex-col items-center gap-y-7 font-Satoshi">
        <h2 className="mx-auto w-4/5 break-words text-center font-Satoshi text-7xl font-black leading-[85px] text-gray-800">
          Elevate Your Presence with Seamless Design and Innovation.
        </h2>
        <p className=" w-4/5 break-words text-center font-Satoshi text-xl font-medium text-gray-600">
          From strategic planning to digital presence, we&#39;re your dedicated
          partner in achieving solo success.
        </p>
        <button
          className="break-words rounded-lg bg-gray-800 px-[51px] py-[16px] font-Satoshi text-xl font-bold text-gray-50 shadow-md"
          text="View Pricing"
        >
          View Pricing
        </button>
        <div className="mt-28 flex w-4/5 flex-col gap-3">
          <div className=" break-words text-center text-sm font-medium text-gray-400">
            Trusted By 250+ Companies
          </div>
          <div className=" w-mv flex flex-row justify-evenly py-4">
            <img className="" src={Zapier} alt="Zapier" />
            <img className="" src={Spotify} alt="Spotify" />
            <img className="" src={Zoom} alt="Zoom" />
            <img className="" src={Slack} alt="Slack" />
            <img className="" src={Amazon} alt="Amazon" />
            <img className="" src={Adobe} alt="Adobe" />
          </div>
        </div>
      </div>
    </>
  );
};
