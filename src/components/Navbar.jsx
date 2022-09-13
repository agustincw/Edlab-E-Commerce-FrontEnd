import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import AdbIcon from "@mui/icons-material/Adb";
import { Link } from "react-router-dom";
import Search from "./Search";
import ShoppingCartRoundedIcon from "@mui/icons-material/ShoppingCartRounded";
import logo from "../assets/logo.png";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import useMediaQuery from '@mui/material/useMediaQuery';
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setLogout } from "../store/user";


const Navbar = () => {
  const products = useSelector(state => state.cart)
  const user = useSelector(state=> state.user)
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);
  const [quantityItems, setQuantityItems] = useState(0)
  const dispatch = useDispatch()

  const navigate = useNavigate()

  const matches = useMediaQuery('(max-width:900px)');
  
  
  //const quantity = products.reduce((previousValue, currentValue) => previousValue + (currentValue.product.quantity),0);

  useEffect(()=> {
    setQuantityItems(products.length)
  },[products])
  
  const logout = ()=>{
    localStorage.removeItem("user")
    dispatch(setLogout())
    localStorage.removeItem("token")

  }
  const handleHome = () => {  
  navigate("/") 
  }
  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <AppBar position="fixed" className="MargenNav"  style={{ background: "black" }} sx={{ zIndex: (theme) => theme.zIndex.drawer + 1, height:80}}>
      <Container maxWidth="xl" >
        <Toolbar disableGutters >
          <div>
            <Link to="/">
              <img
                className={matches?"logodisplay":"imagenLogo"}
                src={logo}
                width="70"
                alt="logo EDLAB"
              ></img>
            </Link>
          </div>

          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="primary"
            >
              <MenuIcon sx={{color:"#fff"}} />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              <MenuItem className="form-column" onClick={handleCloseNavMenu}>
                <Link
                  to="/products/Computers"
                  style={{ textDecoration: "none", color: "black" }}
                >
                  <Typography>Computers</Typography>
                </Link>
                <Link
                  to="/products/Tablets"
                  style={{ textDecoration: "none", color: "black" }}
                >
                  <Typography>Tablets</Typography>
                </Link>
                <Link
                  to="/products/Phones"
                  style={{ textDecoration: "none", color: "black" }}
                >
                  <Typography>Phones</Typography>
                </Link>
              </MenuItem>
            </Menu>
          </Box>
          
          <Typography
            variant="h5"
            noWrap
            component="a"
            href=""
            sx={{
              mr: 2,
              display: { xs: "flex", md: "none" },
              flexGrow: 1,
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
            }}
            onClick={handleHome}
          >
            EdLAB
          </Typography>
      

    
          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            <Button>
              <Link
                Link
                to="/products/Computers"
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: "white", display: "block" }}
                style={{ textDecoration: "none", color: "white" }}
              >
                Notebooks
              </Link>
            </Button>
            <Button>
              <Link
        
                to="/products/Tablets"
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: "white", display: "block" }}
                style={{ textDecoration: "none", color: "white" }}
              >
                Tablets
              </Link>
            </Button>
            <Button>
              <Link
                to="/products/Phones"
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: "white", display: "block" }}
                style={{ textDecoration: "none", color: "white" }}
              >
                Phones
              </Link>
            </Button>

          </Box>
          <Search />
          <Box>
           
          </Box>

          <IconButton color="inherit" aria-label="shop" size="medium">
            <Link to="/shop"  style={{ textDecoration: "none", color: "white" }}>
              <ShoppingCartRoundedIcon spaicing={2} fontSize="large"/>
              {products.length !== 0 && quantityItems}
              
            </Link>
          </IconButton>

          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
              <IconButton fontSize="large" onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar  alt="Remy Sharp" src="" />
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: "45px" }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              { !user.user ? 
              <>
                <MenuItem className="form-column">
                  <Link
                    to="/login"
                    onClick={handleCloseUserMenu}
                    style={{ textDecoration: "none", color: "black" }}
                  >
                    Login
                  </Link>
                </MenuItem>
                <MenuItem className="form-column">
                  <Link
                    to="/register"
                    onClick={handleCloseUserMenu}
                    style={{ textDecoration: "none", color: "black" }}
                  >
                    Register
                  </Link>
                </MenuItem>
              </>
              : 
            <>  <MenuItem className="form-column">
              <Link
                to="/profile"
               
                style={{ textDecoration: "none", color: "black" }}
              >
                {user.user.first_name}  {user.user.last_name}
              </Link>
            </MenuItem>
            
            <MenuItem className="form-column">
                  <Link
                    to="/login"
                    onClick={logout}
                    style={{ textDecoration: "none", color: "black" }}
                  >
                    Logout
                  </Link>
                </MenuItem>
            </>
                
              }
            </Menu>
          </Box> 
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default Navbar;
