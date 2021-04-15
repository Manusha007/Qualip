import React from 'react';

import '../Sections/Dash.css';

function Dashitem() {
  return (
    <div className='cards1'>
    <ul className='cards1__items'>
    <div class="row">
    <div class="col-lg-3 col-md-6">
        <div class="panel panel-green">
            <div class="panel-heading">
                <div class="row">
                    <div class="col-xs-3">
                        <i class="fa fa-cogs fa-5x"></i>
                    </div>
                    <div class="col-xs-9 text-right">
                        <div class="huge">26</div>
                        <div>Manufactured</div>
                    </div>
                </div>
            </div>
            
                <div class="panel-footer">
                    <span class="pull-left">Per Day</span>
                    <span class="pull-right"><i class="fa  fa-hand-o-right"></i></span>
                    <div class="clearfix"></div>
                </div>
            
        </div>
    </div>
    <div class="col-lg-3 col-md-6">
        <div class="panel panel-red">
            <div class="panel-heading">
                <div class="row">
                    <div class="col-xs-3">
                        <i class="fa  fa-exclamation-triangle fa-5x"></i>
                    </div>
                    <div class="col-xs-9 text-right">
                        <div class="huge">12</div>
                        <div>Defected</div>
                    </div>
                </div>
            </div>
           
                <div class="panel-footer">
                    <span class="pull-left">Per Day</span>
                    <span class="pull-right"><i class="fa  fa-hand-o-right"></i></span>
                    <div class="clearfix"></div>
                </div>
            
        </div>
    </div>
    <div class="col-lg-3 col-md-6">
        <div class="panel panel-yellow">
            <div class="panel-heading">
                <div class="row">
                    <div class="col-xs-3">
                        <i class="fa fa-wrench fa-5x"></i>
                    </div>
                    <div class="col-xs-9 text-right">
                        <div class="huge">124</div>
                        <div>To be Repaired</div>
                    </div>
                </div>
            </div>
         
                <div class="panel-footer">
                    <span class="pull-left">Per Day</span>
                    <span class="pull-right"><i class="fa  fa-hand-o-right"></i></span>
                    <div class="clearfix"></div>
                </div>
     
        </div>
    </div>
    <div class="col-lg-3 col-md-6">
        <div class="panel panel-primary">
            <div class="panel-heading">
                <div class="row">
                    <div class="col-xs-3">
                        <i class="fa fa-recycle fa-5x"></i>
                    </div>
                    <div class="col-xs-9 text-right">
                        <div class="huge">13</div>
                        <div>To be Recycle</div>
                    </div>
                </div>
            </div>
           
                  <div class="panel-footer">
                          <span class="pull-left">Per Day</span>
                          <span class="pull-right"><i class="fa  fa-hand-o-right"></i></span>
                          <div class="clearfix"></div>
                      </div>
               
              </div>
          </div>
      </div>

</ul>

</div>
      
      
  );
}

export default Dashitem;