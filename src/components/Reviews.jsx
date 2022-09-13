import * as React from "react";
import axios from "axios";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { useState } from "react";
import Stars from "./Stars";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";

const Reviews = ({product}) => {
  const [review, setReview] = useState("");
  const [stars, setStars] = useState(0)

  const ratingChanged = (newRating) => {
    console.log(newRating)
    setStars(newRating)
  }

  const handleChange = (e) => {
    setReview(e.target.value);
  };

  const onSubmit = () => {
    axios.post(`http://localhost:3001/api/products/${product.id}/review`, {review, stars}).then(() => {setReview(""); setStars(0)
    })
    .catch((err) => console.log(err))
  };

  return (
    <Box
      component="form"
      sx={{ "& .MuiTextField-root": { m: 1, width: "50ch" } }}
      noValidate
      autoComplete="off"
    >
      <Stars value={stars} ratingChanged={ratingChanged}/>
      <TextField
        id="outlined-multiline-flexible"
        label="Deja un comentario..."
        multiline
        maxRows={2}
        value={review}
        onChange={handleChange}
      />
      <Stack spacing={2} direction="row">
        <Button variant="text" onClick={onSubmit}
        >ENVIAR</Button>
      </Stack>
    </Box>
  );
};

export default Reviews;
