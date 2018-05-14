import React, {Component} from 'react';
import {Switch, Route} from 'react-router-dom'
import Game from './tic-tac-toe-game';
import TableExample from './forms-usage/TableExample'
import TestRegex from './test-new-features/TestRegex'

class Main extends Component {

    render() {
        return (
            <main>
                <Switch>
                    <Route path={"/tic-tac-toe"} component={Game}/>
                    <Route path={"/table-example"} component={TableExample}/>
                    <Route path={"/regex-test"} component={TestRegex}/>
                </Switch>
            </main>
        )
    }
}

export default Main;

