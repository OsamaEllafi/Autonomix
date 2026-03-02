import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';

const Layout = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col relative">
      {/* Navbar - Always above content */}
      <Navbar />

      {/* Main Content - Positioned above canvas with top margin for navbar */}
      <main className="flex-grow relative" style={{ zIndex: 1 }}>
        {children}
      </main>

      {/* Footer - Above canvas */}
      <Footer />
    </div>
  );
};

export default Layout;
