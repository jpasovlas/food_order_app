import classes from './../../../assets/css/MealItem.module.css';

const MealItem = (props) => {
    const mealPrice = `$${props.mealItem.price.toFixed(2)}`;

    return (
        <li className={classes.meal}>
            <div>
                <h3>{props.mealItem.name}</h3>
                <div className={classes.description}>{props.mealItem.description}</div>
                <div className={classes.price}>{mealPrice}</div>
            </div>
            <div></div>
        </li>
    );
};

export default MealItem;