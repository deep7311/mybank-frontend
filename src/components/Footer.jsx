import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-indigo-900 to-purple-800 text-white py-6 mt-12">
      <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
        <p className="text-sm text-center md:text-left">
          &copy; {new Date().getFullYear()} Deepak. All rights reserved.
        </p>

        <div className="flex space-x-4 mt-4 md:mt-0">
          <a
            href="#"
            className="text-white hover:text-gray-300 transition duration-200 text-sm"
          >
            Privacy Policy
          </a>
          <a
            href="#"
            className="text-white hover:text-gray-300 transition duration-200 text-sm"
          >
            Terms of Service
          </a>
          <a
            href="#"
            className="text-white hover:text-gray-300 transition duration-200 text-sm"
          >
            Contact
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
