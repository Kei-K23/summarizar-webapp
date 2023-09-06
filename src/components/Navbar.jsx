const Navbar = () => {
  return (
    <header className="text-black">
      <nav className="flex justify-between items-center lg:px-16 xl:px-28 2xl:px-36">
        <a
          href="/"
          className="text-black text-2xl font-bold transition-colors hover:bg-clip-text hover:text-transparent hover:bg-gradient-to-r hover:from-yellow-600 hover:via-orange-400 hover:to-yellow-700"
        >
          <i className="fa-brands fa-connectdevelop"></i> SummA
        </a>
        <a
          href="https://github.com/Kei-K23"
          target="_blank"
          rel="noreferrer"
          aria-label="follow me"
          className="flex items-center justify-center gap-2  bg-slate-800 hover:bg-slate-700 py-2 px-4 rounded-2xl text-white cursor-pointer "
        >
          <i className="fa-brands fa-github text-3xl"></i>
          <span className="text-xl">Kei-K</span>
        </a>
      </nav>
    </header>
  );
};

export default Navbar;
