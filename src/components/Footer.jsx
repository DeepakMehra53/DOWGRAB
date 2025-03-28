import React from "react";
import { Link } from "react-router-dom";

export const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white mt-10">
      <div className="w-[1200px] max-w-full mx-auto px-5 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
          {/* adw */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Dowgrab</h3>
            <p className="text-gray-300">
              Your one-stop shop for all your dog’s needs! Premium quality
              accessories at unbeatable prices. 🐶✨
            </p>
          </div>

          <div className="ml-90">
            <h3 className="text-xl font-semibold mb-4">Contact Us</h3>
            <ul className=" text-gray-300">
              <li>Email: support@dowgrab.com</li>
              <li>Phone: 207-729-6682</li>
              <li>Address: 3249 Fantages Way</li>
              <li>Brunswick , ME 04011</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-300">
          <p>&copy; {new Date().getFullYear()} DowGrab. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};


