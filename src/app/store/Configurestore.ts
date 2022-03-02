import { configureStore } from "@reduxjs/toolkit";
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import { cartSlice } from "../../features/products/cartSlice";
import { productSlice } from "../../features/products/productSlice";


export const store = configureStore({
    reducer: {
        products: productSlice.reducer,
        cart: cartSlice.reducer
    }
})



export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;