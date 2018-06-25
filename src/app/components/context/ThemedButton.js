import React from 'react'
import {Button} from 'react-bootstrap'

import {ThemeContext} from './ThemeContext'


export default function ThemedButton(props){
    return(
        <ThemeContext.Consumer>
            {theme => <Button {...props} style={{backgroundColor: theme.background}} bsStyle={theme.state} />}
        </ThemeContext.Consumer>
    )
}