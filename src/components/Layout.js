import React from 'react';

const Layout = ({ children, className = '' }) => {
  return (
    <main
      className={`w-full h-full inline-block bg-light z-0 md:px-8 lg:px-32 ${className}`}>
      {children}
    </main>
  );
};

export default Layout;
