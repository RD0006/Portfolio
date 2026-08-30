const Navbar = () => {
  return (
    <nav
      id="navbar"
      className="fixed left-0 top-0 z-50 w-full border-b border-white/10 bg-[#090909]/70 px-12 py-5 backdrop-blur-md"
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between">
        <a
          href="#"
          className="text-lg font-bold tracking-tighter"
        >
          R.D.
        </a>

        <div className="flex items-center gap-8 text-sm">
          <a
            href="#about"
            className="nav-item text-blue-200 transition-colors duration-200 hover:text-blue-300 relative after:absolute after:-bottom-2 after:left-0 after:h-px after:w-0 after:bg-current after:transition-all hover:after:w-full"
          >
            ABOUT
          </a>

          <a
            href="#projects"
            className="nav-item text-rose-200 transition-colors duration-200 hover:text-rose-300 relative after:absolute after:-bottom-2 after:left-0 after:h-px after:w-0 after:bg-current after:transition-all hover:after:w-full"
          >
            PROJECTS
          </a>

          <a
            href="#skills"
            className="nav-item text-emerald-200 transition-colors duration-200 hover:text-emerald-300 relative after:absolute after:-bottom-2 after:left-0 after:h-px after:w-0 after:bg-current after:transition-all hover:after:w-full"
          >
            SKILLS
          </a>

          <a
            href="#contact"
            className="nav-item text-orange-200 transition-colors duration-200 hover:text-orange-300 relative after:absolute after:-bottom-2 after:left-0 after:h-px after:w-0 after:bg-current after:transition-all hover:after:w-full"
          >
            CONTACT
          </a>
        </div>

        <a
          href="#contact"
          className="nav-item rounded-full border border-cyan-300 px-4 py-2 text-xs tracking-widest transition-all duration-200 hover:border-cyan-600 hover:bg-cyan-600 hover:text-white relative after:absolute after:-bottom-2 after:left-0 after:h-px after:w-0 after:bg-current after:transition-all hover:after:w-full"
        >
          LET'S TALK
        </a>
      </div>
    </nav>
  );
};

export default Navbar;