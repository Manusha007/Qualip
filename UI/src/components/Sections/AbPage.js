import React from 'react';
import '../../App.css';
import '../Sections/AbPage.css';

const AbPage = () => {
  return (
    <div className="about">
      <div className="container12">
        <div className="row">
          <div className="col-6 p-25">
            <h3>About QUALIP</h3>
           
            <p>
            Qualip is a quality assurance software for manufacturing process. 
            It allows you to identify <br /> defected products in a Conveyor belt using
             image processing technology in machine learning. 
            The key difference between regular quality assurance software 
            and Qualip is that Qualip can let the user to decide whether to approve
             or reject the final decision.
            <br /> 
            <br />
            <h3>Prerequisites</h3>

            <div>
            
                React JS, Python 3.9, NodeJS, OpenCV
            
            </div>
            <br />
             You can access to Github Repository by clicking on the image "QUALIP".
            </p>
            <br />
          </div>
          <br />
          <div className="col-6">
            <div className="about__img">
            <a href="https://github.com/Manusha007/Qualip">
              <img src="/images/image3.jpg" alt="qualip"  />
              </a>
            </div>
          </div>
          <br />
          <br />
         <p>
          
           <br />
          
           © Copyright 2021. All rights reserved.<br/>
           <span className='textColor'>Powered by the QUALIPSOFT.</span> 

         </p>
        </div>
      </div>
    </div>
  );
};

export default AbPage;
