import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/wizia.png"


const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-[#183A40] shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo Section */}
          <div className="flex-shrink-0">
            <Link
              to="/"
              className=" text-2xl font-bold tracking-tight hover:text-gray-200 transition-colors"
            >
            <img src={logo} alt="" />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-6">
              {/* <NavLink to="/">Home</NavLink> */}
              <NavLink to="/about" className="font-nav">About us</NavLink>
              <NavLink to="/pricing" className="font-nav">Pricing</NavLink>
              <NavLink to="/Customers">Customers</NavLink>
              <NavLink to="/solutions">Solutions</NavLink>
              
            </div>
          </div>
          <div className="hidden md:flex gap-4">
            <button className=" bg-[#0FF1F6] py-2 px-4 font-nav rounded-full text-sm hover:bg-cyan-400 transition-all ">Book a Demo</button>
            <button className="border-2 font-nav border-white text-white py-2 px-4 text-sm rounded-full">Contact us</button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-white hover:text-gray-200 hover:bg-blue-600 focus:outline-none transition-colors"
              aria-expanded={isOpen}
            >
              <span className="sr-only">
                {isOpen ? "Close menu" : "Open menu"}
              </span>
              {isOpen ? (
                <svg
                  className="h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  className="h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`md:hidden ${isOpen ? "block" : "hidden"}`}>
        <div className="px-2 pt-2 pb-3 space-y-1  sm:px-3 bg-blue-600">
         
          <MobileNavLink to="/about" onClick={() => setIsOpen(false)}>
            About us
          </MobileNavLink>
          <MobileNavLink to="/pricing" onClick={() => setIsOpen(false)}>
            Pricing
          </MobileNavLink>
          <MobileNavLink to="/customers" onClick={() => setIsOpen(false)}>
            Customers
          </MobileNavLink>
          <MobileNavLink to="/solutions" onClick={() => setIsOpen(false)}>
            Solutions
          </MobileNavLink>
          
        </div>
      </div>
    </nav>
  );
};

// Reusable component for desktop navigation links
const NavLink = ({ to, children }) => (
  <Link
    to={to}
    className="text-white hover:text-gray-200 px-3 py-2 rounded-md text-sm font-medium transition-colors relative group"
  >
    {children}
    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-white transition-all group-hover:w-full"></span>
  </Link>
);

// Reusable component for mobile navigation links
const MobileNavLink = ({ to, children, onClick, className = "" }) => (
  <Link
    to={to}
    onClick={onClick}
    className={`block px-3 py-2 rounded-md text-base font-medium text-white hover:bg-blue-500 transition-colors ${className}`}
  >
    {children}
  </Link>
);

export default Navbar;