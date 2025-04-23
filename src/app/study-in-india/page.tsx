import React from 'react';
import Link from 'next/link';

export const metadata = {
  title: 'Study in India | sans',
  description: 'Explore the best educational opportunities in India with sans. Learn about courses, universities, and admission processes.',
};

const StudyInIndiaPage = () => {
  return (
    <main className="pt-24 pb-16">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-gray-900 mb-6">Study in India</h1>
          
          <div className="prose prose-lg max-w-none">
            <p className="lead text-xl text-gray-700 mb-6">
              Discover world-class education opportunities across India's premier institutions.
            </p>
            
            <p className="mb-6">
              India has emerged as a global education hub with prestigious universities, 
              diverse course offerings, and quality education at affordable costs. Whether you're 
              looking for undergraduate, postgraduate, or research opportunities, India offers 
              a wide range of options across various disciplines.
            </p>
            
            <div className="bg-blue-50 rounded-lg p-6 my-8 border border-blue-100">
              <h2 className="text-2xl font-semibold mb-4 text-blue-800">Why Study in India?</h2>
              <ul className="list-disc pl-5 space-y-2 text-gray-700">
                <li>Globally recognized degrees and qualifications</li>
                <li>Diverse range of courses and specializations</li>
                <li>Affordable education with high return on investment</li>
                <li>Rich cultural experience and heritage</li>
                <li>Growing research and innovation ecosystem</li>
                <li>Strong industry connections and placement support</li>
              </ul>
            </div>
            
            <h2 className="text-2xl font-semibold mt-8 mb-4">Popular Programs</h2>
            <p className="mb-4">
              India offers a wide variety of academic programs across disciplines. Some of the 
              most sought-after programs include:
            </p>
            
            <div className="grid md:grid-cols-2 gap-4 mb-8">
              <div className="bg-white p-4 rounded-lg shadow-sm border">
                <h3 className="font-medium text-lg mb-2">Engineering & Technology</h3>
                <p className="text-gray-600 text-sm">Including Computer Science, IT, Mechanical, Civil, and more</p>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-sm border">
                <h3 className="font-medium text-lg mb-2">Management Studies</h3>
                <p className="text-gray-600 text-sm">MBA, BBA, and specialized management programs</p>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-sm border">
                <h3 className="font-medium text-lg mb-2">Medical Sciences</h3>
                <p className="text-gray-600 text-sm">MBBS, Dental, Pharmacy, Nursing, and Allied Health</p>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-sm border">
                <h3 className="font-medium text-lg mb-2">Arts & Humanities</h3>
                <p className="text-gray-600 text-sm">Literature, Fine Arts, Liberal Arts, and Social Sciences</p>
              </div>
            </div>
            
            <div className="text-center my-10">
              <Link href="/study-in-india/courses" className="bg-primary-color hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-full inline-flex items-center transition-all duration-300">
                Explore 60+ Courses
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

export default StudyInIndiaPage; 