import Twitter from "../assets/socialIcons/Twitter.svg";
import Linkedin from "../assets/socialIcons/Linkedin.svg";
import Facebook from "../assets/socialIcons/Facebook.svg";
import Github from "../assets/socialIcons/Github.svg";
import Finger from "../assets/socialIcons/Finger.svg";
import Browser from "../assets/socialIcons/Browser.svg";
import Button from "./mini/button";
export default function Footer() {
  return (
    <>
      <div className=" inline-flex max-h-fit w-full  flex-col items-center justify-start gap-[105px] bg-Gradiant bg-cover bg-no-repeat px-[10%] ">
        <div className="mt-[107px] flex h-auto w-full flex-col items-center gap-y-7 font-Satoshi">
          <h2 className="mx-auto w-11/12 break-words text-center font-Satoshi text-7xl font-black leading-[85px] text-gray-800 sm:text-[42px]">
            No long-term contracts.
            <br /> No catches. Simple.
          </h2>
          <p className=" mt-3 w-4/5 break-words text-center font-Satoshi text-xl font-medium text-gray-600">
            Start your 30-day free trial. Cancel anytime.
          </p>
          <Button text={"View Pricing"} variant={"dark"} />
        </div>

        {/* social icons */}

        <div className="flex w-full flex-col items-start justify-start border-t-2 border-gray-300 py-[32px]">
          <h4 className="w-96 text-2xl font-bold text-gray-700">UniCraft</h4>
          <p className="mt-3 w-96 text-lg font-medium text-gray-400">
            Design amazing digital experiences that
            <br />
            create more happy in the world.
          </p>
          <div className="mt-[32px] flex w-full flex-row justify-between sm:gap-10">
            <p className=" w-full font-['Inter'] text-base font-normal leading-normal text-gray-400">
              © 2077 Untitled UI. All rights reserved.
            </p>
            <div className="flex w-full flex-row justify-end gap-6 sm:flex-wrap">
              <a href="#">
                <img src={Twitter} alt="twitter" />
              </a>
              <a href="#">
                <img src={Linkedin} alt="Linkedin" />
              </a>
              <a href="#">
                <img src={Facebook} alt="Facebook" />
              </a>
              <a href="#">
                <img src={Github} alt="Github" />
              </a>
              <a href="#">
                <img src={Finger} alt="Finger" />
              </a>
              <a href="#">
                <img src={Browser} alt="Browser" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
