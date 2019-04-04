import React, { Component } from 'react';
import PropTypes from 'prop-types';
import '../css/SubscribeModal.scss';
import Modal from '@material-ui/core/Modal'
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { withStyles } from "@material-ui/core/styles";
const styles = theme => ({
  subscribeButton: {
    height: 40,
    margin: 10
  },
  emailInput: {
    height: 3,
  },
  modalStyles: {
    display: 'flex',
  }
});


class SubscribeModal extends Component {
  render() {
    const {classes} = this.props;

    return (
      <Modal 
        open={this.props.open}
        onClose={this.props.handleClose}
        className={classes.modalStyles}
        disableAutoFocus={true}
        >
        <div class='subscribe-modal'>
          <h2>
            Subscribe              
          </h2>
          <div>
            <div class="subscribe-input">
              <TextField
                id="outlined-bare"
                class='subscribe-email-input'
                placeholder="Email"
                margin="normal"
                variant="outlined"
                InputProps={{ classes: { input: classes.emailInput } }}
              />
              <Button
                variant="contained"
                color="primary"
                className={classes.subscribeButton}
                onClick={this.props.handleClose}
                >
                Subscribe
              </Button>
            </div>
          </div>
        </div>
      </Modal>
    );
  }
}

SubscribeModal.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(SubscribeModal);
