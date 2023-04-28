import React, {useContext, useEffect, useState} from 'react';
import classes from './../../assets/css/HeaderCartButton.module.css';
import CartIcon from '../Cart/CartIcon';
import CartContext from '../../store/cart-context';

const Header = (props) => {
    const [buttonBumpFlag, setButtonBumpFlag] = useState(false);

    const ctx = useContext(CartContext);
    const {items} = ctx;

    const cartItemsLength = items.reduce((curr, item) => {
        return curr + item.amount;
    }, 0);

    const btnClass = `${classes.button} ${buttonBumpFlag ? classes.bump : ''}`;

    useEffect(() => {
        if (items.length > 0) {
            setButtonBumpFlag(true);
            const disableBumpTimer = setTimeout(() => {
                setButtonBumpFlag(false);
            }, 300);

            return () => {
                clearTimeout(disableBumpTimer);
            };
        }
    }, [items]);

    return (<button className={btnClass} onClick={props.onClick}>
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