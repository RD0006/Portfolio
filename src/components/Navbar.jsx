const Navbar = () => {
  return (
    <nav id="navbar" className="fixed left-0 top-0 z-50 w-full border-b border-white/10 bg-[#090909]/70 px-6 py-5 backdrop-blur-md px-12 mx-auto flex max-w-7xl items-center justify-between">
        <a
          href="#"
          className="text-lg font-bold tracking-tighter"
        >
          R.D.
        </a>

        <div className="items-center gap-8 text-sm text-neutral-400 flex">
          <a href="#about" className="nav-item transition hover:text-white">
            ABOUT
          </a>

          <a
            href="#projects"
            className="nav-item transition hover:text-white"
          >
            WORKS
          </a>

          <a
            href="#skills"
            className="nav-item transition hover:text-white"
          >
            SKILLS
          </a>

          <a
            href="#contact"
            className="nav-item transition hover:text-white"
          >
            CONTACT
          </a>
        </div> 

        <a
          href="#contact"
          className="nav-item rounded-full border border-white/20 px-4 py-2 text-xs tracking-widest transition hover:bg-white hover:text-black"
        >
          LET'S TALK
        </a>

    </nav>
  );
};

export default Navbar;