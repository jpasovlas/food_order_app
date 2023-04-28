import classes from './../../../assets/css/MealItem.module.css';
import MealItemForm from './MealItemForm';
import { useContext } from 'react';
import CartContext from './../../../store/cart-context';

const MealItem = (props) => {
    const ctx = useContext(CartContext);
    const mealPrice = `$${props.mealItem.price.toFixed(2)}`;

    const onAddToCartHandler = amount => {
        ctx.addItem({
            id : props.mealItem.id,
            name : props.mealItem.name,
            amount : amount,
            price : props.mealItem.price
        });
    };

    return (
        <li className={classes.meal}>
            <div>
                <h3>{props.mealItem.name}</h3>
                <div className={classes.description}>{props.mealItem.description}</div>
                <div className={classes.price}>{mealPrice}</div>
            </div>
            <div>
                <MealItemForm onAddToCart={onAddToCartHandler} />
            </div>
        </li>
    );
};

export default MealItem;