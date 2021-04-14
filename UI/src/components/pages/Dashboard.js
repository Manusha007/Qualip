import React from 'react';
import '../../App.css';
import Dashitem from '../Sections/Dashitem';
import Footer from '../Footer/Footer';
import Navbar from '../Navbar/Navbar';

function Dashboard() {
  return (
    <>
    <Navbar/>
    <Dashitem/>
      <Footer />
    </>
  );
}
export default Dashboard;