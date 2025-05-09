import React from "react";
import { Button } from "@/components/ui/button";
import { Shield, Gift, Clock } from "lucide-react";

const PromoBanner = () => {
  return (
    <div className="bg-wells-navy text-white py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="md:w-1/2 mb-8 md:mb-0">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              Security that puts you in control
            </h2>
            <p className="text-lg mb-6">
              Set up account alerts, use enhanced login security, and access 
              tools to help you monitor your accounts easily.
            </p>
            <Button className="bg-wells-gold hover:bg-amber-500 text-wells-black font-medium">
              Protect Your Account
            </Button>
          </div>
          
          <div className="md:w-5/12">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <div className="flex flex-col items-center text-center">
                <Shield className="h-10 w-10 mb-3 text-wells-gold" />
                <h3 className="font-medium mb-1">Enhanced Security</h3>
                <p className="text-sm">Advanced protection for your accounts</p>
              </div>
              
              <div className="flex flex-col items-center text-center">
                <Gift className="h-10 w-10 mb-3 text-wells-gold" />
                <h3 className="font-medium mb-1">Fraud Protection</h3>
                <p className="text-sm">Zero liability for unauthorized transactions</p>
              </div>
              
              <div className="flex flex-col items-center text-center">
                <Clock className="h-10 w-10 mb-3 text-wells-gold" />
                <h3 className="font-medium mb-1">24/7 Monitoring</h3>
                <p className="text-sm">Continuous surveillance of your accounts</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PromoBanner;
