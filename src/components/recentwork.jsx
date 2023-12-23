import Frame1 from "../assets/works/Frame1.png";
import Frame2 from "../assets/works/Frame2.png";
import Frame3 from "../assets/works/Frame3.png";
import Frame4 from "../assets/works/Frame4.png";
import Button from "./mini/button";

const FrameScroller = () => {
  return (
    <div className="w-full overflow-hidden">
      <div className="md:animate-scrollmd sm:animate-scrollsm relative flex h-[400px] w-max animate-scroll flex-row items-center justify-evenly gap-x-6 overflow-hidden sm:h-[auto] sm:gap-3">
        <img
          className="h-full w-[360px] rounded object-cover sm:h-[200px] sm:w-[180px] md:h-[320px] md:w-[300px]"
          src={Frame1}
          alt="Frame1"
        />
        <img
          className="h-full w-[360px] rounded object-cover sm:h-[200px] sm:w-[180px] md:h-[320px] md:w-[300px]"
          src={Frame2}
          alt="Frame2"
        />
        <img
          className="h-full w-[360px] rounded object-cover sm:h-[200px] sm:w-[180px] md:h-[320px] md:w-[300px]"
          src={Frame3}
          alt="Frame3"
        />
        <img
          className="h-full w-[360px] rounded object-cover sm:h-[200px] sm:w-[180px] md:h-[320px] md:w-[300px]"
          src={Frame4}
          alt="Frame4"
        />
        <img
          className="h-full w-[360px] rounded object-cover sm:h-[200px] sm:w-[180px] md:h-[320px] md:w-[300px]"
          src={Frame1}
          alt="Frame1"
        />
        <img
          className="h-full w-[360px] rounded object-cover sm:h-[200px] sm:w-[180px] md:h-[320px] md:w-[300px]"
          src={Frame2}
          alt="Frame2"
        />
        <img
          className="h-full w-[360px] rounded object-cover sm:h-[200px] sm:w-[180px] md:h-[320px] md:w-[300px]"
          src={Frame3}
          alt="Frame3"
        />
        <img
          className="h-full w-[360px] rounded object-cover sm:h-[200px] sm:w-[180px] md:h-[320px] md:w-[300px]"
          src={Frame4}
          alt="Frame4"
        />
      </div>
    </div>
  );
};

export default function RecentWork() {
  return (
    <div className="flex h-[682px] w-full flex-col items-center justify-evenly sm:h-[482px] md:h-[582px]">
      <FrameScroller />
      <Button variant={"normal"} text="View recent work" />
    </div>
  );
}
