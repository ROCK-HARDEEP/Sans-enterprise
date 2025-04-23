'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRightIcon, ArrowLongRightIcon, ChevronRightIcon, StarIcon } from '../components/icons/ArrowIcons';

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="hero-section bg-gradient-to-r from-blue-50 to-blue-100 pt-16 pb-24 md:pt-24 md:pb-32">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap items-center">
            <div className="w-full lg:w-1/2 mb-10 lg:mb-0" data-aos="fade-right">
              <div className="relative z-10">
                <span className="bg-blue-600 text-white text-sm font-medium px-3 py-1 rounded-full mb-4 inline-block">
                  Welcome to sans International
                </span>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
                  Your Gateway to <span className="text-primary-color">Global Education</span>
                </h1>
                <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-xl">
                  We help students achieve their dreams of studying abroad with expert guidance, university admissions, test preparation, and visa assistance.
                </p>
                <div className="flex flex-wrap gap-4">
                  <Link 
                    href="/contact" 
                    className="button bg-primary-color hover:bg-blue-700 text-white py-3 px-6 rounded-md font-medium text-center transition-all"
                  >
                    Get Free Counselling
                  </Link>
                  <Link 
                    href="/events" 
                    className="button border border-gray-300 hover:border-primary-color hover:text-primary-color bg-white text-gray-700 py-3 px-6 rounded-md font-medium text-center transition-all"
                  >
                    Upcoming Events
                  </Link>
                </div>
              </div>
            </div>
            <div className="w-full lg:w-1/2" data-aos="fade-left">
              <div className="relative">
                <Image
                  src="/img/hero-banner.jpg"
                  alt="Students studying abroad"
                  width={700}
                  height={500}
                  className="w-full h-auto rounded-lg shadow-2xl"
                  priority
                />
                <div className="absolute -bottom-10 -left-10 bg-white p-4 rounded-lg shadow-lg hidden md:block">
                  <div className="flex items-center">
                    <div className="flex -space-x-2 mr-4">
                      <Image src="/img/student-1.jpg" alt="Student" width={40} height={40} className="rounded-full border-2 border-white" />
                      <Image src="/img/student-2.jpg" alt="Student" width={40} height={40} className="rounded-full border-2 border-white" />
                      <Image src="/img/student-3.jpg" alt="Student" width={40} height={40} className="rounded-full border-2 border-white" />
                    </div>
                    <div>
                      <p className="text-sm font-medium text-gray-900">500+ Students</p>
                      <p className="text-xs text-gray-500">Enrolled this year</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Stats */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { number: '15+', text: 'Years Experience' },
              { number: '200+', text: 'Partner Universities' },
              { number: '10,000+', text: 'Students Placed' },
              { number: '20+', text: 'Countries' },
            ].map((stat, index) => (
              <div key={index} className="text-center" data-aos="fade-up" data-aos-delay={100 * index}>
                <p className="text-4xl md:text-5xl font-bold text-primary-color mb-2">{stat.number}</p>
                <p className="text-gray-600">{stat.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Popular Study Destinations */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16" data-aos="fade-up">
            <span className="text-primary-color font-medium">Top Choices for Students</span>
            <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-4">Popular Study Destinations</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Explore top countries for international education with world-class universities and quality learning environments.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                country: 'United Kingdom',
                image: '/img/destinations/uk.jpg',
                href: '/study-abroad/uk',
                universities: '140+ Universities',
                icon: '🇬🇧'
              },
              {
                country: 'United States',
                image: '/img/destinations/usa.jpg',
                href: '/study-abroad/usa',
                universities: '250+ Universities',
                icon: '🇺🇸'
              },
              {
                country: 'Canada',
                image: '/img/destinations/canada.jpg',
                href: '/study-abroad/canada',
                universities: '110+ Universities',
                icon: '🇨🇦'
              },
              {
                country: 'Australia',
                image: '/img/destinations/australia.jpg',
                href: '/study-abroad/australia',
                universities: '45+ Universities',
                icon: '🇦🇺'
              },
              {
                country: 'New Zealand',
                image: '/img/destinations/new-zealand.jpg',
                href: '/study-abroad/new-zealand',
                universities: '25+ Universities',
                icon: '🇳🇿'
              },
              {
                country: 'Germany',
                image: '/img/destinations/germany.jpg',
                href: '/study-abroad/germany',
                universities: '80+ Universities',
                icon: '🇩🇪'
              },
            ].map((destination, index) => (
              <div 
                key={destination.country} 
                className="group bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all" 
                data-aos="fade-up" 
                data-aos-delay={index * 100}
              >
                <Link href={destination.href} className="block relative">
                  <div className="relative h-56 overflow-hidden">
                    <Image
                      src={destination.image}
                      alt={destination.country}
                      width={500}
                      height={300}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                    <span className="absolute top-4 left-4 text-2xl">{destination.icon}</span>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-primary-color transition-colors">
                      Study in {destination.country}
                    </h3>
                    <p className="text-gray-600 mb-4">{destination.universities}</p>
                    <span className="inline-flex items-center text-primary-color font-medium">
                      Learn More
                      <ArrowRightIcon className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform" aria-hidden="true" />
                    </span>
                  </div>
                </Link>
              </div>
            ))}
          </div>

          <div className="text-center mt-12" data-aos="fade-up">
            <Link 
              href="/study-abroad" 
              className="inline-flex items-center font-medium text-primary-color hover:text-blue-700"
            >
              Explore All Destinations
              <ArrowLongRightIcon className="h-5 w-5 ml-1" aria-hidden="true" />
            </Link>
          </div>
        </div>
      </section>

      {/* Our Services */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16" data-aos="fade-up">
            <span className="text-primary-color font-medium">What We Offer</span>
            <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-4">Our Services</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Comprehensive support for your international education journey, from university selection to visa approval.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: 'Career Counseling',
                description: 'Expert guidance on choosing the right course and country based on your academic profile and career goals.',
                icon: '/img/icons/career-counseling.svg',
                href: '/career-counseling'
              },
              {
                title: 'University Selection',
                description: 'Find the perfect university from our network of 200+ partner institutions across 20+ countries worldwide.',
                icon: '/img/icons/university.svg',
                href: '/university-selection'
              },
              {
                title: 'Application Assistance',
                description: 'Step-by-step support throughout the application process, from document preparation to submission.',
                icon: '/img/icons/application.svg',
                href: '/application-assistance'
              },
              {
                title: 'Test Preparation',
                description: 'Quality coaching for IELTS, TOEFL, GRE, GMAT, SAT, and other standardized tests required for admissions.',
                icon: '/img/icons/test-prep.svg',
                href: '/test-preparations'
              },
              {
                title: 'Visa Guidance',
                description: 'Expert assistance for student visa applications with high success rates and interview preparation.',
                icon: '/img/icons/visa.svg',
                href: '/visa-assistance'
              },
              {
                title: 'Scholarship Assistance',
                description: 'Help with identifying and applying for scholarships and financial aid opportunities.',
                icon: '/img/icons/scholarship.svg',
                href: '/scholarships'
              }
            ].map((service, index) => (
              <div 
                key={service.title} 
                className="bg-white rounded-lg p-6 border border-gray-100 hover:border-primary-color shadow-sm hover:shadow-md transition-all"
                data-aos="fade-up" 
                data-aos-delay={index * 100}
              >
                <div className="w-14 h-14 bg-blue-50 rounded-lg flex items-center justify-center mb-5">
                  <Image src={service.icon} width={30} height={30} alt={service.title} />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
                <p className="text-gray-600 mb-4">{service.description}</p>
                <Link 
                  href={service.href} 
                  className="inline-flex items-center text-primary-color font-medium hover:text-blue-700"
                >
                  Learn More
                  <ChevronRightIcon className="h-4 w-4 ml-1" aria-hidden="true" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Partner Universities */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16" data-aos="fade-up">
            <span className="text-primary-color font-medium">Our Global Network</span>
            <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-4">Partner Universities</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We collaborate with top-ranked universities worldwide to provide students with quality education opportunities.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 items-center">
            {[
              { name: 'University of Oxford', logo: '/img/universities/oxford.png' },
              { name: 'Stanford University', logo: '/img/universities/stanford.png' },
              { name: 'MIT', logo: '/img/universities/mit.png' },
              { name: 'University of Toronto', logo: '/img/universities/toronto.png' },
              { name: 'University of Melbourne', logo: '/img/universities/melbourne.png' },
              { name: 'University of Sydney', logo: '/img/universities/sydney.png' },
              { name: 'ETH Zurich', logo: '/img/universities/eth.png' },
              { name: 'National University of Singapore', logo: '/img/universities/nus.png' },
              { name: 'University of British Columbia', logo: '/img/universities/ubc.png' },
              { name: 'University of Edinburgh', logo: '/img/universities/edinburgh.png' }
            ].map((university, index) => (
              <div 
                key={university.name} 
                className="flex justify-center p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-all"
                data-aos="fade-up" 
                data-aos-delay={(index % 5) * 100}
              >
                <Image 
                  src={university.logo} 
                  alt={university.name} 
                  width={120} 
                  height={60} 
                  className="h-12 object-contain opacity-80 hover:opacity-100 transition-opacity"
                />
              </div>
            ))}
          </div>

          <div className="text-center mt-12" data-aos="fade-up">
            <Link 
              href="/partnered-universities" 
              className="inline-flex items-center font-medium text-primary-color hover:text-blue-700"
            >
              View All Partner Universities
              <ArrowLongRightIcon className="h-5 w-5 ml-1" aria-hidden="true" />
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16" data-aos="fade-up">
            <span className="text-primary-color font-medium">Success Stories</span>
            <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-4">Student Testimonials</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Hear what our students have to say about their experience with sans International.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                name: 'Priya Sharma',
                position: 'MBA Student',
                university: 'University of Toronto',
                image: '/img/testimonials/student-1.jpg',
                quote: 'sans helped me secure admission to my dream business school with a scholarship. Their counselors guided me through every step of the process.'
              },
              {
                name: 'Rahul Patel',
                position: 'Engineering Student',
                university: 'University of Melbourne',
                image: '/img/testimonials/student-2.jpg',
                quote: 'From test preparation to visa assistance, everything was handled professionally. I received multiple offers and could choose the best option.'
              },
              {
                name: 'Ananya Desai',
                position: 'Computer Science Student',
                university: 'Stanford University',
                image: '/img/testimonials/student-3.jpg',
                quote: 'Their personalized approach and attention to detail made my application stand out. I\'m grateful for their support throughout my journey.'
              }
            ].map((testimonial, index) => (
              <div 
                key={testimonial.name} 
                className="bg-white rounded-lg p-8 border border-gray-100 shadow-md hover:shadow-lg transition-all"
                data-aos="fade-up" 
                data-aos-delay={index * 100}
              >
                <div className="flex items-center mb-6">
                  <div className="mr-4">
                    <Image 
                      src={testimonial.image} 
                      alt={testimonial.name} 
                      width={60} 
                      height={60} 
                      className="rounded-full"
                    />
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-gray-900">{testimonial.name}</h4>
                    <p className="text-gray-600 text-sm">{testimonial.position}, {testimonial.university}</p>
                  </div>
                </div>
                <p className="text-gray-600 italic">"{testimonial.quote}"</p>
                <div className="flex mt-4">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <StarIcon key={star} className="h-5 w-5 text-yellow-400" aria-hidden="true" />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary-color">
        <div className="container mx-auto px-4">
          <div className="text-center text-white max-w-3xl mx-auto" data-aos="fade-up">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Begin Your Study Abroad Journey Today</h2>
            <p className="text-blue-100 text-lg mb-8">
              Speak with our expert counselors to discover the perfect educational path for your career goals and aspirations.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link 
                href="/contact" 
                className="button bg-white text-primary-color py-3 px-8 rounded-md font-medium transition-all hover:bg-gray-100 hover:shadow-lg"
              >
                Book a Free Consultation
              </Link>
              <Link 
                href="/study-abroad" 
                className="button border border-white text-white py-3 px-8 rounded-md font-medium transition-all hover:bg-blue-700"
              >
                Explore Study Options
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Blog Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16" data-aos="fade-up">
            <span className="text-primary-color font-medium">Latest Updates</span>
            <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-4">From Our Blog</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Helpful resources, tips, and insights for your international education journey.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: 'How to Choose the Right University for Your Career Goals',
                excerpt: 'Learn the key factors to consider when selecting a university that aligns with your long-term career objectives.',
                image: '/img/blog/choose-university.jpg',
                date: 'June 15, 2023',
                category: 'Study Abroad Tips',
                href: '/blog/choose-right-university'
              },
              {
                title: 'A Complete Guide to Student Visa Application Process',
                excerpt: 'Everything you need to know about preparing and submitting a successful student visa application.',
                image: '/img/blog/visa-guide.jpg',
                date: 'May 28, 2023',
                category: 'Visa Guidance',
                href: '/blog/visa-application-guide'
              },
              {
                title: 'Top Scholarships for International Students in 2023',
                excerpt: 'Discover the best scholarship opportunities available for students planning to study abroad this year.',
                image: '/img/blog/scholarships.jpg',
                date: 'April 10, 2023',
                category: 'Scholarships',
                href: '/blog/top-scholarships-2023'
              }
            ].map((post, index) => (
              <div 
                key={post.title} 
                className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-all"
                data-aos="fade-up" 
                data-aos-delay={index * 100}
              >
                <Link href={post.href} className="block">
                  <div className="relative h-48 overflow-hidden">
                    <Image
                      src={post.image}
                      alt={post.title}
                      width={400}
                      height={250}
                      className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-6">
                    <div className="flex items-center mb-3">
                      <span className="text-xs text-white bg-primary-color px-2 py-1 rounded-full">{post.category}</span>
                      <span className="text-xs text-gray-500 ml-3">{post.date}</span>
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3 hover:text-primary-color transition-colors">
                      {post.title}
                    </h3>
                    <p className="text-gray-600 mb-4 text-sm">{post.excerpt}</p>
                    <span className="inline-flex items-center text-primary-color font-medium text-sm">
                      Read More
                      <ChevronRightIcon className="h-4 w-4 ml-1" aria-hidden="true" />
                    </span>
                  </div>
                </Link>
              </div>
            ))}
          </div>

          <div className="text-center mt-12" data-aos="fade-up">
            <Link 
              href="/blog" 
              className="inline-flex items-center font-medium text-primary-color hover:text-blue-700"
            >
              View All Articles
              <ArrowLongRightIcon className="h-5 w-5 ml-1" aria-hidden="true" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
} 