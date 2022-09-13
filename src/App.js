import "./App.css";
import React ,{useState, useEffect} from "react";
import Register from "./components/Register";
import { Routes, Route } from "react-router-dom";
import Login from "./components/Login"
import Navbar from "./components/Navbar";
import Products from "./components/Products";
import  Home  from "./components/Home";
import ProductItem from "./components/ProductItem"
import Loading from "./components/Loading";
import AdminDashboard from "./components/AdminDashboard";
import ProductCard from "./components/ProductCard";
import axios from "axios";
import Shop from "./components/Shop/Shopscreen"
import Checkout from "./components/Checkout/Checkout";
import { NotFound } from "./components/NotFound/NotFound";


const App = () => {
  const [products, setProducts] = useState({})

  useEffect(() => {
    axios.get('http://localhost:3001/api/products').then((products) => {
      console.log(products.data)
      setProducts(products.data);
    });
  }, []);
  return (
  <>

  <Navbar />   
  <Routes>    

    <Route path="/" element={<Home/>}/> 
    <Route path="/productItem/:id" element={<ProductItem/>}/>
    <Route path="/shop" element={<Shop />} />
    <Route path="/products" element={<Products/>}/>
    <Route path="/products/:name" element={<Products/>}/>
    <Route path="/products/details/:id" element={<ProductCard/>}/> 
    <Route path="/products/search/:name" element={<Products/>}/>
    <Route path="/register" element={<Register />} />
    <Route path="/login" element={<Login />} />
    <Route path="/loading" element={<Loading/>} />
    <Route path="/admin" element={<AdminDashboard/>}/>
    <Route path='/shop/checkout' element={ <Checkout />} />
    <Route path='*' element = { <NotFound />} />
  </Routes>
  </>
  );
}

export default App;