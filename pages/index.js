import Head from "next/head";
import About from "../components/About";
import Start from "../components/Start";
import Navbar from "../components/Navbar";
import Skills from "../components/Skills";
import Projects from "../components/Projects";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

export default function Home() {

  return (
    <>
      <Head>
        <title>Portafolio | Rafael Mojica</title>
        <meta name="description" content="Portafolio Rafael Mojica" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
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
