import React from 'react';

export const metadata = {
  title: 'About Us | sans',
  description: 'Learn more about sans and our mission to help students achieve their educational goals.',
};

const AboutPage = () => {
  return (
    <main className="pt-24 pb-16">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-gray-900 mb-6">About Us</h1>
          
          <div className="prose prose-lg max-w-none">
            <p className="lead text-xl text-gray-700 mb-6">
              Welcome to sans, your trusted partner in educational guidance and counseling.
            </p>
            
            <p className="mb-4">
              sans is dedicated to providing comprehensive educational counseling services to students 
              seeking quality education options both in India and abroad. With years of experience in 
              the education sector, we've helped thousands of students achieve their academic goals 
              and pursue their dream careers.
            </p>
            
            <h2 className="text-2xl font-semibold mt-8 mb-4">Our Mission</h2>
            <p className="mb-4">
              Our mission is to empower students with the knowledge, resources, and support they need 
              to make informed decisions about their education and future careers. We believe in 
              providing personalized guidance that considers each student's unique strengths, interests, 
              and aspirations.
            </p>
            
            <h2 className="text-2xl font-semibold mt-8 mb-4">Our Vision</h2>
            <p className="mb-4">
              We envision a world where every student has access to quality education and the opportunity 
              to realize their full potential, regardless of their background or circumstances.
            </p>
            
            <h2 className="text-2xl font-semibold mt-8 mb-4">Why Choose Us</h2>
            <ul className="list-disc pl-5 space-y-2 mb-6">
              <li>Experienced counselors with in-depth knowledge of educational systems worldwide</li>
              <li>Personalized guidance tailored to individual student needs</li>
              <li>Comprehensive support throughout the application process</li>
              <li>Strong network of partner institutions in India and abroad</li>
              <li>Transparent and ethical practices</li>
              <li>Ongoing support even after admission</li>
            </ul>
          </div>
        </div>
      </div>
    </main>
  );
};

export default AboutPage; 