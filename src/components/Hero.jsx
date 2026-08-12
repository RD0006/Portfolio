const Hero = () => {
  return (
    <section className="relative flex min-h-screen items-center px-6 pt-24 px-12">

      <div className="orb absolute right-[10%] top-[25%] h-48 w-48 rounded-full bg-white/5 blur-3xl h-80 w-80" />

      <div className="relative mx-auto w-full max-w-7xl">

        <h1>
          <span className="hero-line block text-neutral-500 font-black text-[5vw]">
            Hello, World!
          </span>

          <span className="hero-line block font-black text-[6vw]">
            I'm Radhika Diwan.
          </span>
        </h1>
      </div>
    </section>
  );
};

export default Hero;