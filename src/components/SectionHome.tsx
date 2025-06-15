
import React from "react";
import AnimatedTyping from "./AnimatedTyping";

const SectionHome: React.FC = () => {
  return (
    <section
      id="home"
      className="relative min-h-[92vh] flex flex-col md:flex-row items-center justify-between max-w-screen-2xl mx-auto px-4 md:px-8 py-10 md:py-28 transition-all duration-500"
      style={{ zIndex: 1 }}
    >
      {/* BACKGROUND gradient/glow for hero */}
      <div
        className="absolute left-1/2 -translate-x-1/2 top-[-80px] w-[600px] h-[380px] md:w-[740px] md:h-[410px] rounded-full bg-gradient-to-tr from-teal/25 via-navy/20 to-accent/10 blur-2xl opacity-70 pointer-events-none select-none"
        aria-hidden
        style={{ filter: "blur(60px)", zIndex: 0 }}
      />
      {/* Left: Hero Text in Glass Card */}
      <div
        className="flex-1 flex flex-col gap-8 max-w-xl relative z-10"
      >
        <div className="bg-white/75 dark:bg-navy/85 backdrop-blur-md rounded-2xl shadow-xl px-7 md:px-10 py-8 md:py-12 border border-gray-200 dark:border-navy/60 animate-fade-in-up"
        >
          <h1 className="text-4xl md:text-6xl font-bold text-navy dark:text-white leading-tight drop-shadow-lg">
            Building digital <br />
            products, brands, and
            <br />
            <span className="inline-flex items-center gap-3 mt-2 text-teal font-extrabold">
              <svg width="38" height="38" className="inline -ml-1" viewBox="0 0 20 20" fill="none">
                <circle cx="10" cy="10" r="10" fill="#171A68" />
                <text x="10" y="15.5" textAnchor="middle" fill="#FFF" fontSize="15" fontWeight="700">S</text>
              </svg>
              <AnimatedTyping
                text="experience."
                className="text-4xl md:text-6xl font-extrabold tracking-tight text-teal drop-shadow-lg bg-gradient-to-r from-teal to-accent inline-block"
                speed={27}
              />
            </span>
          </h1>
          <p className="mt-3 text-gray-700 dark:text-gray-200 text-lg font-medium max-w-lg backdrop-blur-sm animate-fade-in-up">
            <span className="font-semibold text-navy dark:text-accent">Sumit Kumar</span> is a
            <span className="font-bold text-teal"> Java Developer</span>, <span className="font-bold text-accent">Full-Stack Web Developer</span>, and <span className="font-bold text-navy dark:text-teal">Cloud Enthusiast</span>.<br />
            Specializing in Java, Spring Boot, ReactJS, AWS, GCP, solving real-world problems through scalable software.
          </p>
          {/* CTA Buttons */}
          <div className="flex flex-wrap gap-4 mt-4 animate-fade-in-up">
            <a
              href="/lovable-uploads/resume.pdf"
              download
              className="px-7 py-2.5 rounded-xl font-bold text-white bg-gradient-to-tr from-navy via-teal to-accent shadow-lg hover:brightness-110 hover:scale-105 transition-all duration-200 focus-visible:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2"
            >
              View Resume
            </a>
            <a
              href="#contact"
              className="px-7 py-2.5 rounded-xl font-bold text-navy bg-gradient-to-tr from-accent via-orange-200 to-white shadow-lg hover:bg-amber-400/80 hover:scale-105 transition-all duration-200 focus-visible:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2"
            >
              Contact Me
            </a>
          </div>
        </div>
      </div>
      {/* Right: Profile Pic with Glow */}
      <div className="mt-12 md:mt-0 flex flex-1 justify-end items-end max-w-md relative z-10">
        {/* GLASS/gradient bg behind pic */}
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 md:left-auto md:right-10 md:top-44 w-[320px] h-[350px] md:w-[400px] md:h-[440px] rounded-[2.5rem] bg-gradient-to-br from-teal/40 via-accent/15 to-white/0 blur-2xl opacity-70 pointer-events-none select-none" style={{ zIndex: 0 }} />
        <img
          src="/lovable-uploads/d929bc44-15ce-4aa8-b642-70be8b649f7b.png"
          alt="Sumit Kumar profile"
          className="relative rounded-3xl shadow-2xl object-cover border-4 border-navy w-[300px] h-[340px] md:w-[380px] md:h-[440px] bg-secondary z-10 hover:shadow-[0_12px_48px_rgba(23,26,104,0.22)] transition-shadow duration-300"
        />
        {/* Decorative SVG lines/circles */}
        <div className="absolute top-0 left-0 w-full h-full pointer-events-none select-none" aria-hidden>
          <svg width="100%" height="100%" className="opacity-25">
            {
              Array.from({ length: 18 }).map((_, i) =>
                <rect
                  key={i}
                  x={Math.random() * 380}
                  y={Math.random() * 440}
                  width={Math.random() * 4 + 2}
                  height={Math.random() * 32 + 10}
                  rx="2"
                  fill={i % 2 ? "#11B2A5" : "#FFA94D"}
                  opacity={0.15 + (Math.random() * 0.7)}
                />
              )
            }
          </svg>
        </div>
      </div>
    </section>
  );
};

export default SectionHome;
