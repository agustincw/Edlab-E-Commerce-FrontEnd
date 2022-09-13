import React, { useState } from "react";
import { Button } from "@mui/material";
import Chip from '@mui/material/Chip';
import "../../src/styles.css";
import Box from '@mui/joy/Box';
import Carousel, { consts } from "react-elastic-carousel";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { useNavigate } from "react-router";
import styled from "styled-components";
import CardContent from '@mui/joy/CardContent';
import Typography from '@mui/joy/Typography';

const breakPoints = [
  { width: 1, itemsToShow: 1 },
  { width: 550, itemsToShow: 2, itemsToScroll: 2 },
  { width: 768, itemsToShow: 3 },
  { width: 1200, itemsToShow: 4 },
];

const Item = styled.div`
  display: flex;
  justify-content: center;
  height: 250px;
  width: 100%;
  background-size:contain;
  background-repeat: no-repeat;
  background-position: center;
  margin: 10px;
  font-size: 4em;
`;

const Carrouseles = ({ products }) => {
  const [items, setItems] = useState([1]);

  const addItem = () => {
    const nextItem = Math.max(1, items.length + 1);
    setItems([...items, nextItem]);
  };

  const removeItem = () => {
    const endRange = Math.max(0, items.length - 1);
    setItems(items.slice(0, endRange));
  };
  console.log(products)
  const navigate = useNavigate();
  const handleClick = (id) => {
    navigate(`/products/details/${id}`);
  };

  return (
    <div className="App">
      <div className="controls-wrapper">  
      {/*BOTON DEL ADMIN/*}
      {/* <button onClick={removeItem}>Remove Item</button>
        <button onClick={addItem}>Add Item</button>*/}</div> 
      <Button
        onClick={handleClick}
        variant="text"
        sx={{ color: "#000", fontSize: 20 }}
      >
        PRODUCTS
      </Button>
      <div className="carousel-wrapper">
    
        <Carousel
          breakPoints={breakPoints}
          renderArrow={({ type, onClick }) => {
            const pointer =
              type === consts.PREV ? (
                <ArrowBackIosNewIcon />
              ) : (
                <ArrowForwardIosIcon />
              );
            return (
              <button className="ButtonCarrousel" onClick={onClick}>
                {pointer}
                <span class="circle" aria-hidden="true"></span>
              </button>
            );
          }}
        >
          {products?.map((product, i) => (
            <Item style={{ backgroundImage: `url("${product.image[0]}")`,  }}
            className="card"
            key={i}
          >
            {  <CardContent sx={{ textAlign:"center", gap: 1 }}>
             
             <Typography
        
                 fontWeight="lg"
                 fontSize={50}
                 textColor="#fff"
                 mt={{ xs:90, sm: 24 }}
                 fontFamily= {"Roboto"}
               >
               <Typography textColor="#fff"  fontFamily= {"Roboto"}></Typography>
               </Typography>
              <Box >  <Chip label="Learn More" variant="outlined" sx={{backgroundColor:"#000", color:"#fff",padding:0.8}}  onClick={() => handleClick(product.id)} /></Box>
              
             
             </CardContent>}
          </Item>
         
          ))}
        </Carousel>
      </div>
    </div>
  );
};

export default Carrouseles;
