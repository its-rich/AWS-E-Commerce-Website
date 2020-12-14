import React from 'react';
import { Route, Switch } from 'react-router-dom';
import logo from '../images/logo.png';
import '../styles/styles.css';

class NavBar extends React.Component {

    constructor(props) {
        super(props);
        this.state = {

        }
    }

    render() {
        return(
            <header>
                <div className="navLogo">
                    <img src={logo} alt="" width="60px"/>
                </div>
                <div className="navBrand">
                    <h1>Green Foods</h1>
                    <h1>Straight From The Farm</h1>
                </div>
                <div className="navSearch">
                    <input type="text" className="search"/>
                    <span class="material-icons" style={{color:"black"}}>search</span>
                </div>
            </header>
        );
    }
}

export default NavBar;
