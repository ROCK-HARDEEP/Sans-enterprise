'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { IconProps } from '../../types/icon.types';
import { ChevronUpIcon, ChevronDownIcon } from '../icons/ArrowIcons';

const MenuIcon = (props: IconProps) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    fill="none" 
    viewBox="0 0 24 24" 
    stroke="currentColor" 
    {...props}
  >
    <path 
      strokeLinecap="round" 
      strokeLinejoin="round" 
      strokeWidth={2} 
      d="M4 6h16M4 12h16M4 18h16" 
    />
  </svg>
);

const CloseIcon = (props: IconProps) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    fill="none" 
    viewBox="0 0 24 24" 
    stroke="currentColor" 
    {...props}
  >
    <path 
      strokeLinecap="round" 
      strokeLinejoin="round" 
      strokeWidth={2} 
      d="M6 18L18 6M6 6l12 12" 
    />
  </svg>
);

const navigation = {
  main: [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Study in India', href: '/study-in-india' },
    { name: '60+ Courses', href: '/study-in-india/courses' },
    { name: 'Study MBBS Abroad', href: '/study-mbbs-abroad' },
    { name: 'College Profiles', href: '/study-mbbs-abroad/colleges' },
    { name: 'Universities', href: '/universities' },
    { name: 'Info', href: '/info' },
    { name: 'Gallery', href: '/info/gallery' },
    { name: 'Useful Links', href: '/info/useful-links' },
  ],
};

export default function Header({ isFixed = false }: { isFixed?: boolean }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header 
      id="header" 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out ${
        scrolled 
          ? 'bg-white/90 backdrop-blur-md shadow-md py-2' 
          : 'bg-transparent py-4'
      } ${isFixed ? 'header-fixed' : ''}`}
    >
      <div className="container mx-auto px-6">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <Link href="/" className="logo">
              <Image 
                src="/img/logo.svg" 
                alt="sans Logo" 
                width={180} 
                height={60} 
                priority 
                className="h-10 w-auto transition-all duration-300 ease-in-out"
              />
            </Link>
          </div>
          
          <div className="hidden md:flex items-center">
            <nav className="mr-4">
              <ul className="flex flex-wrap justify-center items-center">
                {navigation.main.map((item) => (
                  <li key={item.name} className="relative">
                    <Link 
                      href={item.href}
                      className="block px-3 py-2 mx-1 rounded-md text-gray-800 hover:text-primary-color hover:bg-white/50 transition-all duration-300 ease-in-out font-medium text-sm"
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
            
            <div className="ml-4">
              <Link 
                href="/contact" 
                className="button inline-flex items-center justify-center bg-primary-color hover:bg-blue-700 text-white font-medium py-2 px-5 rounded-md transition-all duration-300 ease-in-out hover:shadow-lg transform hover:-translate-y-0.5"
              >
                Contact Us
              </Link>
            </div>
          </div>
          
          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button 
              className="p-2 rounded-md hover:bg-white/20 transition-colors focus:outline-none"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle menu"
            >
              <span className="w-6 h-6 flex items-center justify-center">
                {mobileMenuOpen ? (
                  <CloseIcon className="w-6 h-6" aria-hidden="true" />
                ) : (
                  <MenuIcon className="w-6 h-6" aria-hidden="true" />
                )}
              </span>
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile Menu Overlay */}
      <div 
        className={`fixed inset-0 bg-black/50 backdrop-blur-sm z-40 transition-opacity duration-300 ease-in-out ${
          mobileMenuOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`} 
        onClick={() => setMobileMenuOpen(false)}
      ></div>
      
      {/* Mobile Navigation */}
      <div className={`fixed inset-y-0 right-0 max-w-xs w-full bg-white/95 backdrop-blur-md z-50 shadow-2xl overflow-y-auto transition-transform duration-300 ease-in-out transform ${
        mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
      }`}>
        <div className="p-5">
          <div className="flex justify-between items-center border-b border-gray-100 pb-4">
            <Link href="/" className="flex items-center" onClick={() => setMobileMenuOpen(false)}>
              <Image 
                src="/img/logo.svg" 
                alt="sans Logo" 
                width={150} 
                height={50} 
                priority 
                className="h-8 w-auto"
              />
            </Link>
            <button 
              onClick={() => setMobileMenuOpen(false)}
              className="p-2 rounded-full hover:bg-gray-100 transition-colors focus:outline-none"
              aria-label="Close menu"
            >
              <CloseIcon className="w-5 h-5" aria-hidden="true" />
            </button>
          </div>
          
          <nav className="mt-6">
            <ul className="space-y-1">
              {navigation.main.map((item) => (
                <li key={item.name} className="border-b border-gray-50">
                  <Link 
                    href={item.href}
                    className="block py-3 px-3 rounded-md text-gray-800 hover:text-primary-color hover:bg-gray-50 transition-all duration-200 font-medium"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
          
          <div className="mt-8 pt-6 border-t border-gray-100">
            <Link 
              href="/contact"
              className="flex items-center justify-center w-full py-3 px-4 rounded-md text-center font-medium text-white bg-primary-color hover:bg-blue-700 transition-all duration-300 ease-in-out shadow-md hover:shadow-lg transform hover:-translate-y-0.5"
              onClick={() => setMobileMenuOpen(false)}
            >
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
} 