import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  const sectionRef = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 75%",
          toggleActions: "play none none reverse",
        },
      });

      tl.from(".about-title", {
        x: -80,
        opacity: 0,
        duration: 0.9,
        ease: "power3.out",
      })
        .from(
          ".about-heading",
          {
            y: 60,
            opacity: 0,
            duration: 0.8,
            ease: "power3.out",
          },
          "-=0.5"
        )
        .from(
          ".about-subheading",
          {
            y: 40,
            opacity: 0,
            duration: 0.7,
            ease: "power3.out",
          },
          "-=0.45"
        )
        .from(
          ".about-text",
          {
            y: 30,
            opacity: 0,
            duration: 0.7,
            ease: "power3.out",
          },
          "-=0.4"
        );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
    ref={sectionRef}
      id="about"
      className="mx-auto max-w-7xl px-6 py-32 px-12 py-48"
    >
      <div className="grid gap-12 grid-cols-12">

        <div className="col-span-4">
          <h2 className="about-title text-5xl font-bold tracking-tight text-7xl">
            About
          </h2>
        </div>

        <div className="col-span-8">

          <h2 className="about-heading text-3xl font-medium text-3xl leading-12">
            I am an MCA student by role and a developer by heart. I enjoy working with anything and everything that involves writing code.
            <br />
            <span className="about-subheading text-neutral-500 text-3xl">
              I have developed full stack web applications and software. My sub-domain is AI/ML and Deep Learning.
            </span>
          </h2>

          <p className="about-text mt-8 leading-7 text-neutral-500">
            Development, for me, is not just a dream job; it has been a passion since I first started coding seven years ago. I have developed a number of personal projects since, in all my domains and sub-domains. I try to challenge myself with new tools and techniques while developing these. Each and every project gives me a ground to learn, build, and grow. 
          </p>

        </div>
      </div>
    </section>
  );
};

export default About;