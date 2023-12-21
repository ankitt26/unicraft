export default function Footer() {
  return (
    <div className=" bg-Gradiant inline-flex max-h-fit  w-full flex-col items-center justify-start gap-[105px] bg-cover bg-no-repeat ">
      <div className="mb-10 mt-[195px] flex h-auto w-full flex-col items-center gap-y-7 font-Satoshi">
        <h2 className="mx-auto w-11/12 break-words text-center font-Satoshi text-7xl font-black leading-[85px] text-gray-800">
          No long-term contracts.
          <br /> No catches. Simple.
        </h2>
        <p className=" w-4/5 break-words text-center font-Satoshi text-xl font-medium text-gray-600">
          Start your 30-day free trial. Cancel anytime.
        </p>
        <button
          className="break-words rounded-lg bg-gray-800 px-[51px] py-[16px] font-Satoshi text-xl font-bold text-gray-50 shadow-md"
          text="View Pricing"
        >
          View Pricing
        </button>
      </div>
    </div>
  );
}
