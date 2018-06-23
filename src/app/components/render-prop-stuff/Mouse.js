import React, {Component} from 'react';

class Mouse extends Component{

    constructor(props){
        super(props);
        this.state={
            x: 0,
            y: 0
        }
    }

    handleMouseMove = (e) => {
        this.setState({
            x: e.clientX,
            y: e.clientY
        });
    };

    render(){
        //return div with render prop
        return(
            <div style={{height: '800px', width:'100%', backgroundColor:'green'}} onMouseMove={this.handleMouseMove}>
                {this.props.render(this.state)}
            </div>
        )
    }
}

export default Mouse;