import React from 'react';
import classes from './../../assets/css/HeaderCartButton.module.css';
import CartIcon from '../Cart/CartIcon';

const Header = (props) => {
    return (<button className={classes.button}>
        <span className={classes.icon}>
            <CartIcon />
        </span>
        <span>
            Your Cart
        </span>
        <span className={classes.badge}>
            3
        </span>
    </button>);
};

export default Header;