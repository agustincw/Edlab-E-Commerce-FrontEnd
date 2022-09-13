import axios from "axios"
import React, { useState } from "react";
import Product from "./Product";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import Sidebar from "./Sidebar";
import Container from "@mui/material/Container";
import { useParams } from "react-router";

const Products = ({ productType }) => {
  
    //cada vez que productType comabia de valor ejecuta lo de adentro
    const [products, setProducts] = useState([]);
    const {name} = useParams()

     React.useEffect(() => {
     const search = ["Phones", "Tablets", "Smart watch", "Computers"].includes(name) ? "category": "name"

      axios.get(`http://localhost:3001/api/products?${search}=${name}` )
      .then((products) => {
        setProducts(products.data);
      });
    }, [name]); 

    const searchByBrand =(marca)=>{
      axios
      .get(`http://localhost:3001/api/products?brand=${marca}`)
      .then((res)=>{
        console.log(res.data)
        setProducts(res.data)
      })
    }


    const searchByPrice =(price)=>{
      axios
      .get(`http://localhost:3001/api/products?price=${price}`)
      .then((res)=>{
        setProducts(res.data)
      })
      
     }

     const Item = styled(Paper)(({ theme }) => ({
      backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
      ...theme.typography.body2,
      padding: theme.spacing(2),
      textAlign: 'center',
      color: theme.palette.text.secondary,
    }));

    return (
      <Container sx={{marginTop:"5rem"}}>
            <Sidebar searchByBrand={searchByBrand} searchByPrice={searchByPrice}/>
            <Box sx={{ flexGrow: 1 }}>
            <Grid container spacing={{ xs: 2, md: 5 }} columns={{ xs: 4, sm: 8, md: 12 }}>
              {products.length!=0 && products.map((p) => {
                return (
                  <Grid item >
                    <Card sx={{height:500,
                    display:"flex",
                    justifyContent:""}} 
                    item md={4}
                    spacing={{ xs: 2, md: 3 }}
                    >
                    <Item>
                      <Product product={p}></Product>
                    </Item>
                    </Card>
                  </Grid>
                );
              })}
            </Grid>
          </Box>
          </Container>
  );
}


export default Products;
