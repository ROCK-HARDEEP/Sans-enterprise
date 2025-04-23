import React from 'react';

export const metadata = {
  title: 'Gallery | sans',
  description: 'Browse through photos from our events, university visits, campus tours, and student activities.',
};

export default function GalleryLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
} 