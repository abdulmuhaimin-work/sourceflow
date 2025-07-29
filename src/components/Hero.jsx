import React, { useState } from 'react';

const Hero = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = (e) => {
    e.preventDefault();
    console.log('Searching for:', searchQuery);
  };

  return (
    <section className="bg-gradient-to-r from-primary-blue to-blue-700 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-96 h-96 bg-primary-orange rounded-full -translate-x-32 -translate-y-32"></div>
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-primary-yellow rounded-full translate-x-32 translate-y-32"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 items-center lg:my-14">
          <div className="text-white">
            <div className="">
              <p className="text-lg font-light text-blue-200 p-2 leading-[150%]">Software Recruitment Specialists</p>
              <h1 className="text-4xl lg:text-[66px] font-bold leading-[150%] tracking-[-1px]">
                Elevate your career
              </h1>
            </div>

            <form onSubmit={handleSearch} className="">
              <div className="flex flex-row">
                <div className="flex-1">
                  <input
                    type="text"
                    placeholder="E.g. networking"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full px-4 py-3 rounded-l-[30px] border-0 focus:ring-2 focus:ring-primary-yellow focus:outline-none text-gray-900 placeholder-gray-500"
                  />
                </div>
                <button
                  type="submit"
                  className="btn-secondary whitespace-nowrap px-8 py-3 text-base font-semibold rounded-r-[30px] rounded-l-[0px]"
                >
                  Search jobs
                </button>
              </div>
            </form>
          </div>

            <div className="px-8 w-[100%] h-full">
              <div className="relative h-full mt-14 lg:mt-0">
                                 <div className="w-full aspect-square rounded-2xl overflow-hidden">
                   <img src="/assets/office-lady.jpg" alt="Hero Image" className="w-full h-full object-cover object-right" />
                </div>
              </div>
            </div>
        </div>
      </div>
    </section>
  );
};

export default Hero; 