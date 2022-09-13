import React, { useState } from "react";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import InputAdornment from "@mui/material/InputAdornment";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import DeleteIcon from '@mui/icons-material/Delete';

const ProductCollapse = ({ row,handleClose }) => {
  
  const handleChange = () => {};
  return (
    <Grid container spacing={4} sx={{ p: "40px 0 40px 0" }}>
      <Grid item xs={12} md={6}>
        <TextField fullWidth label="Name" defaultValue={row.name} />
      </Grid>
      <Grid item xs={12} md={6}>
        <FormControl fullWidth>
          <InputLabel> Category </InputLabel>
          <Select
            defaultValue={"Apple"}
            label="Category"
            onChange={handleChange}
          >
            <MenuItem value={"Samsung"}>Samsung</MenuItem>
            <MenuItem value={"Alcatel"}>Alcatel</MenuItem>
            <MenuItem value={"Apple"}>Apple</MenuItem>
            <MenuItem value={"Motorola"}>Motorola</MenuItem>
          </Select>
        </FormControl>
      </Grid>
      <Grid item xs={6}>
        <TextField
          fullWidth
          label="Old Price"
          defaultValue={row.price}
          InputProps={{
            readOnly: true,
            startAdornment: <InputAdornment position="start">$</InputAdornment>,
          }}
        />
      </Grid>
      <Grid item xs={6}>
        <TextField
          fullWidth
          inputProps={{ inputMode: "numeric" }}
          label="New Price"
          type="number"
          InputProps={{
            startAdornment: <InputAdornment position="start">$</InputAdornment>,
          }}
        />
      </Grid>
      <Grid item sx={{width:"100%"}} display={"flex"} justifyContent="space-between">
        <Grid display="flex" gap={3}>
          <Button item variant="contained" color="primary">
            Update
          </Button>
          <Button item variant="outlined" color="primary" onClick={()=>{handleClose(false)}}>
            Cancel
          </Button>
        </Grid>
        <Button item variant="contained" color="error" startIcon={<DeleteIcon />}>
          DELETE
        </Button>
      </Grid>
    </Grid>
  );
};

export default ProductCollapse;
