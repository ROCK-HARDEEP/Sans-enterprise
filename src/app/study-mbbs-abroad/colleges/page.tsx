import React from 'react';
import Link from 'next/link';

export const metadata = {
  title: 'MBBS College Profiles | sans',
  description: 'Explore top medical universities and colleges worldwide for pursuing MBBS abroad. Compare institutions, admission requirements, and program details.',
};

const CollegesPage = () => {
  // Sample college data - in a real app, this would come from a database or API
  const colleges = [
    {
      name: 'Kazan Federal University',
      location: 'Kazan, Russia',
      established: '1804',
      rank: '392',
      tuitionFee: '$3,500 - $5,000 per year',
      duration: '6 years',
      language: 'English',
      recognition: ['WHO', 'MCI/NMC', 'FAIMER'],
      highlights: [
        'One of the oldest universities in Russia',
        'Modern facilities with advanced technology',
        'Strong focus on clinical training',
        'Affordable tuition fees',
        'International faculty'
      ]
    },
    {
      name: 'Bogomolets National Medical University',
      location: 'Kyiv, Ukraine',
      established: '1841',
      rank: '1202',
      tuitionFee: '$4,000 - $5,500 per year',
      duration: '6 years',
      language: 'English',
      recognition: ['WHO', 'MCI/NMC', 'FAIMER', 'ECFMG'],
      highlights: [
        'One of the top medical universities in Ukraine',
        'Strong reputation for quality medical education',
        'Well-equipped clinical facilities',
        'Diverse international student body',
        'High success rate in licensing exams'
      ]
    },
    {
      name: 'Kazakh National Medical University',
      location: 'Almaty, Kazakhstan',
      established: '1930',
      rank: '768',
      tuitionFee: '$4,500 - $5,800 per year',
      duration: '5 years',
      language: 'English',
      recognition: ['WHO', 'MCI/NMC', 'FAIMER'],
      highlights: [
        'Leading medical university in Central Asia',
        'Modern teaching methodology',
        'Extensive clinical practice opportunities',
        'Safe and student-friendly environment',
        'Collaborations with international universities'
      ]
    },
    {
      name: 'Kyrgyz State Medical Academy',
      location: 'Bishkek, Kyrgyzstan',
      established: '1939',
      rank: '1450',
      tuitionFee: '$3,200 - $4,000 per year',
      duration: '5 years',
      language: 'English',
      recognition: ['WHO', 'MCI/NMC', 'FAIMER'],
      highlights: [
        'One of the most affordable options for MBBS abroad',
        'Quality medical education with practical training',
        'Experienced faculty members',
        'Low cost of living',
        'Simple admission process without entrance exams'
      ]
    },
    {
      name: 'Manila Central University',
      location: 'Manila, Philippines',
      established: '1904',
      rank: '902',
      tuitionFee: '$5,000 - $7,000 per year',
      duration: '4 years (after pre-med)',
      language: 'English',
      recognition: ['WHO', 'MCI/NMC', 'ECFMG'],
      highlights: [
        'American pattern of education',
        'Strong emphasis on research and innovation',
        'High-tech laboratories and hospitals',
        'Good placement records',
        'Culturally diverse environment'
      ]
    },
    {
      name: 'Jilin University',
      location: 'Changchun, China',
      established: '1946',
      rank: '484',
      tuitionFee: '$6,000 - $8,000 per year',
      duration: '6 years',
      language: 'English',
      recognition: ['WHO', 'MCI/NMC', 'FAIMER'],
      highlights: [
        'One of China\'s key comprehensive universities',
        'State-of-the-art infrastructure',
        'Strong research orientation',
        'Scholarships available for international students',
        'Excellent clinical exposure in affiliated hospitals'
      ]
    }
  ];

  return (
    <main className="pt-24 pb-16">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-4xl font-bold text-gray-900 mb-6">MBBS College Profiles</h1>
          
          <p className="lead text-xl text-gray-700 mb-8">
            Explore detailed profiles of top medical universities offering MBBS programs for international students.
            Compare institutions across different countries to find your ideal medical school.
          </p>
          
          <div className="mb-8">
            <div className="flex flex-wrap gap-3 mb-6">
              <button className="px-4 py-2 bg-primary-color text-white rounded-full text-sm font-medium">All Countries</button>
              <button className="px-4 py-2 bg-gray-100 hover:bg-gray-200 text-gray-800 rounded-full text-sm font-medium">Russia</button>
              <button className="px-4 py-2 bg-gray-100 hover:bg-gray-200 text-gray-800 rounded-full text-sm font-medium">Ukraine</button>
              <button className="px-4 py-2 bg-gray-100 hover:bg-gray-200 text-gray-800 rounded-full text-sm font-medium">Kazakhstan</button>
              <button className="px-4 py-2 bg-gray-100 hover:bg-gray-200 text-gray-800 rounded-full text-sm font-medium">Kyrgyzstan</button>
              <button className="px-4 py-2 bg-gray-100 hover:bg-gray-200 text-gray-800 rounded-full text-sm font-medium">Philippines</button>
              <button className="px-4 py-2 bg-gray-100 hover:bg-gray-200 text-gray-800 rounded-full text-sm font-medium">China</button>
            </div>
          </div>
          
          <div className="space-y-8">
            {colleges.map((college, index) => (
              <div key={index} className="bg-white rounded-xl shadow-sm overflow-hidden border border-gray-100 hover:shadow-md transition-shadow">
                <div className="h-2 bg-primary-color"></div>
                <div className="p-6">
                  <div className="flex flex-col md:flex-row md:justify-between md:items-start">
                    <div>
                      <h2 className="text-2xl font-semibold mb-2 text-gray-800">{college.name}</h2>
                      <p className="text-gray-600 mb-4">{college.location}</p>
                      
                      <div className="flex flex-wrap gap-2 mb-4">
                        <span className="px-3 py-1 bg-blue-50 text-blue-600 rounded-full text-xs font-medium">
                          Est. {college.established}
                        </span>
                        {college.rank && (
                          <span className="px-3 py-1 bg-green-50 text-green-600 rounded-full text-xs font-medium">
                            World Rank: {college.rank}
                          </span>
                        )}
                        <span className="px-3 py-1 bg-purple-50 text-purple-600 rounded-full text-xs font-medium">
                          {college.duration}
                        </span>
                        <span className="px-3 py-1 bg-yellow-50 text-yellow-600 rounded-full text-xs font-medium">
                          {college.language} Medium
                        </span>
                      </div>
                    </div>
                    
                    <div className="mt-4 md:mt-0 md:ml-4 md:text-right">
                      <div className="text-sm text-gray-500 mb-1">Annual Tuition Fee</div>
                      <div className="text-lg font-semibold text-primary-color">{college.tuitionFee}</div>
                    </div>
                  </div>
                  
                  <div className="mt-5 pt-5 border-t border-gray-100">
                    <h3 className="text-sm font-medium text-gray-700 mb-3">Key Highlights:</h3>
                    <ul className="grid md:grid-cols-2 gap-x-4 gap-y-2">
                      {college.highlights.map((highlight, idx) => (
                        <li key={idx} className="flex items-start">
                          <svg className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                          </svg>
                          <span className="text-gray-600 text-sm">{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="mt-5 pt-5 border-t border-gray-100">
                    <h3 className="text-sm font-medium text-gray-700 mb-3">Recognitions:</h3>
                    <div className="flex flex-wrap gap-2">
                      {college.recognition.map((recognition, idx) => (
                        <span key={idx} className="px-2 py-1 bg-gray-100 text-gray-600 rounded text-xs">
                          {recognition}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <div className="mt-6 flex flex-col sm:flex-row gap-3">
                    <button className="px-4 py-2 bg-primary-color text-white rounded hover:bg-blue-700 transition-colors text-sm flex-1">
                      View Detailed Profile
                    </button>
                    <button className="px-4 py-2 border border-primary-color text-primary-color rounded hover:bg-blue-50 transition-colors text-sm flex-1">
                      Request Information
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-12 text-center">
            <p className="text-gray-600 mb-6">
              Want personalized guidance on selecting the right medical university?
            </p>
            <Link 
              href="/contact" 
              className="bg-primary-color hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-md inline-flex items-center transition-all duration-300"
            >
              Speak with an Advisor
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
};

export default CollegesPage; 