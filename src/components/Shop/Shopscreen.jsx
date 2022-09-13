import React from "react";
import { useNavigate } from "react-router";

import "./shopscreen.css";

import { useSelector } from "react-redux";
import CartItem from "./CartItem";

import { Button } from "@mui/material";
import Alert from '@mui/material/Alert'


export const Shop = () => {
 const products = useSelector(state => state.cart)
 console.log('Productos', products)
 //producto seleccionado y cantidad
 const totalPrice = products.reduce(
  (previousValue, currentValue) => previousValue + (currentValue.product.price * currentValue.quantity),0
);

const navigate = useNavigate();

const handleCheckout = () => {
  // if(products.length === 0){
  //   <Alert severity="warning">This is a warning alert — check it out!</Alert>
  // } else {
  navigate('/shop/checkout');
  // }
}
  return (
    <>
      <div className="cartscreen ">
        <div className="cartscreen__left">
          <h2>Shopping Cart</h2>
          {products.map((product,i)=>{
            return <CartItem key={i} Actualproduct={product}/>
          } )}
       </div>
        <div className="cartscreen__right">
          <div className="cartscreen__info">
            <p>Subtotal items</p>
            <p>$ { totalPrice }</p>
          </div>
          <div>
            <Button onClick={handleCheckout} type="submit" variant="contained" size="medium">
            Proceed To Checkout
          </Button> 
          </div>
        </div>
      </div>
    </>
  );
};

export default Shop