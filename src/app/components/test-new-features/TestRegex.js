import React, {Component} from 'react';
import validate from 'validate.js';

const constraints = {
    email :  {
        presence: {allowEmpty: true},
        format: {
            pattern: /^(([a-z0-9]+)@([a-z0-9]+)\.([a-z]{2,}))?$/,
            message: (value, attribute, validatorOptions, attributes, globalOptions) => {
                return validate.format("Неправильный формат", {email: value})
            }
        }
    },

    emails :  {
        presence: {allowEmpty: true},
        format: {
            pattern: /^(([a-z0-9]+)@([a-z0-9]+)\.([a-z]{2,})(,?)|(,{1} *))*$/,
            message: (value, attribute, validatorOptions, attributes, globalOptions) => {
                return validate.format("Неправильный формат", {emails: value})
            }
        }
    },


}

class TestRegex extends Component {

    constructor(props){
        super(props);

        this.state = {
            email : '',
            emails : ''
        }
    }

    handleInput = (e) => {
        this.setState({
            [e.target.name] : e.target.value
        })
    }

    render(){

        const {email, emails} = this.state;

        let errors = validate({email, emails}, constraints);

        console.log(errors)

        return (
            <div>
                <div>
                    Введи почту: <input type={"text"} name={"email"} value={email} onChange={this.handleInput}/>
                    <span className={"error"}>{errors && errors.email}</span>
                </div>

                <div>
                    Введи почты: <input type={"text"} name={"emails"} value={emails} onChange={this.handleInput}/>
                    <span className={"error"}>{errors && errors.emails}</span>
                </div>
            </div>

        );
    }

}

export default TestRegex;