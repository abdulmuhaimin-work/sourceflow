import React, { useState } from 'react';
import '../index.css';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-white shadow-sm border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <h1 
              className="text-xl font-bold text-primary-blue tracking-[-0.01em]"
              style={{ 
                fontFamily: 'Helvetica Neue, Helvetica, Inter, Arial, sans-serif',
                fontWeight: 700
              }}
            >
              Software Recruitment co.
            </h1>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
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
            <button className="btn-secondary rounded-[30px] font-bold">
              Upload CV
            </button>
            <button className="btn-primary rounded-[30px] font-bold text-black">
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
              <a href="#" className="text-gray-700 hover:text-primary-blue block px-3 py-2 text-base font-medium">For jobseekers</a>
              <a href="#" className="text-gray-700 hover:text-primary-blue block px-3 py-2 text-base font-medium">For clients</a>
              <a href="#" className="text-gray-700 hover:text-primary-blue block px-3 py-2 text-base font-medium">Sectors</a>
              <a href="#" className="text-gray-700 hover:text-primary-blue block px-3 py-2 text-base font-medium">Resources</a>
              <div className="flex flex-col space-y-2 pt-4">
                <button className="btn-secondary rounded-[30px]">Upload CV</button>
                <button className="btn-primary rounded-[30px]">Contact us</button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar; 