import useReveal from "../hooks/useReveal";
import Hero from "../components/Hero";
import Services from "../components/Services";
import Skills from "../components/Skills";
import Projects from "../components/Projects";
import About from "../components/About";
import Contact from "../components/Contact";

export default function Home() {
  useReveal();

  return (
    <>
      <Hero />
      <Services />
      <Skills />
      <Projects />
      <About />
      <Contact />
    </>
  );
}