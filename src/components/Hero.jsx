import React, { useState } from 'react';

const Hero = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = (e) => {
    e.preventDefault();
    console.log('Searching for:', searchQuery);
    // Add search functionality here
  };

  return (
    <section className="bg-gradient-to-r from-primary-blue to-blue-700 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-primary-orange rounded-full opacity-20 -translate-x-32 -translate-y-32"></div>
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-primary-yellow rounded-full opacity-20 translate-x-32 translate-y-32"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Content */}
          <div className="text-white space-y-8">
            <div className="space-y-4">
              <p className="text-lg font-medium text-blue-200">Software Recruitment Specialists</p>
              <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight">
                Elevate your career
              </h1>
            </div>

            {/* Search Form */}
            <form onSubmit={handleSearch} className="mt-8">
              <div className="flex flex-col sm:flex-row gap-4 max-w-md">
                <div className="flex-1">
                  <input
                    type="text"
                    placeholder="E.g. networking"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full px-4 py-3 rounded-lg border-0 focus:ring-2 focus:ring-primary-yellow focus:outline-none text-gray-900 placeholder-gray-500"
                  />
                </div>
                <button
                  type="submit"
                  className="btn-secondary whitespace-nowrap px-8 py-3 text-base font-semibold"
                >
                  Search jobs
                </button>
              </div>
            </form>
          </div>

          {/* Right side - Image */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              <div className="w-80 h-96 bg-gradient-to-br from-gray-100 to-gray-200 rounded-2xl shadow-2xl overflow-hidden">
                {/* Professional woman image placeholder */}
                <div className="w-full h-full bg-gradient-to-br from-amber-100 via-orange-50 to-blue-50 flex items-center justify-center relative">
                  {/* Simulated professional woman */}
                  <div className="w-32 h-32 bg-amber-200 rounded-full flex items-end justify-center overflow-hidden relative">
                    <div className="w-24 h-24 bg-amber-300 rounded-full"></div>
                  </div>
                  {/* Simulated business attire */}
                  <div className="absolute bottom-0 left-0 right-0 h-48 bg-gradient-to-t from-amber-600 via-amber-500 to-transparent"></div>
                  {/* Simulated documents/laptop */}
                  <div className="absolute bottom-16 right-8 w-12 h-8 bg-gray-300 rounded shadow-md"></div>
                  {/* Simulated glasses */}
                  <div className="absolute top-32 left-1/2 transform -translate-x-1/2 w-16 h-6 border-2 border-gray-700 rounded-full opacity-70"></div>
                </div>
              </div>
              {/* Decorative element behind image */}
              <div className="absolute -top-4 -right-4 w-80 h-96 bg-white/10 rounded-2xl -z-10"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero; 