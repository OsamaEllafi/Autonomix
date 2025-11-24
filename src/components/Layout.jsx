import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import Hero3D from './Hero3D';

const Layout = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col relative">
      {/* 3D Blob Canvas - Always behind everything */}
      <div style={{ position: 'fixed', inset: 0, zIndex: -1, pointerEvents: 'none' }}>
        <Hero3D />
      </div>

      {/* Navbar - Always above content */}
      <Navbar />

      {/* Main Content - Positioned above canvas with top margin for navbar */}
      <main className="flex-grow relative" style={{ zIndex: 1, marginTop: '100px' }}>
        {children}
      </main>

      {/* Footer - Above canvas */}
      <Footer />
    </div>
  );
};

export default Layout;
