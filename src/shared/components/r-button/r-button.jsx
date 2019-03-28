// import React, { Component } from 'react';

// const RButton = ({
// })=> {
//   return (
//     <div>
//       <input class='btn'>something</input>
//     </div>
//   );
// }

// ReactDOM.render(<RButton />, document.getElementById('root'));

// export default RButton;

import React, { Component } from 'react';
import './r-button.scss';

class RButton extends Component {

    state = {
        disabled: false
    };

    handler() {
        let handler = this.props.handler();

        // If promise is returned disable button
        if (handler && Promise.resolve(handler)) {
            // Disable button
            this.setState({disabled: true});
            // Un-disable button after promise has resolved or rejected
            return handler.then(() => {
                return this.setState({disabled: false});
            }).catch(() => {
                return this.setState({disabled: false});
            });
        }
    }

    attrs() {
        return {
            children : this.props.name,
            type     : 'button',
            role     : 'button',
            onClick  : this.handler.bind(this),
            disabled : this.state.disabled
        };
    }

    render() {
        return <button {...this.attrs()} class='btn btn-white rounded-0'/>;
    }
}

RButton.defaultProps = {
    handler: () => {}
};

export default RButton;
