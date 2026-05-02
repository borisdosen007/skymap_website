import AnnouncementBar from "@/components/AnnouncementBar";
import Header from "@/components/Header";
import SplashScreen from "@/components/SplashScreen";
import FloatingButton from "@/components/FloatingButton";
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
      <SplashScreen />
      <AnnouncementBar />
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
      <FloatingButton />
    </>
  );
}
