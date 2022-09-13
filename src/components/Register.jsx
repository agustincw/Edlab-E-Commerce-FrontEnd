import React , {useState}from "react";
import { set, useForm } from "react-hook-form";
import axios from "axios";
import { TextField } from "@mui/material";
import { Container } from "@mui/system";
import { Button } from "@mui/material";
import { useNavigate } from "react-router";

import { Grid } from "@mui/material";

import Alerts from "./Alerts"

const Register = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const navigate = useNavigate();
  
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

  const onSubmit = (data) => {
    axios
      .post("http://localhost:3001/api/users/register", data)
      .then((res) => { return res.data
      },
      handleClick())
      setTimeout(() => {
       navigate("/login"); 
      }, 1000);
   
   };


  return (
    <Container  className="login_and_register_container" maxWidth="xs">
    <Alerts open={open} type={"success"} text="Usuario Creado" error handleClick={handleClick} handleClose={handleClose}/>
       <h1>Create account here</h1>
      <form className="form-column" onSubmit={handleSubmit(onSubmit)}>
        {/* register your input into the hook by invoking the "register" function */}
        <Grid
          container
          direction="column"
          justifyContent="center"
          alignItems="center"
        >
          <TextField
            id="standard-basic"
            label="First name"
            variant="standard"
            {...register("first_name")}
            fullWidth
          />

          <TextField
            id="standard-basic"
            label="Last name"
            variant="standard"
            {...register("last_name")}
            fullWidth
          />
          <TextField
            id="standard-basic"
            label="Email"
            variant="standard"
            {...register("email", { required: true })}
            error={!!errors?.email}
            helperText={!!errors?.email ? errors.email.message : null}
            fullWidth
          />

        {errors.email && <span>*Email Require*</span>}
          <TextField
            id="standard-basic"
            label="Password"
            type="password"
            variant="standard"
            {...register("password", { required: true })}
            error={!!errors?.password}
            helperText={!!errors?.password ? errors.password.message : null}
            fullWidth
          />

          {/* errors will return when field validation fails  */}
          {errors.password && <span>*Password Require*</span>}
       
          <hr />
        </Grid>
        <Button  className="Button_Login_Register" type="submit" variant="contained" size="medium">
          Register
        </Button>
      </form>
   
    </Container>
  );
};

export default Register;
