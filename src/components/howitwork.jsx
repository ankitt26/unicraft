import Workdetail from "./mini/workdetail";
import RightCurveArrow from "../assets/right_curve_arrow.svg";
export default function HowItWork() {
  return (
    <div className="mx-auto flex h-[535px] w-11/12 flex-col items-center justify-center gap-3 rounded-3xl border border-gray-200">
      <h2 className=" ligh text-5xl font-bold leading-[60px] text-gray-800">
        How it works
      </h2>
      <p className="break-words text-xl font-medium text-gray-600">
        Premium designs, unlimited requests, super fast delivery, for one flat
        monthly fee.
      </p>
      <div className="mt-[60px] flex w-[95%] flex-row items-center justify-between">
        <Workdetail
          num={1}
          head="Subscribe"
          para="Subscribe to a plan & you’ll get an instant access to your private Slack channel."
        />
        <img
          src={RightCurveArrow}
          alt="Right curve arrow"
          className="relative bottom-8"
        />
        <Workdetail
          num={2}
          head="Request"
          para="Submit any number of requests. We'll work through them, one at a time, ensuring consistent updates every 24-48 hours."
        />
        <img
          src={RightCurveArrow}
          alt="Right curve arrow"
          className="relative bottom-8"
        />
        <Workdetail
          num={3}
          head="Revise"
          para="Need changes? We guarantee unlimited revisions until you're 200% satisfied."
        />
      </div>
    </div>
  );
}
