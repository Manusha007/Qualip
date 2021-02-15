import React from 'react';
import './info.css';
import imageholder from './imageholder';

function info(){
    return (
        <div className='cards'>
          <h1>This is Us !!</h1>
          
              <ul className='cardsItems'>
                <imageholder
                  src='images/lasaru.jpeg'
                  text='Lasaru '
              
                />
                <imageholder
                  src='images/manusha.jpeg'
                  text='Manusha Pamoda'
                
                />
              </ul>
              <ul className='cards__items'>
                <imageholder
                  src='images/deshan.jpeg'
                  text='Deshan Vimukthi'
                 
                />
                <imageholder
                  src='images/dinujaya.jpeg'
                  text='Dinujaya Lakshan Munasinhe'
              
                />
                <imageholder
                  src='images/inura.jpeg'
                  text='Inura Dewage'
          
                />
              </ul>
            </div>
        
      );
    }
    
    export default info;
    