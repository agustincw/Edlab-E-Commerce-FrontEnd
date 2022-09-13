import React, { useEffect, useState } from "react";
import Imgrepresent from "./Imgrepresent";
import Carrouseles from "./Carrouseles";
import Box from "@mui/joy/Box";
import Card from "@mui/joy/Card";
import CardCover from "@mui/joy/CardCover";
import CardContent from "@mui/joy/CardContent";
import Typography from "@mui/joy/Typography";
import VideoNiño from "../assets/videoniño.mp4";
import Niño from "../assets/niño.png";
import useMediaQuery from "@mui/material/useMediaQuery";
import ProductDestacado from "./ProductDestacado";
import axios from "axios";
import Footer from "./Footer";
import { useSelector } from "react-redux";
import Divider from '@mui/material/Divider';
import Alerts from "./Alerts"
// import Alert from "./Alert";


const Home = () => {
  const user = useSelector((state) => state.user);
  const matches = useMediaQuery("(max-width:900px)");

  const [open, setOpen] = useState(false);

  const handleClick = () => {
    setOpen(true);
  };

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpen(false);
  };

  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:3001/api/products").then((productlist) => {
      setProducts(productlist.data);
    });
  }, []);

  return (
    <>
    {!user.user?<Alerts open={open} type={"success"} text="BIENVENIDO!" error handleClick={handleClick} handleClose={handleClose}/> :null}

      {/*VIDEO DEL MODO PC */}
      <Box
        className={matches ? "displayvideo" : "null"}
        mt={{ xs: 40, sm: 10 }}
        component="ul"
        sx={{ display: "flex", gap: 0, flexWrap: "wrap", p: 1, m: 0 }}
      >
        <Card component="li" sx={{ width: 100, flexGrow: 1, height: 400 }}>
          <CardCover>
            <video autoPlay loop muted poster={Niño}>
              <source src={VideoNiño} type="video/mp4" />
            </video>
          </CardCover>
          <CardContent sx={{ textAlign: "center", gap: 1 }}>
            <Typography
              level="h1"
              fontWeight="lg"
              fontSize={50}
              textColor="#fff"
              mt={{ xs: 40, sm: 38 }}
              ml={{ xs: 40, sm: 10 }}
              fontFamily={"Roboto"}
            >
              EL FUTURO ES HOY, EL FUTURO ES{" "}
              <Typography textColor="#000" fontFamily={"Roboto"}>
                EDLAB
              </Typography>
            </Typography>
          </CardContent>
        </Card>
      </Box>
      {/*IMAGEN DEL MODO PHONE */}
      <Imgrepresent />
      {/*CARROUSEL*/}
      <Carrouseles products={products} />
      {/*IMAGEN DEL PRODUCTO DESTACADO*/}
      <ProductDestacado  />
      <Divider />
      {/*Footer*/}
      <Footer />
    </>
  );
};

export default Home;
