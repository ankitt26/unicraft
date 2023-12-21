import { FaqAnswers } from "./mini/FaqAnswers";

export default function FAQ() {
  return (
    <div className=" mb-[135px] max-h-fit w-full px-8 py-[74px]">
      <div className="flex flex-col items-center justify-start gap-[64px]">
        <div className="flex max-w-[768px] flex-col items-center justify-start">
          <h2 className="w-auto break-words text-center text-[58px] font-bold text-gray-800">
            Frequently asked questions
          </h2>
          <p className="text-center text-xl font-medium text-gray-500">
            Everything you need to know about the product and billing.
          </p>
        </div>
        <div className="flex w-full max-w-[768px] flex-col items-center justify-start gap-8">
          <FaqAnswers />
        </div>
      </div>
    </div>
  );
}
