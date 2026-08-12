import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Marquee from "./components/Marquee";
import About from "./components/About";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

gsap.registerPlugin(ScrollTrigger);

import React from 'react'

const App = () => {
  const main = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const heroTimeline = gsap.timeline();

      heroTimeline
        .from("#navbar", {
          x: -50,
          opacity: 0,
          duration: 0.8,
          ease: "power3.out",
        })
        .from(".hero-line", {
          x: -50,
          opacity: 0,
          duration: 0.5,
          stagger: 0.15,
          ease: "power4.out",
        }, "-=0.2")
        .from(".hero-description", {
          y: 30,
          opacity: 0,
          duration: 0.8,
          ease: "power3.out",
        }, "-=0.5")
        .from(".hero-button", {
          y: 20,
          opacity: 0,
          duration: 0.6,
          ease: "power3.out",
        }, "-=0.3");

      gsap.utils.toArray(".reveal").forEach((element) => {
        gsap.from(element, {
          y: 80,
          opacity: 0,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: element,
            start: "top 85%",
          },
        });
      });

      gsap.utils.toArray(".project-card").forEach((card, index) => {
        gsap.from(card, {
          y: 100,
          opacity: 0,
          duration: 1,
          delay: index * 0.1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: card,
            start: "top 85%",
          },
        });
      });

      gsap.to(".marquee-text", {
        xPercent: -30,
        ease: "none",
        scrollTrigger: {
          trigger: ".marquee",
          start: "top bottom",
          end: "bottom top",
          scrub: 1,
        },
      });

      gsap.to(".orb", {
        y: 40,
        x: 20,
        duration: 3,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });

      ScrollTrigger.refresh();

    }, main);

    return () => ctx.revert();
  }, []);

  
  return (
    <main
      ref={main}
      className="min-h-screen bg-[#090909] text-white"
    >
      <Navbar />
      <Hero />
      <Marquee />
      <About />
      <Projects />
      <Skills />
      <Contact />
      <Footer />
    </main>
  );
}

export default App
