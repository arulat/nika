import React, {Component} from 'react';

class AutoFocusInput extends Component{

    constructor(props){
        super(props);
        this.state = {
            value: ''
        };
        this.input = React.createRef();
    }


    componentDidMount(){
        this.focusInput();
    }

    focusInput(){
        this.input.current.focus();
    }

    handleInputChange(e){
        this.setState({
            [e.target.name] : e.target.value
        });
    }

    render(){

        return(

            <input
                ref={this.input}
                placeholder={'auto focused input yopta'}
                value={this.state.value}
                onChange={this.handleInputChange}
            />
        )
    }
}

export default AutoFocusInput;