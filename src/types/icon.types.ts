import React from 'react';

// Interface for SVG icon props that can be used across the application
export interface IconProps extends React.SVGProps<SVGSVGElement> {
  'aria-hidden'?: boolean | 'true' | 'false';
  size?: number | string;
  color?: string;
}

// Helper function to convert size to string with 'px' if it's a number
export const getSizeStyle = (size?: number | string): string | undefined => {
  if (size === undefined) return undefined;
  return typeof size === 'number' ? `${size}px` : size;
}; 