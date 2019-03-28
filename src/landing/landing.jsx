import React, { Component } from 'react';
import './landing.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitterSquare, faInstagram } from "@fortawesome/free-brands-svg-icons"

class Landing extends Component {
  render() {
    return (
      <div>
        <div class='landing-content'>
          <div class='social-icons'>
            <FontAwesomeIcon class='fa-icon' icon={faFacebook} />
            <FontAwesomeIcon class='fa-icon' icon={faTwitterSquare} />
            <FontAwesomeIcon class='fa-icon' icon={faInstagram} />
          </div>
          <div class='title-container'>
            <div class='title'>
              <h2>
              Rebellion
              </h2>
              <h1>
                COMING SOON
              </h1>
              Want an interest free loan? <a href='#'> Let us know!</a>
            </div>
          </div>
        </div>

        <div class='landing-container'>
          <div id="picture"></div>
          <div id="background"></div>

          <div id="layer1"></div>
          <div id="layer2"></div>
          <div id="layer3"></div>

        </div>
      </div>
    );
  }
}

export default Landing;
