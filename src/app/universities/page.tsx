import React from 'react';

export const metadata = {
  title: 'Universities | sans',
  description: 'Explore our partner universities in India and abroad. Find the perfect educational institution for your academic goals.',
};

const UniversitiesPage = () => {
  // Sample university data - in a real app, this would come from a database or API
  const universities = [
    {
      name: 'University of Medical Sciences',
      location: 'Kyiv, Ukraine',
      established: '1956',
      accreditation: 'WHO, MCI',
      programs: ['MBBS', 'MD', 'BDS'],
      category: 'Medical'
    },
    {
      name: 'Technical University',
      location: 'Moscow, Russia',
      established: '1967',
      accreditation: 'UGC, AICTE',
      programs: ['Engineering', 'Computer Science', 'Architecture'],
      category: 'Technical'
    },
    {
      name: 'Global Business School',
      location: 'Singapore',
      established: '1990',
      accreditation: 'AACSB, EQUIS',
      programs: ['MBA', 'BBA', 'Finance'],
      category: 'Business'
    },
    {
      name: 'Arts and Design College',
      location: 'Paris, France',
      established: '1984',
      accreditation: 'NASAD',
      programs: ['Fine Arts', 'Fashion Design', 'Graphic Design'],
      category: 'Arts'
    },
    {
      name: 'National College of Sciences',
      location: 'Delhi, India',
      established: '1975',
      accreditation: 'UGC, NAAC',
      programs: ['BSc', 'MSc', 'PhD'],
      category: 'Science'
    },
    {
      name: 'International University of Law',
      location: 'London, UK',
      established: '1921',
      accreditation: 'BAR Council',
      programs: ['LLB', 'LLM', 'Juris Doctor'],
      category: 'Law'
    },
  ];

  return (
    <main className="pt-24 pb-16">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-4xl font-bold text-gray-900 mb-6">Partner Universities</h1>
          
          <p className="lead text-xl text-gray-700 mb-8">
            sans has established strong partnerships with reputed universities around the world. 
            Browse our partner institutions to find the perfect match for your academic journey.
          </p>
          
          <div className="mb-8">
            <div className="flex flex-wrap gap-3 mb-6">
              <button className="px-4 py-2 bg-primary-color text-white rounded-full text-sm font-medium">All</button>
              <button className="px-4 py-2 bg-gray-100 hover:bg-gray-200 text-gray-800 rounded-full text-sm font-medium">Medical</button>
              <button className="px-4 py-2 bg-gray-100 hover:bg-gray-200 text-gray-800 rounded-full text-sm font-medium">Technical</button>
              <button className="px-4 py-2 bg-gray-100 hover:bg-gray-200 text-gray-800 rounded-full text-sm font-medium">Business</button>
              <button className="px-4 py-2 bg-gray-100 hover:bg-gray-200 text-gray-800 rounded-full text-sm font-medium">Arts</button>
              <button className="px-4 py-2 bg-gray-100 hover:bg-gray-200 text-gray-800 rounded-full text-sm font-medium">Science</button>
              <button className="px-4 py-2 bg-gray-100 hover:bg-gray-200 text-gray-800 rounded-full text-sm font-medium">Law</button>
            </div>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {universities.map((university, index) => (
              <div key={index} className="bg-white rounded-xl shadow-sm overflow-hidden border border-gray-100 hover:shadow-md transition-shadow">
                <div className="h-3 bg-primary-color"></div>
                <div className="p-6">
                  <h2 className="text-xl font-semibold mb-2">{university.name}</h2>
                  <p className="text-gray-600 mb-3">{university.location}</p>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    <span className="px-3 py-1 bg-blue-50 text-blue-600 rounded-full text-xs font-medium">
                      Est. {university.established}
                    </span>
                    <span className="px-3 py-1 bg-green-50 text-green-600 rounded-full text-xs font-medium">
                      {university.category}
                    </span>
                  </div>
                  
                  <div className="border-t pt-4 mt-4">
                    <h3 className="text-sm font-medium text-gray-700 mb-2">Popular Programs:</h3>
                    <div className="flex flex-wrap gap-2">
                      {university.programs.map((program, idx) => (
                        <span key={idx} className="px-2 py-1 bg-gray-100 text-gray-600 rounded text-xs">
                          {program}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <div className="mt-5">
                    <button className="px-4 py-2 text-primary-color border border-primary-color rounded hover:bg-primary-color hover:text-white transition-colors text-sm w-full">
                      View Details
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-10 text-center">
            <button className="bg-white hover:bg-gray-50 text-primary-color font-medium py-3 px-8 rounded-md shadow inline-flex items-center transition-all duration-300 border border-gray-200">
              Load More Universities
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </main>
  );
};

export default UniversitiesPage; 