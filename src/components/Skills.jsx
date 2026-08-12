import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const skills = [
  "HTML",
  "JavaScript",
  "TypeScript",
  "React",
  "Tailwind CSS",
  "GSAP",
  "Java",
  "Python",
  "C++",
  "TensorFlow",
  "Keras",
  "Pandas",
  "MySQL",
  "Git",
];

const Skills = () => {
  const sectionRef = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(".skill", {
        y: 50,
        opacity: 0,
      },
      {
        y: 0,
        opacity: 1,
        duration: 0.7,
        stagger: 0.1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".skills-container",
          toggleActions: "play reverse play reverse",
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="skills"
      className="bg-[#0e0e0e] py-10 px-12"
    >
      <div className="mx-auto max-w-7xl">

        <div className="reveal mb-16">

          <h2 className="font-bold tracking-tight text-7xl">
            Tech Stack
          </h2>
        </div>

        <div className="skills-container grid border-l border-t border-white/10 grid-cols-4">

          {skills.map((skill) => (
            <div
              key={skill}
              className="skill border-b border-r border-white/10 transition duration-300 p-12"
            >
              <span className="text-lg font-medium">
                {skill}
              </span>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
};

export default Skills;