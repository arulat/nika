import React, {Component} from 'react';
import {Switch, Route} from 'react-router-dom'
import Game from './tic-tac-toe-game';
import TableExample from './forms-usage/TableExample'

class Main extends Component {

    render() {
        return (
            <main>
                <Switch>
                    <Route path={"/tic-tac-toe"} component={Game}/>
                    <Route path={"/table-example"} component={TableExample}/>
                </Switch>
            </main>
        )
    }
}

export default Main;

