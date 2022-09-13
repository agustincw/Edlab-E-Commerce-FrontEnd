import React from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import { TextField } from "@mui/material";
import { Container } from "@mui/system";
import { Button } from "@mui/material";
import { Grid } from "@mui/material";
import { Link } from "react-router-dom";
/* import ReCAPTCHA from "react-google-recaptcha"; */
import { useRef, useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { setUser } from "../store/user";
import { useNavigate } from "react-router";
import Alerts from "./Alerts"

//OTRO
import { useSelector } from "react-redux";

const Login = () => {
  // const [captchaValue, setCaptchaValue] = useState(null);
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const dispatch = useDispatch();
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


  /* const captcha = useRef(null); */

  /* const onChange = () => {
    console.log("El usuario no es un robot");
    console.log(captcha.current);
    console.log(captcha.current.getValue());
    if (captcha.current.getValue()) {
      setCaptchaValue(true);
    }
  }; */

  

  const onSubmit = (data) => {
    /* if (captcha.current.getValue()) {
      setCaptchaValue(true);
    } */
  axios
      .post("http://localhost:3001/api/users/login", data)
      .then((res) => {
        dispatch(setUser(res.data));
        localStorage.setItem("user", JSON.stringify(res.data.user));
        localStorage.setItem("token",res.data.token)
        navigate("/");

        ;})
          .catch((error) => {
            handleClick()
            
          });
  };

  return (
    <Container className="login_and_register_container" fixed maxWidth="xs">
      <Alerts open={open} type={"error"} text="Usuario o contraseña no encontrado!" error handleClick={handleClick} handleClose={handleClose}/>
      
      <h1>Sign in to your Edlab account</h1>

      <form className="form-column" onSubmit={handleSubmit(onSubmit)}>
        {/* register your input into the hook by invoking the "register" function */}
        <Grid
          container
          direction="column"
          justifyContent="flex-end"
          alignItems="center"
        >
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
            id="standard-basic 
        "
            label="Password"
            type="password"
            variant="standard"
            {...register("password", { required: true })}
            error={!!errors?.password}
            helperText={!!errors?.password ? errors.password.message : null}
            fullWidth
          />
          {errors.password && <span>*Password Require*</span>}

          <hr />
        </Grid>
        <Button
          className="Button_Login_Register"
          sx={{
            background: "#000",
          }}
          type="submit"
          variant="contained"
          size="medium"
        >
          login
        </Button>
      </form>
      {/* <div className="reCaptcha">
        <ReCAPTCHA
          sitekey="6LfTsVEgAAAAAPcc1IVgnxklQYzebjTdrgfcKc7r"
          onChange={onChange}
          ref={captcha}
        />
      </div>
      <div>
        {captchaValue === false && <p>Porfavor hace click en el checkbox</p>}
      </div> */}
      <p className="p_CreateAccount">
        Don't have an account? <Link to="/register">Create account</Link>
      </p>
    </Container>
  );
};

export default Login;
