import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import RButton from '../shared/components/r-button';
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
              {/* <div class='subscribe-container'> */}
                {/* <div class="input-group mb-3">
                  <input type="text" class="form-control" placeholder="Email" aria-label="Recipient's username" aria-describedby="button-addon2"></input>
                  <div class="input-group-append">
                    <button class="btn btn-black" type="button" id="button-addon2">Subscribe</button>
                  </div>
                </div> */}
              {/* </div> */}
            </div>
          </div>
        </div>
        <div class='landing-container'>
          <div id="picture"></div>
          <div id="background"></div>
        </div>
      </div>
    );
  }
}

export default Landing;
