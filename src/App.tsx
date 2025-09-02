import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import ProductShowcase from "./components/ProductShowcase";
import FinancingSection from "./components/FinancingSection";
import CertificationSection from "./components/CertificationSection";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <HeroSection />
        <ProductShowcase />
        <FinancingSection />
        <CertificationSection />
      </main>
      <Footer />
    </div>
  );
}