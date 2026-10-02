import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import HomeSections from "@/components/HomeSections";
import Insights from "@/components/Insights";
import HomeContact from "@/components/HomeContact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar solid />
      <main className="flex-1 luare-home">
        <Hero />
        <HomeSections />
        <Insights />
        <HomeContact />
      </main>
      <Footer />
    </>
  );
}
