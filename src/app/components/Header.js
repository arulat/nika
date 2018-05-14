import React, {Component} from 'react';
import {Link} from 'react-router-dom'

class Header extends Component {

    render() {
        return (
            <header>
                <nav>
                    <ul>
                        <li>
                            <Link to={"/"}>Home</Link>
                        </li>
                        <li>
                            <Link to={"/tic-tac-toe"}>Tic tac toe game</Link>
                        </li>
                        <li>
                            <Link to={"/table-example"}>Table example</Link>
                        </li>
                        <li>
                            <Link to={"/regex-test"}>Regex test</Link>
                        </li>
                    </ul>
                </nav>
            </header>
        )
    }
}

export default Header;
