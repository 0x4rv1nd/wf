import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-wells-gray pt-8 pb-6">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Column 1 */}
          <div>
            <h5 className="font-semibold mb-4">Banking</h5>
            <ul className="space-y-2 text-sm">
              <li><Link to="#" className="hover:text-wells-red">Checking Accounts</Link></li>
              <li><Link to="#" className="hover:text-wells-red">Savings Accounts</Link></li>
              <li><Link to="#" className="hover:text-wells-red">Credit Cards</Link></li>
              <li><Link to="#" className="hover:text-wells-red">Debit Cards</Link></li>
            </ul>
          </div>
          
        
          
          {/* Column 3 */}
          <div>
            <h5 className="font-semibold mb-4">Investing & Wealth</h5>
            <ul className="space-y-2 text-sm">
              <li><Link to="#" className="hover:text-wells-red">Financial Advisors</Link></li>
              <li><Link to="#" className="hover:text-wells-red">Trust Services</Link></li>
            </ul>
          </div>
          
          {/* Column 4 */}
          <div>
            <h5 className="font-semibold mb-4">Help & Support</h5>
            <ul className="space-y-2 text-sm">
              <li><Link to="#" className="hover:text-wells-red">Customer Service</Link></li>
              <li><Link to="#" className="hover:text-wells-red">Contact Us</Link></li>
             
            </ul>
          </div>
        </div>
        
        {/* Divider */}
        <hr className="my-6 border-gray-300" />
        
        {/* Bottom footer */}
        <div className="md:flex md:justify-between">
          <div className="mb-6 md:mb-0">
            <p className="text-sm mb-2">© 2025 Wells Argo. All rights reserved.</p>
            <p className="text-xs text-wells-darkgray">
              Deposit and loan products are offered by Wells Argo Bank, N.A. Member FDIC.
            </p>
          </div>
          
          <div className="flex flex-wrap gap-x-4 gap-y-2">
            <Link to="#" className="text-xs hover:text-wells-red">Privacy</Link>
            <Link to="#" className="text-xs hover:text-wells-red">Security</Link>
            <Link to="#" className="text-xs hover:text-wells-red">Terms & Conditions</Link>
          </div>
        </div>
        
        
      </div>
    </footer>
  );
};

export default Footer;
