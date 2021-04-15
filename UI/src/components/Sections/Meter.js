import React from 'react';
import '../Sections/Dash.css';
import loginImg from "../../login.svg";

import { Link } from 'react-router-dom';


class Meter extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div class="gauge">
      <canvas id="canvas-preview"></canvas>
      <div id="minVal">0</div>
      <div id="maxVal">300</div>
      <div id="preview-textfield">0%</div>
    </div>
      
    );
  }
}
export default Meter;