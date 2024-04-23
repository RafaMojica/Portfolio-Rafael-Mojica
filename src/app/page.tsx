// import About from "@/components/About";
import Navbar from "@/components/Navbar";
import Introduction from "@/components/Introduction";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Skills from "../components/Skills";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Introduction />
      <Experience />
      {/* <About /> */}
      <Projects />
      <Skills />
      <Footer />
    </main>
  );
}
