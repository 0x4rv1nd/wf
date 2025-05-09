import React from "react";
import { Button } from "@/components/ui/button";
import { CheckCircle } from "lucide-react";

const InfoSection = () => {
  return (
    <div className="py-12 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Left content */}
          <div>
            <div className="mb-4 inline-block bg-wells-gold/20 py-1 px-3 rounded-full">
              <span className="text-wells-navy font-medium text-sm">
                Mobile Banking
              </span>
            </div>
            <h2 className="text-2xl md:text-3xl font-bold mb-4 text-wells-navy">
              Bank anytime, anywhere with our mobile app
            </h2>
            <p className="text-wells-darkgray mb-6">
              Experience the convenience of managing your finances from your mobile 
              device with our easy-to-use mobile banking application.
            </p>
            
            <ul className="space-y-3 mb-8">
              {[
                "Deposit checks from your phone",
                "Transfer funds between accounts",
                "Pay bills quickly and easily",
                "Monitor account activity in real-time",
                "Freeze your card if it's lost or stolen"
              ].map((item, index) => (
                <li key={index} className="flex items-start">
                  <CheckCircle className="h-5 w-5 mr-2 mt-0.5 text-wells-red" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            
            <Button className="bg-wells-red hover:bg-red-700 text-white">
              Download the App
            </Button>
          </div>
          
          {/* Right image */}
          <div className="bg-wells-gray rounded-lg p-6 flex justify-center items-center h-80">
            <div className="text-center text-wells-navy">
              <div className="mb-4 font-bold text-xl">Mobile Banking App</div>
              <div className="mb-6 font-light italic text-sm">
                (Illustration of mobile banking app)
              </div>
              <div className="text-xs">
                Available on iOS and Android
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InfoSection;
