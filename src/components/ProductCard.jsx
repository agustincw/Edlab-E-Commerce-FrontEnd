import React from "react";
import axios from "axios";
import { useParams } from "react-router";
import { useState, useEffect } from "react";
import { Grid } from "@mui/material";
import { Typography } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import { Button } from "@mui/material";
import ShoppingCartRoundedIcon from "@mui/icons-material/ShoppingCartRounded";
import { Box } from "@mui/system";
import { addToCart } from "../store/cart";
import { useDispatch } from "react-redux";
import Reviews from "./Reviews";
import { useSelector } from "react-redux";
import CardMedia from "@mui/material/CardMedia";
import Container from "@mui/material/Container";

const ProductCard = () => {
  const params = useParams();
  const productCard = params.id;

  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);

  const [product, setProduct] = useState({});
  const [quantity, setQuantity] = useState(1);
  const [purchase, setPurchase] = useState(false);

  const addProduct = (e)=>{
    e.preventDefault()
    dispatch(addToCart({product,quantity,token:user.token}))
  }

  useEffect(() => {
    axios
      .get(`http://localhost:3001/api/products/${productCard}`)
      .then((res) => {
        setProduct(res.data);
      });
  }, []);

  // useEffect para saber si es comprador
  useEffect(() => {
    axios
      .get(`http://localhost:3001/api/users/isBuying?productId=${product.id}`)
      .then(() => {
        setPurchase(true);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div>
      <Grid container spacing={3} direction="column" sx={{ marginTop: "5rem" }}>
        <Grid item xs={12} container>
          <Grid item
            xs={6}
          >
            <CardMedia sx={{ width: "66%" }} style={{ display: "flex", justifyContent: "center" }} >
              <img src={product.image} alt={product.name} width="50%"/>
            </CardMedia>
          </Grid>
          <Grid item xs={5}>
            <Typography sx={{ lineHeight: 2 }} variant="h4">
              {product.name}
            </Typography>
            <Typography sx={{ lineHeight: 1 }} variant="h5">
              {product.description}
            </Typography>
            <Typography Typography sx={{ lineHeight: 3 }} variant="h6">
              Precio ${product.price}
            </Typography>
            {user.user && <>
            <Typography
              sx={{ lineHeight: 3, color: "grey" }}
              variant="subtitle1"
            >
              Stock disponible: {product.stock}
            </Typography>
            <Box display="flex" sx={{ margin: 1 }}>
              <Button
                onClick={() => {
                  if (quantity > 1) setQuantity(quantity - 1);
                }}
              >
                <RemoveIcon />
              </Button>
              <Typography>{quantity}</Typography>
              <Button
                onClick={() => {
                  if (quantity < product.stock) setQuantity(quantity + 1);
                }}
              >
                <AddIcon />
              </Button>
            </Box>
            <Grid item xs={12}>
              <Button
                onClick={addProduct}
                variant="contained"
                fullWidth
                endIcon={<ShoppingCartRoundedIcon />}
                display="flex"
                sx={{ margin: 1 }}
              >
                Agregar
              </Button>
            </Grid>
            </>}
          </Grid>
        </Grid>
        <Grid item xs={12} container>
          <Grid item xs={5} sx={{ margin: 1 }}></Grid>
          <Grid item xs={12} container>
            <Grid item xs={5} container sx={{ margin: 1 }}>
              <Reviews product={product} />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
};

export default ProductCard;
