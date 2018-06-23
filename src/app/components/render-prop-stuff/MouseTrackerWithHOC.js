import React, {Component} from 'react'
import Cat from './WithMouseHOC'


class MouseTrackerWithHOC extends Component {

    render() {
        return(
            <div>
                <h1>Go, Musik, go! </h1>
                <Cat />
            </div>
        )
    }
}

export default MouseTrackerWithHOC;