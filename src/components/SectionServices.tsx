
import React from "react";
import { Database, Zap, Cloud, BrainCog } from "lucide-react";

const SERVICES = [
  {
    icon: Database,
    title: "Backend Development",
    desc: "Robust backend services with Java Spring Boot, scalable APIs, secure data, effective integrations."
  },
  {
    icon: Zap,
    title: "Full-Stack Web Development",
    desc: "End-to-end web applications using ReactJS for seamless UI and Spring Boot for efficient backend."
  },
  {
    icon: Cloud,
    title: "Cloud-Based Application Development",
    desc: "Deploying and integrating applications with AWS and Google Cloud, scalable, reliable, secure."
  },
  {
    icon: BrainCog,
    title: "Problem Solving & Algorithm Design",
    desc: "Logical problem-solving, algorithm design for hackathons, interviews, and complex software systems."
  }
];

const SectionServices: React.FC = () => (
  <section id="services" className="max-w-5xl mx-auto py-20 px-4" style={{scrollMarginTop:70}}>
    <h2 className="text-3xl md:text-4xl font-bold text-navy mb-8">Services</h2>
    <div className="grid sm:grid-cols-2 gap-7">
      {SERVICES.map(service => (
        <div className="bg-white rounded-xl shadow-md p-6 flex flex-col items-start hover:shadow-xl transition-shadow" key={service.title}>
          <service.icon className="w-9 h-9 text-accent mb-3" />
          <h3 className="text-lg font-bold text-navy mb-1">{service.title}</h3>
          <p className="text-gray-700">{service.desc}</p>
        </div>
      ))}
    </div>
  </section>
);

export default SectionServices;
