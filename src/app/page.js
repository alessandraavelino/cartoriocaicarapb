import About from "./about/About";
import Contact from "./contact/Contact";
import Cta from "./cta/Cta";
import Footer from "./footer/Footer";
import Header from "./header/Header";
import Hero from "./hero/Hero";
import Services from "./services/Services";

export default function Home() {
  return (
    <div>
      <Hero />
      {/* <Services /> */}
      <About />
      <Cta />
      <Contact />
      <Footer />
      
    </div>
  );
}
