
import React from "react";

const SectionAbout: React.FC = () => (
  <section id="about" className="max-w-4xl mx-auto py-20 px-4" style={{scrollMarginTop:70}}>
    <h2 className="text-3xl md:text-4xl font-bold text-navy mb-5">About</h2>
    <p className="text-lg leading-relaxed text-gray-700 mb-6">
      I am a passionate Java Developer and Full-Stack Engineer currently pursuing my B.Tech in Information Technology at <span className="font-bold text-navy">G.L Bajaj Institute of Technology and Management (2022–2026)</span>. 
      My expertise lies in backend development with Java Spring Boot, full-stack applications, cloud computing, and problem-solving.
      <br />
      With active participation in hackathons and coding communities, I continuously enhance my skills to build impactful solutions.
    </p>
    <div className="bg-secondary rounded-xl p-6 flex flex-col md:flex-row gap-6 shadow">
      <div className="flex-1">
        <p className="font-semibold text-navy">Educational Background:</p>
        <ul className="list-disc ml-5 text-gray-700">
          <li>B.Tech (IT), <span className="font-medium">G.L Bajaj Institute of Technology and Management</span> <span className="text-xs text-gray-500">(2022–2026)</span></li>
          <li>12th &amp; 10th - <span className="font-medium">J.N.K.T +2 School, Khagaria</span></li>
        </ul>
      </div>
      <div className="flex-1">
        <p className="font-semibold text-navy">Active Roles:</p>
        <ul className="list-disc ml-5 text-gray-700">
          <li>Technical Core Member, <span className="font-medium">CodeSpace Club</span></li>
          <li>Participant, Hackfest Hackathon (Apr 2024)</li>
        </ul>
      </div>
    </div>
  </section>
);

export default SectionAbout;
