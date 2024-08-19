// src/components/Spinner.js

import React from 'react';
import './Spinner.css'; // Import custom CSS for the spinner

const Spinner = () => {
  return (
    
    <div className="flex items-center justify-center min-h-screen">
      <div className="spinner w-12 h-12 sm:w-16 sm:h-16 md:w-24 md:h-24"></div>
    </div>
   
  );
};

export default Spinner;
