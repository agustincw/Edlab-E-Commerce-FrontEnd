import React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router";
// import { BungalowTwoTone } from "@mui/icons-material";

const Product = ({ product }) => {
  console.log(product);
  const navigate = useNavigate();

  return (
    <div>
      <Link to={"/products/details/" + product.id}>
      <Card sx={{ maxWidth: 200, border: "none" }} elevation={0}>
        <CardMedia
          component="img"
          height="350"
          image={product.image[0]}
          alt={product.name}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {product.name}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            ${product.price}
          </Typography>
        </CardContent>
        <CardActions elevation={0}>
        </CardActions>
      </Card>
    </Link>
    </div>
  );
};

export default Product
