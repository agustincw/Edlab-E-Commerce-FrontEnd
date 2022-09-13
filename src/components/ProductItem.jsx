import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import { Container } from "@mui/system";


const ProductItem = ()=>{

    const [product, setProduct]= useState({})
    const params =useParams()
    const productId= params.id

    useEffect(()=>{
        axios.get("http://localhost:3001/api/products/"+productId)
        .then((res)=>{
            setProduct(res.data)
        })
    })

    return(

        <Container>
            <h1>{product.name}</h1>
            
                <Card sx={{ maxWidth: 345 }}>
                <CardActionArea>
                <CardMedia
                    component="img"
                    height="500"
                    image={product.image}
                    alt={product.name}
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                    {product.name}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                    {product.description}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                    ${product.price}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                    Stock disponible:{product.stock}
                    </Typography>
                </CardContent>
                </CardActionArea>
            </Card>
        </Container>
  
    )
}


export default ProductItem