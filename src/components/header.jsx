export default () => {
  return (
    <header className=" mt-5 font-Satoshi text-gray-700">
      <nav className="flex h-20 flex-row items-center justify-between px-24">
        <h3 className="h-[32px] w-[91px] text-center text-2xl font-bold leading-8 tracking-[-0.48px] text-gray-700">
          UniCraft
        </h3>
        <ul className=" flex h-6 flex-row flex-wrap justify-between gap-12 text-lg font-medium tracking-[-0.48px] text-gray-700">
          <li className="h-6 w-auto">How it works</li>
          <li className="h-6 w-auto">Pricing</li>
          <li className="h-6 w-auto">FAQ</li>
        </ul>
        <button className="h-12 w-36 rounded-lg border-[1px] border-[#4B5563] px-2 py-2 text-lg font-bold tracking-[-0.48px] text-gray-600 shadow-inner">
          Contact us
        </button>
      </nav>
    </header>
  );
};
