// import About from "@/components/About";
import Introduction from "@/components/Introduction";
import Navbar from "@/components/Navbar";
import Skills from "../components/Skills";
// import Projects from "@/components/Projects";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <Introduction />
      {/* <About /> */}
      {/* <Projects /> */}
      <Skills />
      <Footer />
    </>
  );
}
