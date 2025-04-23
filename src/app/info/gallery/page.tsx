'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { FaSearch, FaTimes, FaChevronLeft, FaChevronRight } from 'react-icons/fa';

export default function Page() {
  // Sample gallery data - in a real app, this would come from a database or CMS
  const galleryItems = [
    {
      id: 1,
      title: 'University Visit - London',
      category: 'University Visits',
      imageSrc: '/img/student-1.jpg',
      alt: 'Team visiting a partner university in London',
      description: 'Our team exploring academic partnerships with top London universities.',
      date: 'June 15, 2023',
    },
    {
      id: 2,
      title: 'Student Orientation Program',
      category: 'Events',
      imageSrc: '/img/student-2.jpg',
      alt: 'Students attending orientation program',
      description: 'New students getting acquainted with study abroad procedures and requirements.',
      date: 'July 10, 2023',
    },
    {
      id: 3,
      title: 'Campus Tour - Delhi University',
      category: 'Campus Tours',
      imageSrc: '/img/student-3.jpg',
      alt: 'Campus tour at Delhi University',
      description: 'Virtual tour of Delhi University facilities and departments.',
      date: 'August 5, 2023',
    },
    {
      id: 4,
      title: 'Education Fair 2023',
      category: 'Events',
      imageSrc: '/img/hero-banner.jpg',
      alt: 'sans booth at Education Fair 2023',
      description: 'Our booth at the International Education Fair connecting students with universities.',
      date: 'September 20, 2023',
    },
    {
      id: 5,
      title: 'Student Visa Counseling Session',
      category: 'Counseling',
      imageSrc: '/img/student-1.jpg',
      alt: 'Students receiving visa counseling',
      description: 'Expert advisors guiding students through visa application processes.',
      date: 'October 8, 2023',
    },
    {
      id: 6,
      title: 'Pre-Departure Orientation',
      category: 'Events',
      imageSrc: '/img/student-2.jpg',
      alt: 'Students at pre-departure orientation',
      description: 'Final briefing for students before they depart for international studies.',
      date: 'November 15, 2023',
    },
    {
      id: 7,
      title: 'University Fair',
      category: 'Events',
      imageSrc: '/img/student-3.jpg',
      alt: 'University representatives at education fair',
      description: 'Representatives from over 50 universities meeting prospective students.',
      date: 'December 1, 2023',
    },
    {
      id: 8,
      title: 'Campus Life - Moscow University',
      category: 'Campus Tours',
      imageSrc: '/img/student-1.jpg',
      alt: 'Campus life at Moscow University',
      description: 'Exploring dormitories, classrooms and recreational facilities at Moscow University.',
      date: 'January 12, 2024',
    },
    {
      id: 9,
      title: 'Alumni Meet 2023',
      category: 'Alumni',
      imageSrc: '/img/student-2.jpg',
      alt: 'sans alumni gathering',
      description: 'Annual gathering of sans alumni sharing their international education experiences.',
      date: 'February 8, 2024',
    },
    {
      id: 10,
      title: 'International Student Welcome Day',
      category: 'Events',
      imageSrc: '/img/student-3.jpg',
      alt: 'International students welcomed to campus',
      description: 'Celebrating cultural diversity with our international student community.',
      date: 'March 5, 2024',
    },
    {
      id: 11,
      title: 'Career Counseling Workshop',
      category: 'Counseling',
      imageSrc: '/img/student-1.jpg',
      alt: 'Students at career counseling workshop',
      description: 'Professional counselors helping students align education with career goals.',
      date: 'April 20, 2024',
    },
    {
      id: 12,
      title: 'Study Abroad Seminar',
      category: 'Events',
      imageSrc: '/img/student-2.jpg',
      alt: 'Study abroad informational seminar',
      description: 'Comprehensive information session about study opportunities worldwide.',
      date: 'May 15, 2024',
    },
  ];

  // State management
  const [filteredItems, setFilteredItems] = useState(galleryItems);
  const [activeCategory, setActiveCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [lightbox, setLightbox] = useState({
    isOpen: false,
    currentIndex: 0
  });
  const [showAll, setShowAll] = useState(false);

  // Categories for filtering
  const categories = [
    'All',
    'University Visits',
    'Campus Tours',
    'Events',
    'Counseling',
    'Alumni',
  ];

  // Filter items based on category and search
  useEffect(() => {
    let result = [...galleryItems];
    
    // Apply category filter
    if (activeCategory !== 'All') {
      result = result.filter(item => item.category === activeCategory);
    }
    
    // Apply search filter
    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      result = result.filter(item => 
        item.title.toLowerCase().includes(query) || 
        item.description.toLowerCase().includes(query) ||
        item.category.toLowerCase().includes(query)
      );
    }
    
    setFilteredItems(result);
  }, [activeCategory, searchQuery]);

  // Handle category filter change
  const handleCategoryChange = (category: string) => {
    setActiveCategory(category);
  };

  // Handle search input
  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
  };

  // Open lightbox
  const openLightbox = (index: number) => {
    setLightbox({
      isOpen: true,
      currentIndex: index
    });
    // Disable body scroll when lightbox is open
    document.body.style.overflow = 'hidden';
  };

  // Close lightbox
  const closeLightbox = () => {
    setLightbox({
      ...lightbox,
      isOpen: false
    });
    // Re-enable body scroll
    document.body.style.overflow = 'auto';
  };

  // Navigate through lightbox
  const navigate = (direction: number) => {
    const newIndex = lightbox.currentIndex + direction;
    const length = filteredItems.length;
    
    if (newIndex >= 0 && newIndex < length) {
      setLightbox({
        ...lightbox,
        currentIndex: newIndex
      });
    }
  };

  // Items to display
  const displayItems = showAll ? filteredItems : filteredItems.slice(0, 6);

  return (
    <main className="pt-24 pb-16">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="mb-12 text-center">
            <span className="block text-primary-color font-medium mb-2">Our Photo Gallery</span>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Explore Our Moments</h1>
            
            <p className="lead text-xl text-gray-700 mb-8 max-w-3xl mx-auto">
              Browse through our collection of photos showcasing our activities, events, 
              university visits, and student experiences from around the world.
            </p>
          </div>
          
          {/* Search and Filter Controls */}
          <div className="mb-10 space-y-6">
            {/* Search Bar */}
            <div className="relative max-w-md mx-auto">
              <input
                type="text"
                placeholder="Search gallery..."
                value={searchQuery}
                onChange={handleSearchChange}
                className="w-full bg-white rounded-full py-3 pl-5 pr-12 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary-color focus:border-transparent"
              />
              <div className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400">
                <FaSearch />
              </div>
            </div>
            
            {/* Category Filters */}
            <div className="flex flex-wrap justify-center gap-3">
              {categories.map((category, index) => (
                <button 
                  key={index} 
                  onClick={() => handleCategoryChange(category)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                    category === activeCategory 
                      ? 'bg-primary-color text-white shadow-md' 
                      : 'bg-gray-100 hover:bg-gray-200 text-gray-800'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
          
          {/* Gallery Grid */}
          <div className="relative min-h-[400px]">
            {filteredItems.length === 0 ? (
              <div className="text-center py-20">
                <h3 className="text-2xl font-medium text-gray-600 mb-2">No results found</h3>
                <p className="text-gray-500">Try adjusting your search or filter to find what you're looking for.</p>
              </div>
            ) : (
              <AnimatePresence>
                <motion.div 
                  layout
                  className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
                >
                  {displayItems.map((item, index) => (
                    <motion.div
                      key={item.id}
                      layout
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, scale: 0.9 }}
                      transition={{ duration: 0.4 }}
                      whileHover={{ y: -5 }}
                      className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 cursor-pointer"
                      onClick={() => openLightbox(index)}
                    >
                      <div className="relative h-64 w-full overflow-hidden">
                        <Image 
                          src={item.imageSrc} 
                          alt={item.alt} 
                          fill
                          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                          className="object-cover transition-transform duration-700 hover:scale-110" 
                          priority={item.id <= 6}
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4">
                          <h3 className="font-medium text-lg text-white">{item.title}</h3>
                          <p className="text-white/80 text-sm">{item.date}</p>
                        </div>
                      </div>
                      <div className="p-4">
                        <span className="text-xs font-semibold bg-blue-50 text-blue-600 px-2 py-1 rounded-full">
                          {item.category}
                        </span>
                        <h3 className="font-medium text-lg mt-2">{item.title}</h3>
                        <p className="text-gray-600 text-sm mt-1 line-clamp-2">{item.description}</p>
                      </div>
                    </motion.div>
                  ))}
                </motion.div>
              </AnimatePresence>
            )}
          </div>
          
          {/* Load More Button - only show if there are more to load */}
          {!showAll && filteredItems.length > 6 && (
            <div className="mt-12 text-center">
              <button 
                onClick={() => setShowAll(true)}
                className="bg-white hover:bg-gray-50 text-primary-color font-medium py-3 px-8 rounded-md shadow inline-flex items-center transition-all duration-300 border border-gray-200 hover:border-primary-color"
              >
                Load More Photos
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </button>
            </div>
          )}
          
          {/* Show less button - only visible when showing all */}
          {showAll && filteredItems.length > 6 && (
            <div className="mt-12 text-center">
              <button 
                onClick={() => setShowAll(false)}
                className="bg-white hover:bg-gray-50 text-primary-color font-medium py-3 px-8 rounded-md shadow inline-flex items-center transition-all duration-300 border border-gray-200 hover:border-primary-color"
              >
                Show Less
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2 transform rotate-180" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </button>
            </div>
          )}
        </div>
      </div>
      
      {/* Lightbox */}
      {lightbox.isOpen && (
        <div className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center">
          <button 
            onClick={closeLightbox}
            className="absolute top-4 right-4 text-white hover:text-gray-300 z-50"
          >
            <FaTimes size={24} />
          </button>
          
          <button 
            onClick={() => navigate(-1)}
            disabled={lightbox.currentIndex === 0}
            className={`absolute left-4 text-white p-2 rounded-full ${
              lightbox.currentIndex === 0 ? 'opacity-30 cursor-not-allowed' : 'hover:bg-white/10'
            }`}
          >
            <FaChevronLeft size={24} />
          </button>
          
          <button 
            onClick={() => navigate(1)}
            disabled={lightbox.currentIndex === filteredItems.length - 1}
            className={`absolute right-4 text-white p-2 rounded-full ${
              lightbox.currentIndex === filteredItems.length - 1 ? 'opacity-30 cursor-not-allowed' : 'hover:bg-white/10'
            }`}
          >
            <FaChevronRight size={24} />
          </button>
          
          <div className="w-full max-w-4xl px-4">
            <div className="relative aspect-video w-full bg-black/50">
              <Image 
                src={filteredItems[lightbox.currentIndex].imageSrc} 
                alt={filteredItems[lightbox.currentIndex].alt}
                fill
                className="object-contain"
              />
            </div>
            <div className="bg-white p-6 rounded-b-lg">
              <h3 className="text-xl font-bold">{filteredItems[lightbox.currentIndex].title}</h3>
              <p className="text-sm text-gray-500 mt-1">{filteredItems[lightbox.currentIndex].date} | {filteredItems[lightbox.currentIndex].category}</p>
              <p className="mt-3 text-gray-700">{filteredItems[lightbox.currentIndex].description}</p>
            </div>
          </div>
        </div>
      )}
    </main>
  );
} 