import Navbar from "@/components/ui/Navbar";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Skills from "@/components/sections/Skills";
import Services from "@/components/sections/Services";
import Projects from "@/components/sections/Projects";
import Experience from "@/components/sections/Experience";
import Process from "@/components/sections/Process";
import Testimonials from "@/components/sections/Testimonials";
import Tools from "@/components/sections/Tools";
import CTA from "@/components/sections/CTA";
import Contact from "@/components/sections/Contact";
import Footer from "@/components/sections/Footer";

export default function Home() {
  return (
    <main className="bg-carbon min-h-screen selection:bg-accent-purple selection:text-white overflow-hidden">
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Services />
      <Projects />
      <Experience />
      <Process />
      <Testimonials />
      <Tools />
      <CTA />
      <Contact />
      <Footer />
    </main>
  );
}
