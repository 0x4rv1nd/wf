import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { PiggyBank } from "lucide-react";

const Savings = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-8 text-wells-navy">Savings Accounts</h1>
        
        <div className="grid md:grid-cols-2 gap-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <PiggyBank className="text-wells-red" />
                Way2Save® Savings
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 mb-4">Start saving with automatic transfers from your checking account.</p>
              <ul className="list-disc list-inside space-y-2 text-gray-700">
                <li>$25 minimum opening deposit</li>
                <li>Low $5 monthly service fee</li>
                <li>Multiple ways to waive monthly fee</li>
                <li>Automatic savings options</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <PiggyBank className="text-wells-red" />
                Platinum Savings
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 mb-4">Earn our highest savings rates with special benefits and features.</p>
              <ul className="list-disc list-inside space-y-2 text-gray-700">
                <li>$25 minimum opening deposit</li>
                <li>Premium interest rates</li>
                <li>Waivable monthly service fee</li>
                <li>Special offers and benefits</li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Savings;
