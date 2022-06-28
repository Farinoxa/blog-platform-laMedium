import React from 'react';
import PropTypes from 'prop-types';
import Footer from '../Footer';
import Header from '../Header';

function AppLayout({ children }) {
  return (
    <div>
      <Header />
      {children}
      <Footer />
    </div>
  );
}

AppLayout.propTypes = {
  children: PropTypes.string.isRequired,
};

export default AppLayout;
