import React from 'react';
import '../../App.css';
import Dashitem from '../Sections/Dashitem';
import Meter from '../Sections/Meter';
import Footer from '../Footer/Footer';
import Navbar from '../Navbar/Navbar';

function Dashboard() {
  return (
    <>
    <Navbar/>
    <Dashitem/>
    <Meter />
    <Footer />
    </>
  );
}
export default Dashboard;