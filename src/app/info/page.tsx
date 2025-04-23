import React from 'react';
import Link from 'next/link';

export const metadata = {
  title: 'Information Center | sans',
  description: 'Access useful resources, gallery, and important links for students looking to study in India or abroad.',
};

const InfoPage = () => {
  return (
    <main className="pt-24 pb-16">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-gray-900 mb-6">Information Center</h1>
          
          <p className="lead text-xl text-gray-700 mb-8">
            Welcome to our information hub. Find everything you need to know about studying in India or abroad.
          </p>
          
          <div className="grid md:grid-cols-2 gap-8 mt-10">
            <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow">
              <div className="h-48 bg-blue-500 flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-20 w-20 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </div>
              <div className="p-6">
                <h2 className="text-xl font-semibold mb-3">Gallery</h2>
                <p className="text-gray-600 mb-5">
                  Browse through photos of our partner universities, campus tours, student events, 
                  orientation programs, and more.
                </p>
                <Link 
                  href="/info/gallery" 
                  className="inline-flex items-center font-medium text-primary-color hover:text-blue-700"
                >
                  View Gallery
                  <svg className="ml-2 h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </Link>
              </div>
            </div>
            
            <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow">
              <div className="h-48 bg-green-500 flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-20 w-20 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
                </svg>
              </div>
              <div className="p-6">
                <h2 className="text-xl font-semibold mb-3">Useful Links</h2>
                <p className="text-gray-600 mb-5">
                  Access important resources, embassy information, scholarship portals, 
                  visa guidelines, and other useful links for your education journey.
                </p>
                <Link 
                  href="/info/useful-links" 
                  className="inline-flex items-center font-medium text-primary-color hover:text-blue-700"
                >
                  Browse Useful Links
                  <svg className="ml-2 h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
          
          <div className="bg-blue-50 rounded-lg p-8 mt-12 border border-blue-100">
            <h2 className="text-2xl font-semibold mb-4 text-blue-800">Need More Information?</h2>
            <p className="text-gray-700 mb-6">
              If you can't find what you're looking for, our education counselors are always ready to help.
              Schedule a free consultation and get personalized guidance for your education journey.
            </p>
            <Link 
              href="/contact" 
              className="bg-primary-color hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-md inline-flex items-center transition-all duration-300"
            >
              Contact Us
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

export default InfoPage; 