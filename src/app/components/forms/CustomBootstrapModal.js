import React, {Component} from 'react';
import Modal from 'react-bootstrap-modal';

import '../../../../node_modules/react-bootstrap-modal/lib/css/rbm-complete.css';
import '../../../../node_modules/react-bootstrap-modal/lib/css/rbm-patch.css';

class CustomBootstrapModal extends Component {

    constructor(props){
        super(props);
        this.state = {
            show: true
        }
    }

    render(){
        return (
            <Modal show={this.props.show}>
                <Modal.Header>{this.props.header}</Modal.Header>
                <Modal.Body>{this.props.body}</Modal.Body>
                <Modal.Footer>{this.props.footer}</Modal.Footer>
            </Modal>
        )
    }
}

export default CustomBootstrapModal;