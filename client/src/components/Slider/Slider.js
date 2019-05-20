import React from 'react';
import Slide from '../slide';
import LeftArrow from '../left-arrow';
import RightArrow from '../right-arrow';

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
