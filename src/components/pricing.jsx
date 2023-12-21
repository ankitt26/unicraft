import Plans from "./mini/plans";
export default function Pricing() {
  return (
    <div className="h-auto w-full px-[128px] py-[80px]">
      <div className="flex flex-col items-center justify-between gap-3">
        <h2 className="w-auto break-words text-center text-[58px] font-bold text-gray-800">
          Pricing made for collaborative support.
        </h2>
        <p className="max-w-[685px] text-center text-xl font-medium text-gray-500">
          Plain is made for your entire company. Only pay for users that
          actually message customers. Everyone else is free, forever.
        </p>
        <div className="mt-[48px] flex w-full flex-row flex-wrap items-center justify-evenly gap-6">
          <Plans mode="normal" access={2} />
          <Plans mode="dark" access={5} />
          <Plans mode="normal" access={8} />
        </div>
      </div>
    </div>
  );
}
