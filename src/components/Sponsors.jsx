import React from 'react';

const Sponsors = () => {
  const sponsors = [
    { name: 'Microsoft', color: 'text-blue-600' },
    { name: 'Oracle', color: 'text-red-600' },
    { name: 'Atlassian', color: 'text-blue-700' },
    { name: 'Cloudflare', color: 'text-orange-500' },
    { name: 'VMware', color: 'text-gray-700' }
  ];

  const LogoPlaceholder = ({ name, color }) => (
    <div className="flex items-center justify-center p-4 group hover:scale-105 transition-transform duration-200">
      <div className={`text-2xl font-bold ${color} opacity-80 group-hover:opacity-100 transition-opacity`}>
        {name}
      </div>
    </div>
  );

  return (
    <section className="bg-gray-50 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-lg font-medium text-gray-600">Who we work with</h2>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 items-center">
          {sponsors.map((sponsor, index) => (
            <div key={index} className="flex justify-center">
              <LogoPlaceholder name={sponsor.name} color={sponsor.color} />
            </div>
          ))}
        </div>
        
        {/* Alternative with actual logo styling */}
        <div className="hidden lg:flex justify-center items-center space-x-12 mt-8">
          {/* Microsoft */}
          <div className="flex items-center space-x-2 opacity-80 hover:opacity-100 transition-opacity">
            <div className="grid grid-cols-2 gap-1">
              <div className="w-3 h-3 bg-red-500"></div>
              <div className="w-3 h-3 bg-green-500"></div>
              <div className="w-3 h-3 bg-blue-500"></div>
              <div className="w-3 h-3 bg-yellow-500"></div>
            </div>
            <span className="text-xl font-semibold text-gray-700">Microsoft</span>
          </div>

          {/* Oracle */}
          <div className="flex items-center opacity-80 hover:opacity-100 transition-opacity">
            <span className="text-xl font-bold text-red-600">ORACLE</span>
          </div>

          {/* Atlassian */}
          <div className="flex items-center space-x-2 opacity-80 hover:opacity-100 transition-opacity">
            <div className="w-6 h-6 bg-blue-600 rounded"></div>
            <span className="text-xl font-semibold text-blue-700">ATLASSIAN</span>
          </div>

          {/* Cloudflare */}
          <div className="flex items-center space-x-2 opacity-80 hover:opacity-100 transition-opacity">
            <div className="w-6 h-6 bg-orange-500 rounded-full"></div>
            <span className="text-xl font-semibold text-gray-700">Cloudflare</span>
          </div>

          {/* VMware */}
          <div className="flex items-center opacity-80 hover:opacity-100 transition-opacity">
            <span className="text-xl font-semibold text-gray-700">VMware</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Sponsors; 