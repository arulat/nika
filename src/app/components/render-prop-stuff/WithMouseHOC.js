import React, {Component} from 'react'
import Mouse from './Mouse'
import Cat from './Cat'

function withMouse (Comp){
    return class extends Component{
        render(){
            return (
                <Mouse render={mouse => (<Comp mouse={mouse}/>)}/>
            )
        }
    }
};


export default withMouse(Cat)
