import classes from './../../../assets/css/MealItemForm.module.css';
import Input from '../../UI/Input';
import { useRef, useState } from 'react';

const MealItemForm = (props) => {

    const amountRef = useRef();
    const [amountFlag, setAmountFlag] = useState(true);
    const submitHandler = event => {
        event.preventDefault();

        const enteredAmount = amountRef.current.value;
        const enteredAmountNum = +enteredAmount;
        const validAmount = enteredAmount.trim().length === 0 || enteredAmountNum < 1 || enteredAmountNum > 5;

        if (validAmount) {
            setAmountFlag(false);
            return;
        }

        props.onAddToCart(enteredAmountNum);
    };

    return (
        <form className={classes.form} onSubmit={submitHandler}>
            <Input
                ref={amountRef}
                label='Amount'
                input={{
                    id : 'amount_' + props.id,
                    type : 'number',
                    min : '1',
                    max : '5',
                    defaultValue : '1'
                }} />
            <button>+ Add</button>
            {!amountFlag && <p>Invalid quantity!</p>}
        </form>
    );
};

export default MealItemForm;