
import React, { useRef, useState } from "react";

const SectionContact: React.FC = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const [sent, setSent] = useState(false);

  // Simple client-side submit, show toast or thank you if sent
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
    setTimeout(() => setSent(false), 4000);
    if (formRef.current) formRef.current.reset();
  };

  return (
    <section id="contact" className="max-w-3xl mx-auto py-20 px-4" style={{scrollMarginTop:70}}>
      <h2 className="text-3xl md:text-4xl font-bold text-navy mb-7">Contact</h2>
      <div className="bg-secondary rounded-xl shadow p-8 flex flex-col gap-6">
        <div>
          <p className="text-gray-700 mb-2">
            <span className="font-medium text-navy">Email:</span>{" "}
            <a href="mailto:sumitkumar918403@gmail.com" className="text-teal hover:underline">sumitkumar918403@gmail.com</a>
          </p>
          <p className="text-gray-700 mb-2">
            <span className="font-medium text-navy">Phone:</span>{" "}
            <a href="tel:+918667888878" className="text-teal hover:underline">+91-8667888878</a>
          </p>
          <p className="text-gray-700 mb-2">
            <span className="font-medium text-navy">LinkedIn:</span>{" "}
            <a href="https://linkedin.com/in/sumit-kumar-70a6a1259" className="text-teal hover:underline" target="_blank" rel="noopener noreferrer">linkedin.com/in/sumit-kumar-70a6a1259</a>
          </p>
          <p className="text-gray-700 mb-2">
            <span className="font-medium text-navy">GitHub:</span>{" "}
            <a href="https://github.com/sumitraj02" className="text-teal hover:underline" target="_blank" rel="noopener noreferrer">github.com/sumitraj02</a>
          </p>
          <p className="text-gray-700 mb-2">
            <span className="font-medium text-navy">Portfolio:</span>{" "}
            <a href="https://sumit.netlify.app" className="text-teal hover:underline" target="_blank" rel="noopener noreferrer">sumit.netlify.app</a>{" "} |{" "}
            <a href="https://sumitraj02.github.io" className="text-teal hover:underline" target="_blank" rel="noopener noreferrer">GitHub Pages</a>
          </p>
        </div>
        <form ref={formRef} onSubmit={handleSubmit} className="flex flex-col gap-4 mt-4">
          <input 
            type="text" 
            name="name"
            placeholder="Your Name"
            required
            className="border border-gray-300 rounded px-4 py-2 bg-white"
          />
          <input 
            type="email" 
            name="email"
            placeholder="Your Email"
            required
            className="border border-gray-300 rounded px-4 py-2 bg-white"
          />
          <textarea
            name="message"
            placeholder="Your Message"
            required
            rows={4}
            className="border border-gray-300 rounded px-4 py-2 bg-white"
          />
          <button
            type="submit"
            className="py-2 bg-teal text-white font-semibold rounded hover:bg-navy transition"
            disabled={sent}
          >
            {sent ? "Message Sent!" : "Send Message"}
          </button>
        </form>
      </div>
    </section>
  );
};

export default SectionContact;
