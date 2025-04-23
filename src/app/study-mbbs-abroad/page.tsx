import React from 'react';
import Link from 'next/link';

export const metadata = {
  title: 'Study MBBS Abroad | sans',
  description: 'Explore opportunities to study MBBS abroad with sans. Learn about top medical universities, admission requirements, and more.',
};

const StudyMBBSAbroadPage = () => {
  return (
    <main className="pt-24 pb-16">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-gray-900 mb-6">Study MBBS Abroad</h1>
          
          <div className="prose prose-lg max-w-none">
            <p className="lead text-xl text-gray-700 mb-6">
              Pursue your medical career at prestigious international universities with sans's guidance.
            </p>
            
            <p className="mb-6">
              Studying MBBS abroad has become an increasingly popular choice for aspiring medical students. 
              With sans's expert guidance, you can navigate the complex process of applying to international 
              medical universities and secure admissions in top institutions worldwide.
            </p>
            
            <div className="bg-blue-50 rounded-lg p-6 my-8 border border-blue-100">
              <h2 className="text-2xl font-semibold mb-4 text-blue-800">Why Study MBBS Abroad?</h2>
              <ul className="list-disc pl-5 space-y-2 text-gray-700">
                <li>World-class medical education and training</li>
                <li>Internationally recognized degrees</li>
                <li>Advanced infrastructure and research facilities</li>
                <li>Affordable tuition fees in many countries</li>
                <li>No entrance exams required by many universities</li>
                <li>Diverse clinical exposure and global perspective</li>
                <li>Opportunity to learn new languages and experience different cultures</li>
              </ul>
            </div>
            
            <h2 className="text-2xl font-semibold mt-8 mb-4">Popular Destinations for MBBS</h2>
            <p className="mb-4">
              We help students secure admissions in reputed medical universities across these countries:
            </p>
            
            <div className="grid md:grid-cols-3 gap-4 mb-8">
              <div className="bg-white p-4 rounded-lg shadow-sm border text-center">
                <h3 className="font-medium text-lg mb-1">Russia</h3>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-sm border text-center">
                <h3 className="font-medium text-lg mb-1">Ukraine</h3>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-sm border text-center">
                <h3 className="font-medium text-lg mb-1">Kazakhstan</h3>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-sm border text-center">
                <h3 className="font-medium text-lg mb-1">Kyrgyzstan</h3>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-sm border text-center">
                <h3 className="font-medium text-lg mb-1">Philippines</h3>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-sm border text-center">
                <h3 className="font-medium text-lg mb-1">China</h3>
              </div>
            </div>
            
            <h2 className="text-2xl font-semibold mt-8 mb-4">Our Services for MBBS Aspirants</h2>
            <ul className="list-disc pl-5 space-y-2 mb-6">
              <li>Personalized counseling on country and university selection</li>
              <li>Complete admission assistance and application processing</li>
              <li>Documentation and visa guidance</li>
              <li>Preparation for medical licensing exams</li>
              <li>Pre-departure orientation and travel arrangements</li>
              <li>Post-admission support and guidance</li>
            </ul>
            
            <div className="text-center my-10">
              <Link href="/study-mbbs-abroad/colleges" className="bg-primary-color hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-full inline-flex items-center transition-all duration-300">
                Explore College Profiles
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default StudyMBBSAbroadPage; 