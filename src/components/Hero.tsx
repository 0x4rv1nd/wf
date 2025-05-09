import React from "react";
          import { Button } from "@/components/ui/button";
          import LoginForm from "./LoginForm";
          
          const Hero = () => {
            return (
              <div className="bg-white">
                <div className="container mx-auto px-4 py-8 md:py-16">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                    {/* Left column - promo content */}
                    <div className="space-y-6">
                      <h1 className="text-4xl md:text-5xl font-bold text-wells-navy leading-tight">
                        Banking made simple for everyday needs
                      </h1>
                      <p className="text-lg text-wells-darkgray">
                        Open a checking account online in minutes and enjoy easy mobile banking, 
                        contactless cards, and access to thousands of ATMs.
                      </p>
                      <div className="pt-2">
                        <Button className="bg-wells-gold hover:bg-amber-500 text-wells-black font-medium mr-4">
                          Open an Account
                        </Button>
                        <Button variant="outline" className="border-wells-navy text-wells-navy hover:bg-wells-gray">
                          Learn More
                        </Button>
                      </div>
                      <div className="flex items-center text-sm text-wells-darkgray">
                        <span className="bg-wells-gold text-wells-black font-medium rounded-full px-3 py-1 mr-3">
                          Limited Time
                        </span>
                        Get $300 when you open a new checking account with direct deposit.
                      </div>
                    </div>
                    
                    {/* Right column - login form */}
                    <div className="flex justify-center md:justify-end">
                      <LoginForm />
                    </div>
                  </div>
                </div>
              </div>
            );
          };
          
          export default Hero;
