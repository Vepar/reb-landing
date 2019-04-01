import React, { Component } from 'react';
import './landing.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitterSquare, faInstagram } from "@fortawesome/free-brands-svg-icons"
import SubscribeModal from './subscribe-modal';

class Landing extends Component {

  constructor(props, context) {
    super(props, context);

    this.handleShow = this.handleShow.bind(this);
    this.handleClose = this.handleClose.bind(this);

    this.state = {
      show: false,
    };
  }

  handleClose() {
    this.setState({ show: false });
  }

  handleShow() {
    this.setState({ show: true });
  }

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
                Want an interest free loan? <a href='#' onClick={this.handleShow}> Let us know!</a>
            </div>
          </div>
        </div>
        <div class='landing-container'>
          <div id="picture"></div>
          <div id="background"></div>
        </div>
        <SubscribeModal open={this.state.show} handleClose={this.handleClose}/>
      </div>
    );
  }
}

export default Landing;
