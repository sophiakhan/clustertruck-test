import React from 'react';
import './css/App.css';

class Nav extends React.Component {
    render() {
        return <div>
            <div className="nav-bar">
                <a href="https://www.clustertruck.com/">
                    <img src="img/ct-logo.png" alt="clustertruck-logo" height="50" />
                </a>
                
                <ul className="list-inline pull-right">
                    <li>
                        <a href="https://downtown-indy.clustertruck.com/menu">
                            <i className="fa fa-cutlery" aria-hidden="true"></i>
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    }
}

export default Nav;