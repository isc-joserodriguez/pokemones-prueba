import React from 'react';
import classes from './Navigation.module.css';
import logo from '../../assets/images/pokeball.png';


const Navigation = () => (
    <header className={classes.Toolbar}>
        <div className={classes.Logo}>
            <img src={logo} alt="MyLogo" />
        </div>
    </header>
)


export default Navigation;