/*
* Пример React.forwardRef с использованием простой HOC
* */
import React, {Component} from 'react';


const withForwardRef = (Comp) => {
    class MyClass extends Component {
        render(){
            const {forwardedRef, ...rest} = this.props;
            return <Comp forwardedRef={forwardedRef} {...rest}/>
        }
    }
    return React.forwardRef((props, ref) => {
        return <MyClass {...props} forwardedRef={ref}/>
    });
};

class AutoFocusInputWithForwardRef extends Component{

    constructor(props){
        super(props);
        this.state = {
            value: ''
        };
    }

    componentDidMount(){
        this.focusInput();
    }

    focusInput(){
        this.props.forwardedRef && this.props.forwardedRef.current.focus();
    }

    handleInputChange = (e) =>{
        this.setState({
            [e.target.name] : e.target.value
        });
    };

    render(){

        return(
            <div>
                <input
                    ref={this.props.forwardedRef}
                    placeholder={'auto focused input yopta'}
                    value={this.state.value}
                    onChange={this.handleInputChange}
                />
            </div>
        )
    }
}

export default withForwardRef(AutoFocusInputWithForwardRef);