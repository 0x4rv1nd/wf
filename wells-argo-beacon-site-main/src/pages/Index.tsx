import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import ProductCards from "@/components/ProductCards";
import PromoBanner from "@/components/PromoBanner";
import InfoSection from "@/components/InfoSection";

const Index = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      
      <main className="flex-grow">
        <Hero />
        <ProductCards />
        <PromoBanner />
        <InfoSection />
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
