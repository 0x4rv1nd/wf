import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Search, Menu, X } from "lucide-react";

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
      {/* Top utility nav */}
      <div className="bg-wells-navy text-white text-xs">
        <div className="container mx-auto flex justify-end items-center h-8">
          <nav className="hidden md:flex space-x-6">
            <Link to="#" className="hover:underline">Customer Service</Link>
            <Link to="#" className="hover:underline">ATM/Branch Locations</Link>
            <Link to="#" className="hover:underline">Español</Link>
          </nav>
        </div>
      </div>
      
      {/* Main header */}
      <div className="container mx-auto py-3 px-4 md:px-6">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <div className="flex flex-col items-start">
              <div className="text-wells-red font-bold text-2xl md:text-3xl">
                Wells Argo
              </div>
              <div className="text-wells-gold text-xs font-medium">
                Together we'll go far
              </div>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex space-x-8">
            <Link to="#" className="font-medium hover:text-wells-red">Banking</Link>
            <Link to="#" className="font-medium hover:text-wells-red">Loans</Link>
            <Link to="#" className="font-medium hover:text-wells-red">Investing</Link>
            <Link to="#" className="font-medium hover:text-wells-red">Credit Cards</Link>
          </nav>

          {/* Search & Sign On */}
          <div className="hidden md:flex items-center space-x-4">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-wells-darkgray h-4 w-4" />
              <input
                type="text"
                placeholder="Search"
                className="pl-10 pr-4 py-2 border border-gray-300 rounded-full text-sm focus:outline-none focus:ring-1 focus:ring-wells-red focus:border-wells-red"
              />
            </div>
            <Button className="bg-wells-red text-white hover:bg-red-700">
              Sign On
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <Button 
              variant="ghost" 
              size="icon"
              onClick={toggleMobileMenu}
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-200">
          <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
            <div className="flex justify-center">
              <div className="relative w-full max-w-sm">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-wells-darkgray h-4 w-4" />
                <input
                  type="text"
                  placeholder="Search"
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-full text-sm focus:outline-none focus:ring-1 focus:ring-wells-red focus:border-wells-red"
                />
              </div>
            </div>
            <Link to="#" className="block py-2 border-b border-gray-200 font-medium">Banking</Link>
            <Link to="#" className="block py-2 border-b border-gray-200 font-medium">Loans</Link>
            <Link to="#" className="block py-2 border-b border-gray-200 font-medium">Investing</Link>
            <Link to="#" className="block py-2 border-b border-gray-200 font-medium">Credit Cards</Link>
            <Link to="#" className="block py-2 border-b border-gray-200 text-sm">Customer Service</Link>
            <Link to="#" className="block py-2 border-b border-gray-200 text-sm">ATM/Branch Locations</Link>
            <Link to="#" className="block py-2 border-b border-gray-200 text-sm">Español</Link>
            <Button className="bg-wells-red text-white hover:bg-red-700 w-full">
              Sign On
            </Button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
