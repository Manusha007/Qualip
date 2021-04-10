import React from 'react';
import '../../App.css';
import Footer from '../Footer/Footer';

import Api from '../Sections/Api';
import About from '../Sections/About';
import Navbar from '../Navbar/Navbar';

function AboutUs() {
  return (
    <>
      <Navbar />
      <About/>
      <Api />
      <Footer />
    </>
  );
}
export default AboutUs;
