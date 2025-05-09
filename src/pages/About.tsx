import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Info } from "lucide-react";

const About = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow container mx-auto px-4 py-8">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-3xl font-bold mb-8 text-wells-navy flex items-center gap-2">
            <Info className="text-wells-red" />
            About Wells Argo
          </h1>
          
          <div className="prose max-w-none">
            <p className="text-gray-600 mb-6">
              Wells Argo serves one in three U.S. households and more than 10% of small businesses in the United States. We provide a full range of financial services to help our customers succeed financially.
            </p>
            
            <h2 className="text-2xl font-semibold mb-4 text-wells-navy">Our Vision</h2>
            <p className="text-gray-600 mb-6">
              We want to satisfy our customers' financial needs and help them succeed financially. This unites us around a simple premise: Customers can be better served when they have a relationship with a trusted provider that knows them well.
            </p>

            <h2 className="text-2xl font-semibold mb-4 text-wells-navy">Our Values</h2>
            <ul className="list-disc list-inside space-y-2 text-gray-700 mb-6">
              <li>What's right for customers</li>
              <li>People as a competitive advantage</li>
              <li>Ethics and integrity</li>
              <li>Diversity and inclusion</li>
              <li>Leadership and accountability</li>
            </ul>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default About;
