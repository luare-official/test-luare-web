import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import HomeSections from "@/components/HomeSections";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar heroStyle />
      <main className="flex-1 luare-home luare-home-v6">
        <Hero />
        <HomeSections />
      </main>
      <Footer />
    </>
  );
}
