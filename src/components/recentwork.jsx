import Frame1 from "../assets/works/Frame1.png";
import Frame2 from "../assets/works/Frame2.png";
import Frame3 from "../assets/works/Frame3.png";
import Frame4 from "../assets/works/Frame4.png";

const FrameScroller = () => {
  return (
    <div className="w-full overflow-hidden">
      <div className=" relative flex h-[400px] w-max animate-scroll flex-row items-center justify-evenly gap-x-6 overflow-hidden">
        <img
          className="h-full w-[360px] rounded object-cover"
          src={Frame1}
          alt="Frame1"
        />
        <img
          className="h-full w-[360px] rounded object-cover"
          src={Frame2}
          alt="Frame2"
        />
        <img
          className="h-full w-[360px] rounded object-cover"
          src={Frame3}
          alt="Frame3"
        />
        <img
          className="h-full w-[360px] rounded object-cover"
          src={Frame4}
          alt="Frame4"
        />
        <img
          className="h-full w-[360px] rounded object-cover"
          src={Frame1}
          alt="Frame1"
        />
        <img
          className="h-full w-[360px] rounded object-cover"
          src={Frame2}
          alt="Frame2"
        />
        <img
          className="h-full w-[360px] rounded object-cover"
          src={Frame3}
          alt="Frame3"
        />
        <img
          className="h-full w-[360px] rounded object-cover"
          src={Frame4}
          alt="Frame4"
        />
      </div>
    </div>
  );
};

export default function RecentWork() {
  return (
    <div className="flex h-[682px] w-full flex-col items-center justify-evenly">
      <FrameScroller />
      <button className=" h-auto w-auto rounded-lg border-[1px] border-gray-600 px-[51px] py-4 font-Satoshi text-[20px] font-bold tracking-[-0.48px] text-gray-600 shadow-inner">
        View recent work
      </button>
    </div>
  );
}
