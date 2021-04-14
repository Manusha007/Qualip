import React from 'react';
import '../../App.css';
import Dash from '../Sections/Dash';
import Footer from '../Footer/Footer';
import Navbar from '../Navbar/Navbar';

function Dashboard() {
  return (
    <>
    <Navbar/>
    <Dash/>
      <Footer />
    </>
  );
}
export default Dashboard;