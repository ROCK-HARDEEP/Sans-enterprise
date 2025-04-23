import React from 'react';

export const metadata = {
  title: 'Contact Us | Sans Enterprise',
  description: 'Get in touch with Sans Enterprise for inquiries about studying in India or abroad. Our team is ready to assist you.',
};

const ContactPage = () => {
  return (
    <main className="pt-24 pb-16">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-4xl font-bold text-gray-900 mb-6">Contact Us</h1>
          
          <p className="lead text-xl text-gray-700 mb-10 max-w-3xl">
            Have questions or need guidance? Our education counselors are here to help you 
            make the right decisions for your academic future.
          </p>
          
          <div className="grid md:grid-cols-2 gap-10">
            <div>
              <div className="bg-white rounded-xl shadow-sm p-8 mb-8">
                <h2 className="text-2xl font-semibold mb-6">Get In Touch</h2>
                <form>
                  <div className="mb-6">
                    <label htmlFor="name" className="block text-gray-700 text-sm font-medium mb-2">Full Name *</label>
                    <input 
                      type="text" 
                      id="name" 
                      className="w-full px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary-color focus:border-transparent" 
                      required 
                    />
                  </div>
                  
                  <div className="mb-6">
                    <label htmlFor="email" className="block text-gray-700 text-sm font-medium mb-2">Email Address *</label>
                    <input 
                      type="email" 
                      id="email" 
                      className="w-full px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary-color focus:border-transparent" 
                      required 
                    />
                  </div>
                  
                  <div className="mb-6">
                    <label htmlFor="phone" className="block text-gray-700 text-sm font-medium mb-2">Phone Number *</label>
                    <input 
                      type="tel" 
                      id="phone" 
                      className="w-full px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary-color focus:border-transparent" 
                      required 
                    />
                  </div>
                  
                  <div className="mb-6">
                    <label htmlFor="inquiry" className="block text-gray-700 text-sm font-medium mb-2">Inquiry Type</label>
                    <select 
                      id="inquiry" 
                      className="w-full px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary-color focus:border-transparent"
                    >
                      <option value="">Select an option</option>
                      <option value="study-india">Study in India</option>
                      <option value="study-mbbs-abroad">Study MBBS Abroad</option>
                      <option value="university-info">University Information</option>
                      <option value="admission">Admission Process</option>
                      <option value="visa">Visa Guidance</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                  
                  <div className="mb-6">
                    <label htmlFor="message" className="block text-gray-700 text-sm font-medium mb-2">Your Message *</label>
                    <textarea 
                      id="message" 
                      rows={5}
                      className="w-full px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary-color focus:border-transparent" 
                      required
                    ></textarea>
                  </div>
                  
                  <button 
                    type="submit"
                    className="w-full bg-primary-color hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-md transition-all duration-300"
                  >
                    Submit Inquiry
                  </button>
                </form>
              </div>
            </div>
            
            <div>
              <div className="bg-white rounded-xl shadow-sm p-8 mb-8">
                <h2 className="text-2xl font-semibold mb-6">Contact Information</h2>
                
                <div className="space-y-6">
                  <div className="flex items-start">
                    <div className="flex-shrink-0 mt-1">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-primary-color" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    </div>
                    <div className="ml-4">
                      <h3 className="text-lg font-medium text-gray-900">Our Office</h3>
                      <address className="mt-1 text-gray-600 not-italic">
                        123 Education Street<br />
                        Mumbai, India 400001<br />
                        India
                      </address>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="flex-shrink-0 mt-1">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-primary-color" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                    </div>
                    <div className="ml-4">
                      <h3 className="text-lg font-medium text-gray-900">Phone</h3>
                      <p className="mt-1 text-gray-600">
                        <a href="tel:+91221234567890" className="hover:text-primary-color">+91 22 1234 5678</a>
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="flex-shrink-0 mt-1">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-primary-color" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <div className="ml-4">
                      <h3 className="text-lg font-medium text-gray-900">Email</h3>
                      <p className="mt-1 text-gray-600">
                        <a href="mailto:info@sansenterprise.com" className="hover:text-primary-color">info@sansenterprise.com</a>
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="flex-shrink-0 mt-1">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-primary-color" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <div className="ml-4">
                      <h3 className="text-lg font-medium text-gray-900">Office Hours</h3>
                      <p className="mt-1 text-gray-600">
                        Monday - Friday: 9:00 AM - 6:00 PM<br />
                        Saturday: 10:00 AM - 2:00 PM<br />
                        Sunday: Closed
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="bg-blue-50 rounded-xl p-8 border border-blue-100">
                <h3 className="text-xl font-semibold mb-4 text-blue-800">Schedule a Consultation</h3>
                <p className="text-gray-700 mb-4">
                  Prefer to speak with an education counselor directly? Schedule a free one-on-one consultation.
                </p>
                <button className="bg-primary-color hover:bg-blue-700 text-white font-medium py-2 px-6 rounded-md transition-all duration-300">
                  Book Appointment
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default ContactPage; 