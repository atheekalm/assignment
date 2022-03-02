import { createSlice } from "@reduxjs/toolkit";
import { product } from "../../app/models/models";


interface cart {
    cartItems: product[],
    carttotalquantity: number,
    totalamount: number,
    cartamount: number[]
}


const initialState: cart = {
    cartItems: [],
    carttotalquantity: 0,
    totalamount: 0,
    cartamount: []
}




export const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        carttotalquantityIncrement: (state, action) => {
            const incrementproduct = state.cartItems.find(x => x.id === action.payload.id)
            if (incrementproduct) {
                incrementproduct.cartquantity += 1;
                state.carttotalquantity += 1;
            }
        },
        carttotalquantityDecrement: (state, action) => {
            const decrementproduct = state.cartItems.find(x => x.id === action.payload.id)
            if (decrementproduct) {
                if (decrementproduct.cartquantity > 1) {
                    decrementproduct.cartquantity -= 1;
                    state.carttotalquantity -= 1;

                }
            }
        },
        addtocart: (state, action) => {
            const itemindex = state.cartItems.findIndex(x => x.id === action.payload.id);

            if (itemindex >= 0) {
                state.cartItems[itemindex].cartquantity += 1;
                state.carttotalquantity += 1;
            } else {
                const addproduct = { ...action.payload, cartquantity: 1 }
                state.carttotalquantity += 1;
                state.cartItems.push(addproduct)
            }
        },
    },
})


export const { addtocart, carttotalquantityIncrement, carttotalquantityDecrement } = cartSlice.actions;