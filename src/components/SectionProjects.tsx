
import React from "react";
import { Github } from "lucide-react";

const PROJECTS = [
  {
    name: "DocFusion",
    desc: "Document Generation Platform (Java Spring Boot, MySQL, ReactJS, Role-based Access)",
    tech: ["Spring Boot", "MySQL", "ReactJS"],
    img: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b", // Placeholder
    github: "#",
  },
  {
    name: "Multi-Person Face Recognition System",
    desc: "Face detection & recognition app (Python, OpenCV, CNN, GUI).",
    tech: ["Python", "OpenCV", "CNN"],
    img: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6",
    github: "#",
  },
  {
    name: "TransformoDocs",
    desc: "Document Digitization Tool (Python, Tesseract OCR, PDF Export).",
    tech: ["Python", "Tesseract", "PDF"],
    img: "https://images.unsplash.com/photo-1501854140801-50d01698950b",
    github: "#",
  },
  {
    name: "Prakriti Nishedh",
    desc: "Environmental Pollution Monitoring Platform (Spring Boot, ReactJS, GCP, Carbon Analysis)",
    tech: ["Spring Boot", "ReactJS", "GCP"],
    img: "https://images.unsplash.com/photo-1506744038136-46273834b3fb",
    github: "#",
  },
];

const SectionProjects: React.FC = () => (
  <section id="projects" className="max-w-6xl mx-auto py-20 px-4" style={{scrollMarginTop:70}}>
    <h2 className="text-3xl md:text-4xl font-bold text-navy mb-7">Projects & Portfolio</h2>
    <div className="grid sm:grid-cols-2 xl:grid-cols-2 gap-8">
      {PROJECTS.map((proj, idx) => (
        <div key={proj.name} className="bg-white shadow rounded-xl overflow-hidden hover:scale-[1.03] transition-transform flex flex-col gap-0">
          <img src={proj.img} alt={proj.name} className="w-full h-48 object-cover"/>
          <div className="p-5 flex-1 flex flex-col">
            <h3 className="text-xl font-bold text-navy mb-2">{proj.name}</h3>
            <p className="text-gray-700 mb-2">{proj.desc}</p>
            <div className="flex flex-wrap gap-2 mb-4">
              {proj.tech.map(tag => (
                <span className="bg-secondary text-navy px-3 py-1 rounded text-xs font-semibold" key={tag}>{tag}</span>
              ))}
            </div>
            <a href={proj.github} className="inline-flex items-center text-sm text-teal hover:underline self-start">
              <Github className="inline w-4 h-4 mr-1" /> View on GitHub
            </a>
          </div>
        </div>
      ))}
    </div>
  </section>
);

export default SectionProjects;
