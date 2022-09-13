import "./cartitem.css";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import DeleteIcon from "@mui/icons-material/Delete";
import axios from "axios";
import { deleteFromCart } from "../../store/cart";

const CartItem = ({ Actualproduct }) => {
  const user = useSelector(state => state.user)
  const dispatch = useDispatch();
  const productToShow = Actualproduct.product;
  const productQty = Actualproduct.quantity;

 const deleteProduct = () => {
   dispatch(deleteFromCart( {productToShow, token:user.token} ))
 }


  return (
    <div className="cartitem ">
      <h3>{productToShow.name}</h3>
      <div className="cartitem__image">
        <img src={productToShow.image} className="cart_img" alt="product" />
      </div>
      <p className="cartitem__price">${productToShow.price}</p>

      <div>{productQty}</div>
      
      <DeleteIcon onClick = { ()=> deleteProduct() } />
    
    </div>
  );
};

export default CartItem;
