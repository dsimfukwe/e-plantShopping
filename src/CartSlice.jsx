import { createSlice } from '@reduxjs/toolkit';

export const CartSlice = createSlice({
  name: 'cart',
  initialState: {
    items: [], // Initialize items as an empty array
    cartTotal: 0,
  },
  reducers: {
    addItem: (state, action) => {
      const { name, image, cost } = action.payload;
      //console.log(action.payload);
      const existingItem = state.items.find(item => item.name === name);
      if (existingItem) {
        existingItem.quantity++;
        state.cartTotal++;
      } else {
        state.items.push({ name, image, cost, quantity: 1 });
        state.cartTotal++;
      } 
    },
    removeItem: (state, action) => {
      console.log(state.cartTotal);
      state.items = state.items.filter(item => item.name !== action.payload.name);
      console.log(action.payload);
      state.cartTotal -= action.payload.quantity;
    },
    updateQuantity: (state, action) => {
      const { name, quantity } = action.payload;
      const itemToUpdate = state.items.find(item => item.name === name);
      if (itemToUpdate) {
        itemToUpdate.quantity = quantity;
        //state.cartTotal += quantity;
      }
    },
    updateCartQ: (state, action) => {
      let act = action.payload;
      if(act === "plus"){
        state.cartTotal++;
      }else if (act === "minus"){
        if(state.cartTotal && state.cartTotal > 0){
          state.cartTotal--;
        }        
      }

    },
  },
});

export const { addItem, removeItem, updateQuantity, updateCartQ } = CartSlice.actions;

export default CartSlice.reducer;
