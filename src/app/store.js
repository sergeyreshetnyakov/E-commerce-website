import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { shopApi } from "./fetchProducts";
import { setupListeners } from "@reduxjs/toolkit/query";
import cartReducer from "../features/cart/cartSlice";

const rootReducer = combineReducers({
    [shopApi.reducerPath]: shopApi.reducer,
    cart: cartReducer
})

export const store = configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) => 
        getDefaultMiddleware().concat(shopApi.middleware)
});

setupListeners(store.dispatch)