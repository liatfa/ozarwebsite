import React from 'react';

const BackgroundSection = ({ children }) => {
  return (
    <div className="background-section">
      {/* <div className="background-overlay"></div> */}
      {children}
    </div>
  );
};

export default BackgroundSection;