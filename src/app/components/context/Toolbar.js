import React from 'react'

import ThemedButton from './ThemedButton'

export default function Toolbar(props){

    return(
        <div>
            <ThemedButton onClick={props.changeTheme}>
                Change Theme
            </ThemedButton>
        </div>
    )
}