import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { Menu } from "./components/Menu";
import { GymSection } from "./components/GymSection";
import { DesignProcess } from "./components/DesignProcess";
import { Footer } from "./components/Footer";

export default function App() {
  return (
    <div className="min-h-screen bg-black">
      <Header />
      <Hero />
      <Menu />
      <GymSection />
      <DesignProcess />
      <Footer />
    </div>
  );
}