import React, {Component} from 'react';
import {Form, FormGroup, FormControl, ControlLabel, Button} from 'react-bootstrap'

//TODO: universal parser of html text

const defaultHtml = "<h2>HTML Table</h2>" +
    "<br/>" +
    "<table>" +
    "  <tr>" +
    "    <th>Company</th>" +
    "    <th>Contact</th>" +
    "    <th>Country</th>" +
    "  </tr>" +
    "  <tr>" +
    "    <td>Alfreds Futterkiste</td>" +
    "    <td>Maria Anders</td>" +
    "    <td>Germany</td>" +
    "  </tr>" +
    "  <tr>" +
    "    <td>Centro comercial Moctezuma</td>" +
    "    <td>Francisco Chang</td>" +
    "    <td>Mexico</td>" +
    "  </tr>" +
    "  <tr>" +
    "    <td>Ernst Handel</td>" +
    "    <td>Roland Mendel</td>" +
    "    <td>Austria</td>" +
    "  </tr>" +
    "  <tr>" +
    "    <td>Island Trading</td>" +
    "    <td>Helen Bennett</td>" +
    "    <td>UK</td>" +
    "  </tr>" +
    "  <tr>" +
    "    <td>Laughing Bacchus Winecellars</td>" +
    "    <td>Yoshi Tannamuri</td>" +
    "    <td>Canada</td>" +
    "  </tr>" +
    "  <tr>" +
    "    <td>Magazzini Alimentari Riuniti</td>" +
    "    <td>Giovanni Rovelli</td>" +
    "    <td>Italy</td>" +
    "  </tr>" +
    "</table>";

const defHtmlSpan = "<span>test</span>";
const spanRule = "<span\\b[^>]*>(.*?)<\\/span>"
class HtmlParserForm extends Component {
    constructor(props){
        super(props);

        this.state = {
            htmlArea:'',
            result: ''
        }
    }

    componentWillMount(){
        this.setState({
            htmlArea : this.props.defaultHtml
        })
    }

    handleClick = () => {
        const data = this.parseHtml(spanRule, this.state.htmlArea);
        this.setState({result: (data && data.length > 0) ? data[1] : ''})
    };

    handleTextAreaChange = (e) => {
        this.setState({
            [e.target.name] : e.target.value
        })
    };

    parseHtml = (regexRule, html) => {

        const regex = new RegExp(regexRule);

        return regex.exec(html);
    };

    render(){

        return (
            <React.Fragment>
                <Form horizontal>
                    <FormGroup>
                        <ControlLabel>Input HTML</ControlLabel>
                        <FormControl
                            componentClass={"textarea"}
                            placeholder={"input html text"}
                            value={this.state.htmlArea}
                            onChange={this.handleTextAreaChange}
                            name={"htmlArea"}
                        />
                    </FormGroup>
                    <FormGroup>
                        <Button bsStyle="primary" onClick={this.handleClick}>
                            parse html
                        </Button>
                    </FormGroup>

                    <FormGroup>
                        <label>{this.state.result}</label>
                    </FormGroup>

                </Form>
            </React.Fragment>
        );
    }
}

HtmlParserForm.defaultProps = {
    defaultHtml: defHtmlSpan
}

export default HtmlParserForm;