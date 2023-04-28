import CartContext from "./cart-context";
import { useReducer } from "react";

const defaultCartState = {
    items : [],
    total : 0
};

const cartReducer = (state, action) => {

    if (action.type === 'ADD') {
        const updatedCartItems = state.items.concat(action.item);
        const updatedTotal = (state.total + action.item.total) * action.item.amount;

        return {
            items : updatedCartItems,
            total : updatedTotal
        };
    }

    return defaultCartState;
};

const CartProvider = (props) => {

    const [cartState, dispatchCartAction] = useReducer(cartReducer, defaultCartState);

    const addItemHandler = (item) => {
        dispatchCartAction({type : 'ADD', item: item});
    };
    const removeItemHandler = (itemId) => {
        dispatchCartAction();
    };

    const cartContext = {
        items : cartState.items,
        total : cartState.total,
        addItem : addItemHandler,
        removeItem : removeItemHandler
    };

    return <CartContext.Provider value={cartContext}>{props.children}</CartContext.Provider>;
};

export default CartProvider;