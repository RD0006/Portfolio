const Marquee = () => {
  return (
    <section className="marquee overflow-hidden border-y border-white/10 py-8">
      <div className="marquee-text flex w-max gap-10 whitespace-nowrap">
        <span className="text-2xl font-black tracking-tighter text-white/10 text-8xl">
          • Student • Programmer • Technophile • Student • Programmer • Technophile
        </span>
      </div>
    </section>
  );
};

export default Marquee;