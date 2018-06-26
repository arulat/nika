import React, {Component} from 'react';
import ReactDom from 'react-dom';

// const modal = document.createElement('div');
// modal.setAttribute('id', 'modal-root');

const modal = document.getElementById('modal-root');


class ModalPortal extends Component {

    constructor(props){
        super(props);
        this.el = document.createElement('div');
    }

    componentDidMount(){
        modal.appendChild(this.el);
    }

    componentWillUnmount(){
        modal.removeChild(this.el);
    }

    render(){
        return ReactDom.createPortal(this.props.children, this.el);
    }
}

export default ModalPortal;

