import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    cart: [],
};

const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        addToCart: (state, action) => {
            const itemInCart = state.cart.find(
                (e) => e.id === action.payload.id
            );
            if (itemInCart !== undefined) {
                itemInCart.amount++;
            } else {
                state.cart.push({...action.payload, amount: 1});
            }
        },
        clearCart: (state) => {
            state.cart = initialState
        },
        removeFromCart: (state, action) => {
            state.cart = state.cart.filter((e) => e.id !== action.payload);
        },
        incrementAmount: (state, action) => {
            const item = state.cart.find((e) => e.id === action.payload);
            item.amount++;
        },
        decrementAmount: (state, action) => {
            const item = state.cart.find((e) => e.id === action.payload);
            if (item.amount === 1) {
                state.cart = state.cart.filter((e) => e.id !== item.id)
            } else {
                item.amount--;
            }
        },
    },
});

export const { addToCart, removeFromCart, incrementAmount, decrementAmount, clearCart } = cartSlice.actions;
export const selectCart = (state) => state.cart.cart;

export default cartSlice.reducer;
