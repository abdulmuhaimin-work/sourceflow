import React, { useState } from 'react';
import '../index.css';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-white shadow-sm border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="flex-shrink-0">
            <h1 
              className="text-xl font-bold text-primary-blue"
            >
              Software Recruitment co.
            </h1>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-1 flex items-baseline space-x-6">
                              <div className="relative group">
                  <button className="text-gray-700 hover:text-primary-blue px-3 py-2 text-[16px] font-normal leading-[100%] tracking-[0%] flex items-center">
                    For jobseekers
                    <svg className="ml-1 h-4 w-4" fill="#064EA4" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                </div>
                <div className="relative group">
                  <button className="text-gray-700 hover:text-primary-blue px-3 py-2 text-[16px] font-normal leading-[100%] tracking-[0%] flex items-center">
                    For clients
                    <svg className="ml-1 h-4 w-4" fill="#064EA4" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                </div>
                <div className="relative group">
                  <button className="text-gray-700 hover:text-primary-blue px-3 py-2 text-[16px] font-normal leading-[100%] tracking-[0%] flex items-center">
                    Sectors
                    <svg className="ml-1 h-4 w-4" fill="#064EA4" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                </div>
                <div className="relative group">
                  <button className="text-gray-700 hover:text-primary-blue px-3 py-2 text-[16px] font-normal leading-[100%] tracking-[0%] flex items-center">
                    Resources
                    <svg className="ml-1 h-4 w-4" fill="#064EA4" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <button className="btn-secondary px-5 py-3 rounded-[30px] font-bold">
              Upload CV
            </button>
            <button className="btn-primary px-5 py-3 rounded-[30px] font-bold text-black">
              Contact us
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-700 hover:text-primary-blue p-2"
            >
              <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {isMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 border-t border-gray-100">
              <button className="text-gray-700 hover:text-primary-blue block px-3 py-2 text-base font-medium text-left w-full">For jobseekers</button>
              <button className="text-gray-700 hover:text-primary-blue block px-3 py-2 text-base font-medium text-left w-full">For clients</button>
              <button className="text-gray-700 hover:text-primary-blue block px-3 py-2 text-base font-medium text-left w-full">Sectors</button>
              <button className="text-gray-700 hover:text-primary-blue block px-3 py-2 text-base font-medium text-left w-full">Resources</button>
              <div className="flex flex-col space-y-2 pt-4">
                <button className="btn-secondary px-5 py-3 rounded-[30px]">Upload CV</button>
                <button className="btn-primary px-5 py-3 rounded-[30px]">Contact us</button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar; 