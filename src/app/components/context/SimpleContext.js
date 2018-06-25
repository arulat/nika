import React, {Component} from 'react'
import Toolbar from './Toolbar'

import {ThemeContext, themes} from './ThemeContext'
import ThemedButton from "./ThemedButton";
import {withTheme} from './WithThemeHOC'
import {Button} from 'react-bootstrap'


class SimpleContext extends Component {

    constructor(props){
        super(props);
        this.state = {
            theme: themes.light
        }
    }

    toggleTheme = () => {
        this.setState({
            theme: this.state.theme === themes.dark ? themes.light : themes.dark
        })
    };

    Button({theme, ...rest}) {
        return <Button bsStyle={theme.state} {...rest} />;
    }



    render () {
        const ThemedButtonHOC = withTheme(this.Button);
        return (
            <React.Fragment>
                <ThemeContext.Provider value={this.state.theme}>
                    <Toolbar changeTheme={this.toggleTheme}/>
                </ThemeContext.Provider>
                <div>
                    <ThemedButton onClick={this.toggleTheme}>Example</ThemedButton>
                </div>
                <ThemeContext.Provider value={this.state.theme}>
                    <ThemedButtonHOC onClick={this.toggleTheme}>Example HOC</ThemedButtonHOC>
                </ThemeContext.Provider>
            </React.Fragment>


        );
    }
}

export default SimpleContext;

