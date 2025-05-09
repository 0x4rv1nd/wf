import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const Contact = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-8 text-wells-navy">Contact Us</h1>
        
        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          <Card>
            <CardHeader>
              <CardTitle>Customer Service</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 mb-4">24/7 Customer Service</p>
              <p className="font-semibold">1-800-555-0000</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Technical Support</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 mb-4">Online Banking Support</p>
              <p className="font-semibold">1-800-555-0001</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Report Fraud</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 mb-4">24/7 Fraud Prevention</p>
              <p className="font-semibold">1-800-555-0002</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Lost/Stolen Card</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 mb-4">Card Services</p>
              <p className="font-semibold">1-800-555-0003</p>
            </CardContent>
          </Card>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Contact;
