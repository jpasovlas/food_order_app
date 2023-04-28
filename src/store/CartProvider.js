import CartContext from "./cart-context";
import { useReducer } from "react";

const defaultCartState = {
    items : [],
    total : 0
};

const cartReducer = (state, action) => {

    if (action.type === 'ADD') {
        let updatedCartItems = [];
        const existingCartItemIndex = state.items.findIndex(item => item.id === action.item.id);
        const existingCartItem = state.items[existingCartItemIndex];

        if (existingCartItemIndex in state.items) {
            let updatedItem = {
                ...existingCartItem,
                amount: existingCartItem.amount + action.item.amount
            };

            updatedCartItems = [...state.items];
            updatedCartItems[existingCartItemIndex] = updatedItem;
        } else {
            updatedCartItems = state.items.concat(action.item);
        }

        const updatedTotal = (state.total + action.item.price) * action.item.amount;

        return {
            items : updatedCartItems,
            total : updatedTotal
        };
    }

    if (action.type === 'DELETE') {
        const existingCartItemIndex = state.items.findIndex(item => item.id === action.id);
        const existingCartItem = state.items[existingCartItemIndex];
        const updatedTotal = state.total - existingCartItem.price;

        let updatedItems = [];
        if (existingCartItem.amount === 1) {
            updatedItems = state.items.filter(item => item.id !== action.id);
        } else {
            let updatedItem = {
                ...existingCartItem,
                amount : existingCartItem.amount - 1
            };
            updatedItems = [...state.items];
            updatedItems[existingCartItemIndex] = updatedItem;
        }

        return {
            items : updatedItems,
            total : updatedTotal < 0 ? 0 : updatedTotal
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
        dispatchCartAction({type : 'DELETE', id : itemId});
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