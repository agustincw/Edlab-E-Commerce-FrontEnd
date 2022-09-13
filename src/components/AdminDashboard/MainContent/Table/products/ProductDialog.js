import React, { useState } from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import Divider from "@mui/material/Divider";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import CloseIcon from "@mui/icons-material/Close";
import Slide from "@mui/material/Slide";
import FormControl from "@mui/material/FormControl";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import InputLabel from "@mui/material/InputLabel";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import InputAdornment from "@mui/material/InputAdornment";
import { styled } from "@mui/system";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const AreaContainer = styled(Box)({
  display: "flex",
  gap: "1rem",
  flexDirection: "column",
});

const ImagePreview = styled(Box)({
  height: "150px",
  width: "150px",
  backgroundSize: "cover",
});

export default function ProductDialog({ handleDialog, openDialog }) {
  const [image, setImage] = useState("");

  return (
    <Dialog fullScreen open={openDialog} TransitionComponent={Transition}>
      <AppBar sx={{ position: "relative", height: "67px" }}>
        <Toolbar>
          <IconButton
            edge="start"
            color="inherit"
            onClick={handleDialog}
            aria-label="close"
          >
            <CloseIcon />
          </IconButton>
          <Typography sx={{ ml: 2, flex: 1 }} variant="h6" component="div">
            Add product
          </Typography>
        </Toolbar>
      </AppBar>
      <Grid
        container
        sx={{
          backgroundColor: "#F9FAFC",
          pt: "4rem",
          paddingBottom: "4rem",
        }}
        display="flex"
        justifyContent="center"
      >
        <Grid xs={10} md={4} display="flex" flexDirection="column" gap={3}>
          <AreaContainer display="flex" gap={2} flexDirection="column">
            <Typography variant="h5"> Basic details </Typography>
            <TextField fullWidth label="Name" size="small" />
            <TextField
              size="small"
              fullWidth
              label="Description"
              multiline
              rows={2}
              maxRows={4}
              inputProps={{
                style: { height: "100px" },
              }}
            />
          </AreaContainer>
          <Divider />
          <AreaContainer>
            <Typography variant="h5"> Image </Typography>
            <TextField
              fullWidth
              label="Url"
              size="small"
              value={image}
              onChange={(e) => {
                setImage(e.target.value);
              }}
            />
            <Paper>
              <ImagePreview sx={{ backgroundImage: `url("${image}")` }}>
                {" "}
              </ImagePreview>
            </Paper>
          </AreaContainer>
          <Divider />
          <AreaContainer>
            <Typography variant="h5"> Category </Typography>
            <FormControl fullWidth>
              <InputLabel> Category </InputLabel>
              <Select label="Category">
                <MenuItem value={"Samsung"}>Samsung</MenuItem>
                <MenuItem value={"Alcatel"}>Alcatel</MenuItem>
                <MenuItem value={"Apple"}>Apple</MenuItem>
                <MenuItem value={"Motorola"}>Motorola</MenuItem>
              </Select>
            </FormControl>
          </AreaContainer>
          <Divider />
          <AreaContainer>
            <Typography variant="h5"> Price </Typography>
            <TextField
              fullWidth
              inputProps={{ inputMode: "numeric" }}
              label="Price"
              type="number"
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">$</InputAdornment>
                ),
              }}
            />
          </AreaContainer>
          <Box sx={{mt:'1.5rem'}}>
            <Grid display="flex" gap={3}>
              <Button item variant="contained" color="primary">
                Create
              </Button>
              <Button
                item
                variant="outlined"
                color="primary"
                onClick={handleDialog}
              >
                Cancel
              </Button>
            </Grid>
          </Box>
        </Grid>
      </Grid>
    </Dialog>
  );
}
