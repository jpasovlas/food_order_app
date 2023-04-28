import React, {useContext} from 'react';
import classes from './../../assets/css/HeaderCartButton.module.css';
import CartIcon from '../Cart/CartIcon';
import CartContext from '../../store/cart-context';

const Header = (props) => {

    const ctx = useContext(CartContext);

    const cartItemsLength = ctx.items.reduce((curr, item) => {
        return curr + item.amount;
    }, 0);

    return (<button className={classes.button} onClick={props.onClick}>
        <span className={classes.icon}>
            <CartIcon />
        </span>
        <span>
            Your Cart
        </span>
        <span className={classes.badge}>
            {cartItemsLength}
        </span>
    </button>);
};

export default Header;