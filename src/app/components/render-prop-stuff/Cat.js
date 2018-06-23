import React, {Component} from 'react';
import musik from '../../../images/musik.jpg'

class Cat extends Component {
    render(){
        const mouse = this.props.mouse;
        return(
          <img src={musik} style={{position: 'sticky', left: mouse.x, top: mouse.y}} />
        );
    }
}

export default Cat;