export default () => {
  return (
    <header className="">
      <nav className="font-Satoshi flex h-20 flex-row items-center justify-around px-5 pt-5">
        <h3 className="h-8 w-24 text-center text-2xl font-bold leading-8 tracking-tighter text-gray-700">
          UniCraft
        </h3>
        <ul className="flex h-6 flex-row flex-wrap justify-between gap-12 text-lg font-medium tracking-tighter text-[#374151]">
          <li className="h-6 w-auto">How it works</li>
          <li className="h-6 w-auto">Pricing</li>
          <li className="h-6 w-auto">FAQ</li>
        </ul>
        <button className="h-12 w-36 rounded-lg border-2 border-[#4B5563] px-2 py-2 text-lg font-bold tracking-tighter text-[#4B5563] shadow-inner">
          Contact Us
        </button>
      </nav>
    </header>
  );
};
