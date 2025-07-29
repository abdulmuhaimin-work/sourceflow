import React from 'react';

const Sponsors = () => {
  const sponsors = [
    { name: 'Microsoft.png'},
    { name: 'Oracle.png'},
    { name: 'Atlassian.png'},
    { name: 'Cloudflare.png'},
    { name: 'vmware.png'}
  ];

  const LogoPlaceholder = ({ name, color }) => (
    <div className="flex items-center justify-center p-4 group hover:scale-105 transition-transform duration-200">
              <img 
          src={`${process.env.PUBLIC_URL}/assets/${name}`} 
          alt={name.replace('.png', '')} 
          className="h-12 w-auto opacity-80 group-hover:opacity-100 transition-opacity filter object-contain" 
        />
    </div>
  );

  return (
    <section className="bg-gray-50 pt-12 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-4">
          <h2 className="text-[16px] font-bold text-[#686868] tracking-[-1px]">Who we work with</h2>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 items-center">
          {sponsors.map((sponsor, index) => (
            <div key={index} className="flex justify-center">
              <LogoPlaceholder name={sponsor.name} color={sponsor.color} />
            </div>
          ))}
        </div>
        
      </div>
    </section>
  );
};

export default Sponsors; 