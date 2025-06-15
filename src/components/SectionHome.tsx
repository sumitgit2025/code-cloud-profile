
import React from "react";
import AnimatedTyping from "./AnimatedTyping";

const SectionHome: React.FC = () => {
  return (
    <section
      id="home"
      className="min-h-[88vh] flex flex-col md:flex-row items-center justify-between max-w-screen-2xl mx-auto px-8 py-10 md:py-24"
    >
        {/* Left: Hero Text */}
        <div className="flex-1 flex flex-col gap-8 max-w-xl"
          style={{zIndex: 2}}
        >
          <h1 className="text-4xl md:text-6xl font-bold text-navy leading-tight animate-fade-in-up">
            Building digital <br />products, brands, and
            <br />
            <span className="inline-flex items-center gap-2 mt-2 text-teal font-bold animate-fade-in-up">
              <svg width="32" height="32" className="inline" viewBox="0 0 20 20" fill="none"><circle cx="10" cy="10" r="10" fill="#171A68" /><text x="10" y="15.5" textAnchor="middle" fill="#FFF" fontSize="15" fontWeight="700">S</text></svg>
              <AnimatedTyping text="experience." className="text-4xl md:text-6xl font-extrabold text-teal" speed={36} />
            </span>
          </h1>
          <p className="text-gray-700 mt-2 text-lg animate-fade-in-up max-w-lg">
            <span className="font-semibold text-navy">Sumit Kumar</span> is a
            <span className="font-bold"> Java Developer</span>, <span className="font-bold">Full-Stack Web Developer</span>, and <span className="font-bold">Cloud Enthusiast</span>.
            <br />
            Specializing in Java, Spring Boot, ReactJS, AWS, GCP, solving real-world problems through scalable software.
          </p>
          {/* CTA Buttons */}
          <div className="flex flex-wrap gap-4 mt-2 animate-fade-in-up">
            <a
              href="/lovable-uploads/resume.pdf"
              download
              className="px-6 py-2 rounded-lg bg-teal text-white font-bold shadow hover:bg-navy transition"
            >View Resume</a>
            <a
              href="#contact"
              className="px-6 py-2 rounded-lg bg-accent text-navy font-bold shadow hover:bg-amber-400 transition"
            >Contact Me</a>
          </div>
        </div>
        {/* Right: Profile Pic */}
        <div className="mt-8 md:mt-0 flex flex-1 justify-end items-end max-w-md relative">
          <img
            src="/lovable-uploads/d929bc44-15ce-4aa8-b642-70be8b649f7b.png"
            alt="Sumit Kumar profile"
            className="rounded-2xl shadow-lg object-cover border-2 border-navy w-[340px] h-[400px] md:w-[420px] md:h-[480px] bg-secondary"
            style={{zIndex: 1}}
          />
          {/* Background confetti or lines (style only for fun) */}
          <div className="absolute top-0 left-0 w-full h-full pointer-events-none" aria-hidden>
            {/* Scatter lines/circles */}
            <svg width="100%" height="100%" className="opacity-25" >
              {
                Array.from({length: 19}).map((_,i) =>
                  <rect
                    key={i}
                    x={Math.random()*420}
                    y={Math.random()*400}
                    width={Math.random()*4+2}
                    height={Math.random()*25+8}
                    rx="2"
                    fill={i % 3 === 0 ? "#171A68" : "#11B2A5"}
                    opacity={0.3 + (Math.random() * 0.6)}
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
