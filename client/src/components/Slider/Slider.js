import React from 'react';
import Slide from './Slide.js';
import RightArrow from './RightArrow.js';
import LeftArrow from './LeftArrow.js';

class Slider extends React.Component {

  state = {}

  goToPrevSlide = () => {

  }

  goToNextSlide = () => {

  }

  render() {
    return (
      <div className="slider">
        <Slide />

        <LeftArrow goToPrevSlide={this.goToPrevSlide} />
        <RightArrow goToNextSlide={this.goToNextSlide} />
      </div>
    )
  }
}

export default Slider;
