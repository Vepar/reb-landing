import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import RButton from '../shared/components/r-button';
import './landing.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitterSquare, faInstagram } from "@fortawesome/free-brands-svg-icons"
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';

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


        <Modal show={this.state.show} onHide={this.handleClose} centered>
          <Modal.Header closeButton>
            <Modal.Title>Modal heading</Modal.Title>
          </Modal.Header>
          <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={this.handleClose}>
              Close
            </Button>
            <Button variant="primary" onClick={this.handleClose}>
              Save Changes
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
    );
  }
}

export default Landing;
