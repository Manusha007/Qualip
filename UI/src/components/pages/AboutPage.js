import React from 'react';
import '../../App.css';
import Footer from '../Footer/Footer';

import Navbar from '../Navbar/Navbar';
import About1 from '../Sections/About1';

import AbPage from '../Sections/AbPage';


function AboutPage() {
  return (
    <>
      <Navbar />
      <About1 />
      <AbPage />
      <Footer />
    </>
  );
}
export default AboutPage;
