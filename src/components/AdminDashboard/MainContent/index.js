import React, { useEffect, useState } from "react";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import InputAdornment from "@mui/material/InputAdornment";
import SearchIcon from '@mui/icons-material/Search';
import Typography from "@mui/material/Typography";
import Filter from "./Filter";
import MainTable from "./Table";
import IconButton from "@mui/material/IconButton";
import AddCircleIcon from '@mui/icons-material/AddCircle';
import ProductDialog from "./Table/products/ProductDialog";

const Main = () => {
  const [search, setSearch] = useState("");
  const [categoriesFilter, setCategoriesFilter] = useState([]);
  const [brandsFilter,setBrandsFilter] = useState([]);
  const categories = ["Phones", "Tablets", "Smart Watch", "Notebooks"]
  const brands = ["Samsung", "Apple", "Alcatel"]
  const [openDialog,setOpenDialog]= useState(false)

  const handleSearch = (e) => {
    setSearch(e.target.value);
  };

  const handleDialog = () => {
    setOpenDialog(!openDialog)
  }

  useEffect(()=>{
    console.log(categoriesFilter)
  },[categoriesFilter])

  return (
    <>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Typography sx={{fontWeight:'500'}} item variant="h5"> Products </Typography>
        </Grid>
        <Grid item xs={12}>
          <TextField
              item
              fullWidth
              hiddenLabel
              variant="filled"
              value={search}
              onChange={handleSearch}
              InputProps={{
              startAdornment: <InputAdornment position="start"><SearchIcon/></InputAdornment>,
              style:{backgroundColor:"white"}
              }}
              placeholder="Search"
          />
        </Grid>
        <Grid item container display='flex' flexDirection="row" justifyContent="space-between">
              <Grid item xs={10} spacing={3} container>
                <Grid item xs={6}>
                  <Filter set={setCategoriesFilter} value={categoriesFilter || []} names={categories} text="Categories"/>
                </Grid>
                <Grid item xs={6}>
                  <Filter set={setBrandsFilter} value={brandsFilter || []} names={brands} text="Brands"/>
                </Grid>
              </Grid>
              <Grid item xs={2} display="flex" justifyContent="right">
                <IconButton onClick={handleDialog} item color="primary" aria-label="add product">
                  <AddCircleIcon fontSize="large"/>
                </IconButton>
              </Grid>
        </Grid>
        <Grid item xs={12}>
          <MainTable/>
        </Grid>
      </Grid>
      <ProductDialog openDialog={openDialog} handleDialog={handleDialog}/>
    </>
  );
};

export default Main;
