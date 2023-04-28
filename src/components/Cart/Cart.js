import classes from './../../assets/css/Cart.module.css';
import Modal from '../UI/Modal';
import { useContext } from 'react';
import CartContext from './../../store/cart-context';
import CartItem from '../CartItem/CartItem';

const Cart = (props) => {
    const ctx = useContext(CartContext);

    const total = `$${ctx.total.toFixed(2)}`;
    const hasItemFlag = ctx.items.length > 0;
    const addItemHandler = (item) => {
        ctx.addItem({...item, amount : 1});
    };
    const removeItemHandler = (id) => {
        ctx.removeItem(id);
    };

    const cartItems = ctx.items.map(cartItem => (
        <CartItem
            key={cartItem.id}
            cartItem={cartItem}
            onRemove={removeItemHandler.bind(null, cartItem.id)}
            onAdd={addItemHandler.bind(null, cartItem)} />
    ));

    return (
        <Modal onClose={props.onCloseCart}>
            <ul className={classes['cart-items']}>
                {cartItems}
            </ul>
            <div className={classes.total}>
                <span>Total Amount</span>
                <span>{total}</span>
            </div>
            <div className={classes.actions}>
                <button className={classes['button--alt']} onClick={props.onCloseCart}>Close</button>
                {hasItemFlag && <button className={classes.button}>Order</button>}
            </div>
        </Modal>
    );
};

export default Cart;