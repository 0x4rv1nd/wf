import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Shield } from "lucide-react";

const Privacy = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow container mx-auto px-4 py-8">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-3xl font-bold mb-8 text-wells-navy flex items-center gap-2">
            <Shield className="text-wells-red" />
            Privacy Policy
          </h1>
          
          <div className="prose max-w-none">
            <p className="text-gray-600 mb-6">
              Your privacy is important to us. This Privacy Policy explains how Wells Argo collects, uses, and protects your personal information.
            </p>
            
            <h2 className="text-2xl font-semibold mb-4 text-wells-navy">Information We Collect</h2>
            <p className="text-gray-600 mb-6">
              We collect information that helps us serve you better, including:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-700 mb-6">
              <li>Personal identification information</li>
              <li>Account information and history</li>
              <li>Transaction data</li>
              <li>Website usage and preferences</li>
            </ul>

            <h2 className="text-2xl font-semibold mb-4 text-wells-navy">How We Use Your Information</h2>
            <ul className="list-disc list-inside space-y-2 text-gray-700 mb-6">
              <li>To process your transactions</li>
              <li>To protect against fraud</li>
              <li>To improve our services</li>
              <li>To communicate with you</li>
            </ul>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Privacy;
