import classes from './../../assets/css/Cart.module.css';
import Modal from '../UI/Modal';

const Cart = (props) => {
    const dummyCartItem = [{id : 'c5', name : 'Cart Name'}];
    const cartItems = dummyCartItem.map(cartItem => (
        <li key={cartItem.id}>{cartItem.name}</li>
    ));

    return (
        <Modal onClose={props.onCloseCart}>
            <ul className={classes['cart-items']}>
                {cartItems}
            </ul>
            <div className={classes.total}>
                <span>Total Amount</span>
                <span>35.62</span>
            </div>
            <div className={classes.actions}>
                <button className={classes['button--alt']} onClick={props.onCloseCart}>Close</button>
                <button className={classes.button}>Order</button>
            </div>
        </Modal>
    );
};

export default Cart;