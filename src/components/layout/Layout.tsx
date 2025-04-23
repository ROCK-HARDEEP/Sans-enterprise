'use client';

import { useEffect, useState, useRef } from 'react';
import Header from './Header';
import Footer from './Footer';
import AOS from 'aos';
import 'aos/dist/aos.css';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

export default function Layout({ children }: { children: React.ReactNode }) {
  const [isHeaderFixed, setIsHeaderFixed] = useState(false);
  
  // Initialize AOS (Animate on Scroll)
  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: 'ease-in-out',
      once: false,
      mirror: true,
    });
  }, []);

  // Initialize Lenis for smooth scrolling
  useEffect(() => {
    // Dynamically import Lenis to avoid SSR issues
    const initLenis = async () => {
      const Lenis = (await import('lenis')).default;
      
      const lenis = new Lenis({
        duration: 1.2,
        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        wheelMultiplier: 1,
        touchMultiplier: 2,
        smoothWheel: true,
      });

      // Scroll handler for header state
      lenis.on('scroll', ({ direction, velocity }) => {
        const scrollY = window.scrollY;
        
        if (scrollY > 50) {
          setIsHeaderFixed(true);
        } else {
          setIsHeaderFixed(false);
        }
      });

      function raf(time: number) {
        lenis.raf(time);
        requestAnimationFrame(raf);
      }

      requestAnimationFrame(raf);

      return () => {
        lenis.destroy();
      };
    };

    initLenis();
  }, []);

  return (
    <div className="flex min-h-screen flex-col">
      <Header isFixed={isHeaderFixed} />
      <main className="flex-grow">{children}</main>
      <Footer />
    </div>
  );
} 