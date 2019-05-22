import React from 'react';
import { SocialIcon } from 'react-social-icons'

import './socialMedia.css';

class SocialMedia extends React.Component {

  render() {
    return (
      <div id="socialMedia">
        <SocialIcon style={{ overflow: 'visible', margin: '10px', height: '25px', width: '25px' }} url="https://twitter.com/monksandninjas"/>
        <SocialIcon style={{ overflow: 'visible', margin: '10px', height: '25px', width: '25px' }} url="https://www.instagram.com/monksandninjas/?hl=en" />
      </div>
    )
  }
}

export default SocialMedia;
