import React from 'react';
import '../Sections/Api.css';
import ApiItem from '../Dashitem';
function Api() {
  return (
    <div className='cards'>
    
      
      
      <ul className='cards__items'>

   
          <ApiItem
              
           
              text='Manufactured'
          
            />
    
           
            <ApiItem
            
              text='Defected'
            
            />
        
            <ApiItem
              
           
              text='To be repaired' 
             
             
            />
            <ApiItem
             
              text='To be recycled'
          
            />
           
      
          </ul>
        </div>
    
  );
}

export default Api;