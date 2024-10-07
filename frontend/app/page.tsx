import Image from "next/image";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";

export default function Home() {
  return (
    <div className="min-h-screen bg-black flex flex-col">
  <Navbar />
  <HeroSection></HeroSection>
</div>


  )
}
