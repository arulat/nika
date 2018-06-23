import React, {Component} from 'react';
import {Switch, Route} from 'react-router-dom'
import Game from './tic-tac-toe-game';
import TableExample from './forms-usage/TableExample'
import HtmlParserFormExample from './forms-usage/HtmlParserFormExample'
import TestRegex from './test-new-features/TestRegex'
import TestDrawHtmlToMSOfficeEditorForm from './DrawHtmlToMSOfficeEditor/TestDrawHtmlToMSOfficeEditor'
import AutoFocusInputExample from './forms-usage/AutoFocusInputExample';
import MouseTracker from './render-prop-stuff/MouseTracker';
import MouseTrackerWithHOC from './render-prop-stuff/MouseTrackerWithHOC';

class Main extends Component {

    render() {
        return (
            <main>
                <Switch>
                    <Route path={"/tic-tac-toe"} component={Game}/>
                    <Route path={"/table-example"} component={TableExample}/>
                    <Route path={"/regex-test"} component={TestRegex}/>
                    <Route path={"/html-parser-test"} component={HtmlParserFormExample}/>
                    <Route path={"/draw-html-to-ms-office-test"} component={TestDrawHtmlToMSOfficeEditorForm}/>
                    <Route path={"/auto-focus-test"} component={AutoFocusInputExample}/>
                    <Route path={"/go-musik"} component={MouseTracker}/>
                    <Route path={"/go-musik-hoc"} component={MouseTrackerWithHOC}/>
                </Switch>
            </main>
        )
    }
}

export default Main;

