import React from 'react';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';

// eslint-disable-next-line react/prop-types
function AppLayout({ children }) {
  return (
    <div>
      <Header />
      {children}
      <Footer />
    </div>
  );
}

export default AppLayout;
