const Navbar = () => {
  return (
    <nav id="navbar" className="fixed left-0 top-0 z-50 w-full border-b border-white/10 bg-[#090909]/70 py-5 backdrop-blur-md px-12 mx-auto flex max-w-7xl items-center justify-between">
        <a
          href="#"
          className="text-lg font-bold tracking-tighter"
        >
          R.D.
        </a>

        <div className="items-center gap-8 text-sm flex">
          <a href="#about" className="nav-item transition text-blue-200 hover:text-blue-300">
            ABOUT
          </a>

          <a
            href="#projects"
            className="nav-item transition text-rose-200 hover:text-rose-300"
          >
            PROJECTS
          </a>

          <a
            href="#skills"
            className="nav-item transition text-emerald-200 hover:text-emerald-300"
          >
            SKILLS
          </a>

          <a
            href="#contact"
            className="nav-item transition text-orange-200 hover:text-orange-300"
          >
            CONTACT
          </a>
        </div> 

        <a
          href="#contact"
          className="nav-item rounded-full border border-cyan-300 px-4 py-2 text-xs tracking-widest transition hover:border-cyan-600 hover:bg-cyan-600 hover:text-white"
        >
          LET'S TALK
        </a>

    </nav>
  );
};

export default Navbar;