"use client";

import About from "@/components/About";
import Start from "@/components/Start";
import Navbar from "@/components/Navbar";
import Skills from "../components/Skills";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <Start />
      <About />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </>
  );
}
