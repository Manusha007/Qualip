import React from 'react';
import '../Sections/Api.css';
import ApiItem from '../ApiItem';

function Api() {
  return (
    <div className='cards'>
    
      
      
      <ul className='cards__items'>

   
          <ApiItem
              
              src='images/lasaru.jpeg'
              text='Lasaru Udawaththa'
          
            />
    
           
            <ApiItem
              src='images/manusha.jpeg'
              text='Manusha Pamoda'
            
            />
        
            <ApiItem
              
              src='images/deshan.jpg'
              text='Deshan Vimukthi' 
             
             
            />
            <ApiItem
              src='images/dinujaya.jpeg'
              text='Dinujaya Munasinghe'
          
            />
            <ApiItem
              src='images/inura.jpeg'
              text='Inura  Dewage'
      
            />
             <ApiItem
              src='images/lahiru.jpg'
              text='Lahiru Abhayakularathna'
      
            />
          </ul>
        </div>
    
  );
}

export default Api;
