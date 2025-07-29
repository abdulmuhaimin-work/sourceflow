import React, { useState } from 'react';

const Jobs = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const jobs = [
    {
      id: 1,
      title: 'Software Engineer',
      language: 'Python',
      location: 'London',
      salary: '£65,000',
      description: 'Odio mi amet commodo convallis nunc. Tincidunt mauris eu egestas eget in aliquam.',
      bgColor: 'bg-primary-yellow',
      textColor: 'text-primary-blue',
      postedDate: '29/08/2023'
    },
    {
      id: 2,
      title: 'Software Engineer',
      language: 'Python',
      location: 'London',
      salary: '£65,000',
      description: 'Odio mi amet commodo convallis nunc. Tincidunt mauris eu egestas eget in aliquam.',
      bgColor: 'bg-primary-blue',
      textColor: 'text-white',
      postedDate: '29/08/2023'
    },
    {
      id: 3,
      title: 'Software Engineer',
      language: 'Python',
      location: 'London',
      salary: '£65,000',
      description: 'Odio mi amet commodo convallis nunc. Tincidunt mauris eu egestas eget in aliquam.',
      bgColor: 'bg-primary-orange',
      textColor: 'text-[#451B09]',
      postedDate: '29/08/2023'
    },
    {
      id: 4,
      title: 'Backend Engineer',
      language: 'Python',
      location: 'Aberdeen',
      salary: '£50,000',
      description: 'Odio mi amet commodo convallis nunc. Tincidunt mauris eu egestas eget in aliquam.',
      bgColor: 'bg-green-700',
      textColor: 'text-white',
      postedDate: '29/09/2023'
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => Math.min(prev + 1, jobs.length - 3));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => Math.max(prev - 1, 0));
  };

  // Get 3 jobs starting from currentSlide
  const getVisibleJobs = () => {
    const visibleJobs = [];
    for (let i = 0; i < 3; i++) {
      visibleJobs.push(jobs[(currentSlide + i) % jobs.length]);
    }
    return visibleJobs;
  };

  return (
    <section className="bg-[#D7E7FB] py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-8">
          <h2 className="text-[56px] font-bold text-gray-900">Latest Jobs</h2>
        </div>

        {/* Jobs Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {getVisibleJobs().map((job, index) => (
            <div
              key={job.id}
              className={`${job.bgColor} ${job.textColor} rounded-[30px] p-8 shadow-lg hover:shadow-xl transition-shadow duration-300`}
            >
              {/* Language Tag */}
              <div className="flex items-center mb-6">
                <span className="inline-flex items-center px-1 py-[2px] rounded-[5px] text-[14px]  bg-white backdrop-blur-sm  text-primary-blue">
                  <img 
                    src="/assets/python.png" 
                    alt="Python" 
                    className="w-5 h-5 mr-1 object-contain"
                  />
                  {job.language}
                </span>
              </div>

              {/* Job Title */}
              <h3 className="text-[30px] font-bold mb-5 tracking-[-1px]">{job.title}</h3>

              {/* Location and Salary */}
              <div className="space-y-2 mb-6">
                <div className="flex items-center">
                  <svg className="w-6 h-6 mr-2" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
                  </svg>
                  <span className="text-[16px] leading-[150%] font-light">{job.location}</span>
                </div>
                <div className="flex items-center">
                    <svg className="w-6 h-6 mr-2" viewBox="0 0 25 25" fill="currentColor">
                     <path d="M3.5 6.46667H21.5V18.4667H3.5V6.46667ZM12.5 9.46667C13.2956 9.46667 14.0587 9.78274 14.6213 10.3454C15.1839 10.908 15.5 11.671 15.5 12.4667C15.5 13.2623 15.1839 14.0254 14.6213 14.588C14.0587 15.1506 13.2956 15.4667 12.5 15.4667C11.7044 15.4667 10.9413 15.1506 10.3787 14.588C9.81607 14.0254 9.5 13.2623 9.5 12.4667C9.5 11.671 9.81607 10.908 10.3787 10.3454C10.9413 9.78274 11.7044 9.46667 12.5 9.46667ZM7.5 8.46667C7.5 8.99711 7.28929 9.50582 6.91421 9.88089C6.53914 10.256 6.03043 10.4667 5.5 10.4667V14.4667C6.03043 14.4667 6.53914 14.6774 6.91421 15.0525C7.28929 15.4275 7.5 15.9362 7.5 16.4667H17.5C17.5 15.9362 17.7107 15.4275 18.0858 15.0525C18.4609 14.6774 18.9696 14.4667 19.5 14.4667V10.4667C18.9696 10.4667 18.4609 10.256 18.0858 9.88089C17.7107 9.50582 17.5 8.99711 17.5 8.46667H7.5Z"/>
                   </svg>
                  <span className="text-[16px] leading-[150%] font-light">{job.salary}</span>
                </div>
              </div>

              {/* Description */}
              <p className="text-[16px] leading-[150%] mb-6 leading-[150%] font-light">
                {job.description}
              </p>

              {/* View Job Button */}
              <button className="w-full bg-white hover:bg-white/30 backdrop-blur-sm text-primary-blue font-[500] py-4 px-8 rounded-[30px] transition-all duration-200 border border-white/30">
                View this job
              </button>

              {/* Posted Date */}
              <p className="text-[13px] opacity-70 mt-4">Posted on {job.postedDate}</p>
            </div>
          ))}
        </div>

        {/* Navigation and View More */}
        <div className="flex items-center justify-between">
          {/* Carousel Navigation */}
          <div className="flex space-x-2">
            <button
              onClick={prevSlide}
              disabled={currentSlide === 0}
              className={`w-12 h-12 rounded-full flex items-center justify-center transition-colors duration-200 ${
                currentSlide === 0 
                  ? 'bg-gray-200 cursor-not-allowed' 
                  : 'bg-gray-300 hover:bg-gray-400'
              }`}
              >
                <img 
                  src="/assets/arrow.svg" 
                  alt="Arrow" 
                  className={`w-10 h-10 scale-x-[-1] ${
                    currentSlide === 0 ? 'opacity-30' : 'opacity-100'
                  }`} 
                />
            </button>
            <button
              onClick={nextSlide}
              disabled={currentSlide >= jobs.length - 3}
              className={`w-12 h-12 rounded-full flex items-center justify-center transition-colors duration-200 ${
                currentSlide >= jobs.length - 3
                  ? 'bg-gray-200 cursor-not-allowed'
                  : 'bg-gray-300 hover:bg-primary-blue'
              }`}
            >
              <img 
                src="/assets/arrow.svg" 
                alt="Arrow" 
                className={`w-10 h-10 ${
                  currentSlide >= jobs.length - 3 ? 'opacity-30' : 'opacity-100'
                }`} 
              />
            </button>
          </div>

          {/* View More Link */}
          <button className="text-[#0E2152] mx-4 text-[16px] leading-[150%] hover:text-primary-blue font-[500] flex items-center transition-colors duration-200">
            View more jobs
          </button>
        </div>
      </div>
    </section>
  );
};

export default Jobs; 