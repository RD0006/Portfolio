import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Contact = () => {
  const sectionRef = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
          toggleActions: "restart none restart none",
        },
      });

      tl.from(".contact-title", {
        y: 50,
        opacity: 0,
        duration: 0.5,
        ease: "power3.out",
      })
        .from(
          ".contact-message",
          {
            y: 30,
            opacity: 0,
            duration: 0.5,
            ease: "power3.out",
          },
          "-=0.4"
        )
        .from(
          ".contact-link",
          {
            y: 25,
            opacity: 0,
            duration: 0.5,
            stagger: 0.12,
            ease: "power3.out",
          },
          "-=0.3"
        );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="contact"
      className="mx-auto max-w-7xl px-12 py-48"
    >
      <h2 className="contact-title font-bold tracking-tight text-7xl">
        Contact Me
      </h2>

      <div className="mt-16 flex justify-between gap-8 border-t border-white/10 pt-8 flex-row items-center">

        <div className="contact-message text-xl text-neutral-50">
          Have an Idea? Let's Bring It to Life!
        </div>

        <div className="flex flex-wrap gap-x-6 gap-y-3 uppercase tracking-widest text-neutral-500">
          <a
            href="mailto:radhikadn2022@gmail.com"
            className="contact-link transition-colors duration-300 text-orange-200 after:absolute after:-bottom-2 after:left-0 after:h-px after:w-0 after:bg-current after:transition-all hover:after:w-full"
          >
            Email
          </a>

          <a
            href="https://www.linkedin.com/in/radhika-diwan"
            target="_blank"
            rel="noopener noreferrer"
            className="contact-link transition-colors duration-300 text-blue-200 after:absolute after:-bottom-2 after:left-0 after:h-px after:w-0 after:bg-current after:transition-all hover:after:w-full"
          >
            LinkedIn
          </a>

          <a
            href="https://github.com/RD0006"
            target="_blank"
            rel="noopener noreferrer"
            className="contact-link transition-colors duration-300 text-green-200 after:absolute after:-bottom-2 after:left-0 after:h-px after:w-0 after:bg-current after:transition-all hover:after:w-full"
          >
            GitHub
          </a>
        </div>

      </div>
    </section>
  );
};

export default Contact;