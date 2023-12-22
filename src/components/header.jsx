export default () => {
  return (
    <header className=" mt-5 w-full font-Satoshi text-gray-700">
      <nav className="mx-auto flex h-20 w-[90%] flex-row items-center justify-between">
        <h3 className="h-[32px] w-[91px] text-center text-2xl font-bold leading-8 tracking-[-0.48px] text-gray-700">
          <a href="">UniCraft</a>
        </h3>
        <ul className=" flex h-6 flex-row flex-wrap justify-center gap-12 text-lg font-medium tracking-[-0.48px] text-gray-700">
          <li className="h-6 w-auto hover:text-gray-500">
            <a href="#howitwork">How it works</a>
          </li>
          <li className="h-6 w-auto hover:text-gray-500">
            <a href="#pricing">Pricing</a>
          </li>
          <li className="h-6 w-auto hover:text-gray-500">
            <a href="#faq">FAQ</a>
          </li>
        </ul>
        <button className="h-12 w-36 rounded-lg border-[1px] border-[#4B5563] px-2 py-2 text-lg font-bold tracking-[-0.48px] text-gray-600 shadow-inner hover:text-gray-500">
          Contact us
        </button>
      </nav>
    </header>
  );
};
