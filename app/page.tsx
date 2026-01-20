import Navbar from "@/components/ui/Navbar";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Skills from "@/components/sections/Skills";
import Projects from "@/components/sections/Projects";
import WhyChooseMe from "@/components/sections/WhyChooseMe";
import Services from "@/components/sections/Services"; // Added
import Testimonials from "@/components/sections/Testimonials"; // Added
import Contact from "@/components/sections/Contact";

export default function Home() {
  return (
    <main className="bg-navy-900 min-h-screen selection:bg-green selection:text-navy-900 overflow-hidden">
      <Navbar />
      <Hero />
      <About />
      <WhyChooseMe />
      <Services />
      <Projects />
      <Testimonials />
      <Skills />
      <Contact />
    </main>
  );
}
