import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    isOpen: false,
    cart: (typeof window !== "undefined") && JSON.parse(localStorage.getItem('cart')) || [],
}

const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        openCart: (state) => {
            state.isOpen = true;
        },
        closeCart: (state) => {
            state.isOpen = false;
        },
        addToCart: (state, action) => {
            const selectedProduct = state.cart.find((product) => product.id === action.payload.id);

            if (!selectedProduct) {
                const product = { ...action.payload }
                state.cart.push(product);
            } else {
                selectedProduct.quantity += action.payload.quantity;
                
                state.cart.filter((product) => product.id !== action.payload.id).push(selectedProduct);
            }
        },


        incressQuantity: (state, action) => {
            const selectedProduct = state.cart.find((product) => product.id === action.payload.id);

            // if (selectedProduct.stock > selectedProduct.quantity) {
                selectedProduct.quantity += 1;
                state.cart.filter((product) => product.id !== action.payload.id).push(selectedProduct);
            // }
        },
        decressQuantity: (state, action) => {
            const selectedProduct = state.cart.find((product) => product.id === action.payload.id);

            if (selectedProduct.quantity >= 2) {
                selectedProduct.quantity -= 1;

                state.cart.filter((product) => product.id !== action.payload.id).push(selectedProduct);
            } else {
                state.cart = state.cart.filter((product) => product.id !== action.payload.id);
            }
        },
        removeFromCart: (state, action) => {
            state.cart = state.cart.filter((product) => product.id !== action.payload.id);
        },
        clearCart: (state) => {
            state.cart = [];
        }
    }
});

export const { openCart, closeCart, addToCart, incressQuantity, decressQuantity, removeFromCart, clearCart } = cartSlice.actions;

export default cartSlice.reducer;