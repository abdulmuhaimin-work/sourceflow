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
      bgColor: 'bg-yellow-400',
      textColor: 'text-gray-900',
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
      textColor: 'text-white',
      postedDate: '29/08/2023'
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % jobs.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + jobs.length) % jobs.length);
  };

  return (
    <section className="bg-blue-50 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900">Latest Jobs</h2>
        </div>

        {/* Jobs Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {jobs.map((job, index) => (
            <div
              key={job.id}
              className={`${job.bgColor} ${job.textColor} rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300`}
            >
              {/* Language Tag */}
              <div className="flex items-center mb-6">
                <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-white/20 backdrop-blur-sm">
                  <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  {job.language}
                </span>
              </div>

              {/* Job Title */}
              <h3 className="text-2xl font-bold mb-4">{job.title}</h3>

              {/* Location and Salary */}
              <div className="space-y-2 mb-6">
                <div className="flex items-center">
                  <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <span className="font-medium">{job.location}</span>
                </div>
                <div className="flex items-center">
                  <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                  </svg>
                  <span className="font-bold text-lg">{job.salary}</span>
                </div>
              </div>

              {/* Description */}
              <p className="text-sm opacity-90 mb-6 leading-relaxed">
                {job.description}
              </p>

              {/* View Job Button */}
              <button className="w-full bg-white/20 hover:bg-white/30 backdrop-blur-sm text-current font-semibold py-3 px-6 rounded-lg transition-all duration-200 border border-white/30">
                View this job
              </button>

              {/* Posted Date */}
              <p className="text-xs opacity-70 mt-4">Posted on {job.postedDate}</p>
            </div>
          ))}
        </div>

        {/* Navigation and View More */}
        <div className="flex items-center justify-between">
          {/* Carousel Navigation */}
          <div className="flex space-x-2">
            <button
              onClick={prevSlide}
              className="w-12 h-12 rounded-full bg-gray-300 hover:bg-gray-400 flex items-center justify-center transition-colors duration-200"
            >
              <svg className="w-6 h-6 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button
              onClick={nextSlide}
              className="w-12 h-12 rounded-full bg-gray-800 hover:bg-gray-900 flex items-center justify-center transition-colors duration-200"
            >
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>

          {/* View More Link */}
          <button className="text-gray-700 hover:text-primary-blue font-medium flex items-center transition-colors duration-200">
            View more jobs
            <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Jobs; 