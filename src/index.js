/**
 * Created by Arulat on 26.04.2018.
 */
import React from 'react';
import {BrowserRouter} from 'react-router-dom'
import ReactDOM from 'react-dom';
import App from './app/components/App'
// import '../node_modules/react-bootstrap-table/dist/react-bootstrap-table-all.min.css'
import '../node_modules/react-bootstrap-table/dist/react-bootstrap-table.min.css'

ReactDOM.render(
    <BrowserRouter>
        <App />
    </BrowserRouter>,
    document.getElementById('root')
);


