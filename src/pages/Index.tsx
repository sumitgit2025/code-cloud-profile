
import Navbar from "@/components/Navbar";
import SectionHome from "@/components/SectionHome";
import SectionAbout from "@/components/SectionAbout";
import SectionSkills from "@/components/SectionSkills";
import SectionServices from "@/components/SectionServices";
import SectionProjects from "@/components/SectionProjects";
import SectionCertifications from "@/components/SectionCertifications";
import SectionContact from "@/components/SectionContact";

const Index = () => {
  return (
    <main className="bg-secondary min-h-screen">
      <Navbar />
      <SectionHome />
      <SectionAbout />
      <SectionSkills />
      <SectionServices />
      <SectionProjects />
      <SectionCertifications />
      <SectionContact />
      <footer className="py-8 text-center text-sm text-gray-500 bg-transparent">
        &copy; {new Date().getFullYear()} Sumit Kumar. All rights reserved.
      </footer>
    </main>
  );
};

export default Index;
