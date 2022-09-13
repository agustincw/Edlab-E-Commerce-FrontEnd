import React from "react";
import logo from "./notFound.gif";
import { Grid } from "@mui/material";
import { Link } from "react-router-dom";

export const NotFound = () => {
  return (

    <Grid
      container
      spacing={0}
      direction="column"
      alignItems="center"
      justifyContent="center"
      style={{ minHeight: "100vh", display: "flex", justifyContent: "center" }}
    >
      <div>
        <img src={logo} alt="loading..." />
        <Link
          style={{
            display: "flex",
            justifyContent: "center",
            textDecoration: "none",
            fontSize: "2rem",
            color: "black",
          }}
          to="/"
        >
          <strong>GO HOME YOU'RE DRUNK</strong>
        </Link>
      </div>
    </Grid>
  );
};
