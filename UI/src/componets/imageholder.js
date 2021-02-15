import React from 'react';
import { Link } from 'react-router-dom';

function imageholder(props){
    return (
        <>
          <li className='cardsItem'>
            <Link className='cardsItemLink' to={props.path}>
              <figure className='cardsItemPic-wrap' data-category={props.label}>
                <img
                  className='cardsItemImg'
                  alt='Image'
                  src={props.src}
                />
              </figure>
              <div className='cardsItemInfo'>
                <h5 className='cardsItemText'>{props.text}</h5>
              </div>
            </Link>
          </li>
        </>
      );
    }
    
    export default imageholder;