import React from 'react';
import Link from 'next/link';

export const metadata = {
  title: '60+ Courses in India | sans',
  description: 'Explore over 60 academic programs and courses available for study in India across various disciplines and universities.',
};

const CoursesPage = () => {
  const courseCategories = [
    {
      category: 'Engineering & Technology',
      courses: [
        'Computer Science Engineering',
        'Mechanical Engineering',
        'Electrical Engineering',
        'Civil Engineering',
        'Electronics & Communication Engineering',
        'Information Technology',
        'Chemical Engineering',
        'Aerospace Engineering',
        'Biotechnology Engineering',
        'Petroleum Engineering'
      ]
    },
    {
      category: 'Medical & Health Sciences',
      courses: [
        'MBBS (Medicine)',
        'BDS (Dental Surgery)',
        'BAMS (Ayurvedic Medicine)',
        'BHMS (Homeopathic Medicine)',
        'B.Pharm (Pharmacy)',
        'Nursing',
        'Physiotherapy',
        'Medical Laboratory Technology',
        'Occupational Therapy',
        'Veterinary Science'
      ]
    },
    {
      category: 'Management & Business',
      courses: [
        'MBA (Master of Business Administration)',
        'BBA (Bachelor of Business Administration)',
        'Finance Management',
        'Marketing Management',
        'Human Resource Management',
        'Operations Management',
        'International Business',
        'Hospitality Management',
        'Event Management',
        'Retail Management'
      ]
    },
    {
      category: 'Sciences',
      courses: [
        'BSc Physics',
        'BSc Chemistry',
        'BSc Mathematics',
        'BSc Biology',
        'BSc Computer Science',
        'BSc Statistics',
        'BSc Biotechnology',
        'BSc Microbiology',
        'BSc Agriculture',
        'BSc Environmental Science'
      ]
    },
    {
      category: 'Arts & Humanities',
      courses: [
        'BA English Literature',
        'BA History',
        'BA Political Science',
        'BA Psychology',
        'BA Sociology',
        'BA Economics',
        'BA Philosophy',
        'BA Journalism & Mass Communication',
        'BA Fine Arts',
        'BA Foreign Languages'
      ]
    },
    {
      category: 'Law & Legal Studies',
      courses: [
        'LLB (Bachelor of Laws)',
        'Integrated BA LLB',
        'Corporate Law',
        'Constitutional Law',
        'Criminal Law',
        'Intellectual Property Law',
        'International Law',
        'Human Rights Law',
        'Environmental Law',
        'Cyber Law'
      ]
    }
  ];

  return (
    <main className="pt-24 pb-16">
      <div className="container mx-auto px-6">
        <div className="max-w-5xl mx-auto">
          <h1 className="text-4xl font-bold text-gray-900 mb-6">60+ Courses in India</h1>
          
          <p className="lead text-xl text-gray-700 mb-8">
            Discover a wide range of academic programs available at premier institutions across India.
            From engineering to medicine, arts to management, find the perfect course for your career aspirations.
          </p>
          
          <div className="bg-blue-50 rounded-lg p-6 my-8 border border-blue-100">
            <h2 className="text-2xl font-semibold mb-4 text-blue-800">Why Choose India for Higher Education?</h2>
            <ul className="list-disc pl-5 space-y-2 text-gray-700">
              <li>World-class institutions with international recognition</li>
              <li>Affordable tuition fees compared to Western countries</li>
              <li>Diverse range of specializations and programs</li>
              <li>Strong focus on practical and industry-relevant education</li>
              <li>Vibrant cultural experience and global networking opportunities</li>
            </ul>
          </div>
          
          <div className="space-y-12 mt-10">
            {courseCategories.map((category, index) => (
              <div key={index} className="bg-white rounded-xl shadow-sm p-6 border border-gray-100">
                <h2 className="text-2xl font-semibold mb-5 text-gray-800 pb-2 border-b">
                  {category.category}
                </h2>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {category.courses.map((course, idx) => (
                    <div key={idx} className="bg-gray-50 rounded-lg p-3 hover:bg-blue-50 transition-colors">
                      <span className="text-gray-800">{course}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-12 text-center">
            <p className="text-gray-600 mb-6">
              This is just a selection of popular courses available in India. 
              Contact our education counselors for comprehensive information about specific programs.
            </p>
            <Link 
              href="/contact" 
              className="bg-primary-color hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-md inline-flex items-center transition-all duration-300"
            >
              Get Expert Guidance
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

export default CoursesPage; 