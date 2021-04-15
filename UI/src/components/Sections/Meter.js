import React from 'react';
import '../Sections/Dash.css';


function Meter() {
  return (
    <div className='cards2'>
      <div class="mhtml mbody">
        <div class="mody dial">
          <div class="gauge">
			<ul class="meter">
				<li class="low"></li>
				<li class="normal"></li>
				<li class="high"></li>
			</ul>

			<div class="dial">
					<div class="inner">
						<div class="arrow">
						</div>
					</div>			
			</div>

			<div class="value">
				0%
			</div>
            

		</div>
        
                </div>
            </div>
            <div class="h5">Condition Meter</div>
            <div class="relative"></div>

</div>
      
      
  );
}

export default Meter;