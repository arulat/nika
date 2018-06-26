import React, {Component} from 'react';
import ModalPortal from './ModalPortal';


function Child(){
    return(
        <div>
            <button>Click</button>
        </div>
    )
}

class ParentModalPortal extends Component {
    constructor(props){
        super(props);
        this.state = {clicks: 0}
    }

    handleClick = () => {
        this.setState((prevState) => ({clicks: prevState.clicks + 1}))
    };

    render(){
        return(
            <div onClick={this.handleClick}>
                <p>Clicks: {this.state.clicks}</p>
                <p>
                    Open up the browser DevTools
                    to observe that the button
                    is not a child of the div
                    with the onClick handler.
                </p>
                <ModalPortal>
                    <Child />
                </ModalPortal>
            </div>

        )
    }
}

export default ParentModalPortal;
