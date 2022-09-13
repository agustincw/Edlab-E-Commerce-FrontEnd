import { createReducer, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const addToCart = createAsyncThunk(
  "ADD_CART",
  async ({product,quantity,token}) => {
   
    const config = {
      headers: { Authorization: `Bearer ${token.replace('"', '')}` }
      };
      return axios.post("http://localhost:3001/api/users/add", {product,quantity}, config)
    .then((res)=>{
      return res.data
    })
     
  }
  );

export const deleteFromCart = createAsyncThunk(
  "DELETE_FROM_CART",
  async ({productToShow,token}) => {
    const config = {
      headers: { Authorization: `Bearer ${token.replace('"', '')}` }
      };
      return axios.post("http://localhost:3001/api/users/remove",{product:productToShow}, config )
     .then((res)=>{
      return res.data 
     })
  }
);

const cartReducer = createReducer(JSON.parse(localStorage.getItem('Cart')) || [], {
  [addToCart.fulfilled]: (state, action) => {
    const newState = [...state, action.payload]
    localStorage.setItem('Cart', newState)
    console.log(action, "ACAAA ACTION PP")
    return newState
  },
  [deleteFromCart.fulfilled]: (state, action) => {
    const newState = state.filter(element => element.product.id !== action.payload.id);
    localStorage.setItem('Cart', JSON.stringify(newState))
    return newState

  }
});

export default cartReducer;
