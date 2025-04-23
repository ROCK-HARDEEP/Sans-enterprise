import React from 'react';
import { IconProps, getSizeStyle } from '../../types/icon.types';

export const ArrowRightIcon = (props: IconProps) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    fill="none" 
    viewBox="0 0 24 24" 
    stroke="currentColor"
    style={props.size ? { width: getSizeStyle(props.size), height: getSizeStyle(props.size) } : undefined}
    {...props}
  >
    <path 
      strokeLinecap="round" 
      strokeLinejoin="round" 
      strokeWidth={2} 
      d="M14 5l7 7m0 0l-7 7m7-7H3" 
    />
  </svg>
);

export const ArrowLongRightIcon = (props: IconProps) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    fill="none" 
    viewBox="0 0 24 24" 
    stroke="currentColor"
    style={props.size ? { width: getSizeStyle(props.size), height: getSizeStyle(props.size) } : undefined}
    {...props}
  >
    <path 
      strokeLinecap="round" 
      strokeLinejoin="round" 
      strokeWidth={2} 
      d="M17 8l4 4m0 0l-4 4m4-4H3" 
    />
  </svg>
);

export const ChevronRightIcon = (props: IconProps) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    fill="none" 
    viewBox="0 0 24 24" 
    stroke="currentColor"
    style={props.size ? { width: getSizeStyle(props.size), height: getSizeStyle(props.size) } : undefined}
    {...props}
  >
    <path 
      strokeLinecap="round" 
      strokeLinejoin="round" 
      strokeWidth={2} 
      d="M9 5l7 7-7 7" 
    />
  </svg>
);

export const StarIcon = (props: IconProps) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    viewBox="0 0 20 20" 
    fill="currentColor"
    style={props.size ? { width: getSizeStyle(props.size), height: getSizeStyle(props.size) } : undefined}
    {...props}
  >
    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
  </svg>
);

export const ChevronUpIcon = (props: IconProps) => (
  <svg 
    className="w-4 h-4" 
    viewBox="0 0 24 24" 
    fill="none"
    style={props.size ? { width: getSizeStyle(props.size), height: getSizeStyle(props.size) } : undefined}
    {...props}
  >
    <path 
      d="M18 15L12 9L6 15" 
      stroke="currentColor" 
      strokeWidth="2" 
      strokeLinecap="round" 
      strokeLinejoin="round" 
    />
  </svg>
);

export const ChevronDownIcon = (props: IconProps) => (
  <svg 
    className="w-4 h-4" 
    viewBox="0 0 24 24" 
    fill="none"
    style={props.size ? { width: getSizeStyle(props.size), height: getSizeStyle(props.size) } : undefined}
    {...props}
  >
    <path 
      d="M6 9L12 15L18 9" 
      stroke="currentColor" 
      strokeWidth="2" 
      strokeLinecap="round" 
      strokeLinejoin="round" 
    />
  </svg>
); 