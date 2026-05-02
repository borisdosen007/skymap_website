import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import HowToOrder from "@/components/HowToOrder";
import Stats from "@/components/Stats";
import Gallery from "@/components/Gallery";
import Quote from "@/components/Quote";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <HowToOrder />
        <Stats />
        <Gallery />
        <Quote />
      </main>
      <Footer />
    </>
  );
}
