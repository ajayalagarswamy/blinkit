import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    products: [],
    displayCart: []
};

const addSlice = createSlice({
    name: "addtocart",
    initialState,
    reducers: {
        addtocart(state, action) {
            state.products = [...state.products, ...action.payload.map(product => ({ ...product }))];
            state.displayCart = state.products;
        },
        updateQuantity(state, action) {
            const { name } = action.payload;
            const product = state.products.find((p) => p.name === name);
            if (product) {
                product.quantity += 1;
                product.amount += action.payload.amount
            }
            state.displayCart = state.products;
        },
        decreaseQuantity(state, action) {
            const { name } = action.payload;
            const product = state.products.find((p) => p.name === name);

            if (product) {
                product.quantity = Math.max(1, product.quantity - 1);
                product.amount -= action.payload
            }
            state.displayCart = state.products;
        }
    },
    removeProduct(state, action) {
        const { name } = action.payload;
        const removeProduct = state.products.find((p) => p.name === name);
        if (removeProduct) {
            state.products = state.products.filter((p) => p.name !== name);
            state.displayCart = state.products;
        }
    }

}
);

export const { addtocart, updateQuantity, decreaseQuantity, removeProduct, displayCart } = addSlice.actions;
export default addSlice.reducer;
