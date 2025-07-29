import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-primary-blue text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <h3 className="text-xl font-bold mb-4">Software Recruitment co.</h3>
            
            {/* Social Links */}
            <div className="flex space-x-4 mb-6">
              {/* LinkedIn */}
              <a href="#" className="text-white hover:text-blue-200 transition-colors duration-200">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>
              
              {/* Facebook */}
              <a href="#" className="text-white hover:text-blue-200 transition-colors duration-200">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </a>
              
              {/* Instagram */}
              <a href="#" className="text-white hover:text-blue-200 transition-colors duration-200">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 6.62 5.367 11.987 11.988 11.987c6.62 0 11.987-5.367 11.987-11.987C24.014 5.367 18.637.001 12.017.001zM8.449 16.988c-1.297 0-2.448-.73-3.016-1.8L4.27 17.94l.020-5.988c0-1.297.73-2.448 1.8-3.016l-2.752-1.163L9.326 6.61c1.297 0 2.448.73 3.016 1.8l1.163-2.752l-.020 5.988c0 1.297-.73 2.448-1.8 3.016l2.752 1.163L8.449 16.988z"/>
                </svg>
              </a>
              
              {/* Twitter */}
              <a href="#" className="text-white hover:text-blue-200 transition-colors duration-200">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Explore Section */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Explore</h4>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-blue-200 hover:text-white transition-colors duration-200">
                  Homepage
                </a>
              </li>
              <li>
                <a href="#" className="text-blue-200 hover:text-white transition-colors duration-200">
                  For jobseekers
                </a>
              </li>
              <li>
                <a href="#" className="text-blue-200 hover:text-white transition-colors duration-200">
                  For clients
                </a>
              </li>
              <li>
                <a href="#" className="text-blue-200 hover:text-white transition-colors duration-200">
                  Our sectors
                </a>
              </li>
              <li>
                <a href="#" className="text-blue-200 hover:text-white transition-colors duration-200">
                  Resources
                </a>
              </li>
              <li>
                <a href="#" className="text-blue-200 hover:text-white transition-colors duration-200">
                  Contact us
                </a>
              </li>
            </ul>
          </div>

          {/* Sectors Section */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Sectors</h4>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-blue-200 hover:text-white transition-colors duration-200">
                  Software engineering
                </a>
              </li>
              <li>
                <a href="#" className="text-blue-200 hover:text-white transition-colors duration-200">
                  DevOps
                </a>
              </li>
              <li>
                <a href="#" className="text-blue-200 hover:text-white transition-colors duration-200">
                  Cloud
                </a>
              </li>
              <li>
                <a href="#" className="text-blue-200 hover:text-white transition-colors duration-200">
                  Infrastructure
                </a>
              </li>
              <li>
                <a href="#" className="text-blue-200 hover:text-white transition-colors duration-200">
                  Testing
                </a>
              </li>
              <li>
                <a href="#" className="text-blue-200 hover:text-white transition-colors duration-200">
                  Security
                </a>
              </li>
            </ul>
          </div>

          {/* Services Section */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Services</h4>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-blue-200 hover:text-white transition-colors duration-200">
                  Nav Item
                </a>
              </li>
              <li>
                <a href="#" className="text-blue-200 hover:text-white transition-colors duration-200">
                  Nav Item
                </a>
              </li>
              <li>
                <a href="#" className="text-blue-200 hover:text-white transition-colors duration-200">
                  Nav Item
                </a>
              </li>
              <li>
                <a href="#" className="text-blue-200 hover:text-white transition-colors duration-200">
                  Nav Item
                </a>
              </li>
              <li>
                <a href="#" className="text-blue-200 hover:text-white transition-colors duration-200">
                  Nav Item
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Border */}
        <div className="border-t border-blue-600 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-blue-200 text-sm mb-4 md:mb-0">
              © 2023 Software Recruitment co. All rights reserved.
            </p>
            <div className="flex space-x-6 text-sm">
              <a href="#" className="text-blue-200 hover:text-white transition-colors duration-200">
                Privacy Policy
              </a>
              <a href="#" className="text-blue-200 hover:text-white transition-colors duration-200">
                Terms of Service
              </a>
              <a href="#" className="text-blue-200 hover:text-white transition-colors duration-200">
                Cookies
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 