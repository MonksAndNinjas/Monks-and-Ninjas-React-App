import React from 'react';
import { SocialIcon } from 'react-social-icons'

class SocialMedia extends React.Component {

  render() {
    return (
      <div>
        <SocialIcon url="https://twitter.com/monksandninjas"/>
        <SocialIcon url="https://www.instagram.com/monksandninjas/?hl=en" />
      </div>
    )
  }
}

export default SocialMedia;
