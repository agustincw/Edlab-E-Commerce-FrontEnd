import React from 'react'

import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Link from '@mui/material/Link';

const Footer = () => {
  return (
  <div className='footer'>
    <div className="footer-container">
        <div className="footer-content-container">
            <h3 className="website-logo">Edlab E-Commerce</h3>
            <span className="footer-info">+54 290 403 202</span>
            <span className="footer-info">edlab_tecnology@tech.com</span>
        </div>
        <div className="footer-menus">
            <div className="footer-content-container">
                <span className="menu-title">menu</span>
                <a href="/" class="menu-item-footer">Home</a>
                <a href="/login" class="menu-item-footer">Login</a>
                <a href="/register" class="menu-item-footer">Register</a>
            </div>
            <div className="footer-content-container">
                <span className="menu-title">legal</span>
                <a href="" className="menu-item-footer">Privacy Policy</a>
                <a href="" className="menu-item-footer">Cookies</a>
                <a href="" className="menu-item-footer">Legal Advice</a>
            </div>
        </div>
        
        <div class="footer-content-container">
            <span className="menu-title">follow us</span>
            <div className="social-container">
                <a href="" className="social-link"></a>
                <a href="" className="social-link"></a>
                <a href="" className="social-link"></a>
            </div>
        </div>
    </div>
    <div className="copyright-container">
        <span className="copyright">Copyright 2022, Edlab All rights reserved.</span>
    </div>
    </div>
  
  )
}

export default Footer


{/* <footer>  <Box bgcolor="GrayText" color="white"><Container  maxWidth="lg">
<Grid container spaicing={6}>
 <Grid item xs={12} sm={7}>
    <Box borderBottom={1}>Help</Box>
    <Box>
<Link href="/" color= "inherit">
 Contact
</Link>
    </Box>
    <Box>
<Link href="/" color= "inherit">
 Support
</Link>
    </Box>
    <Box>
<Link href="/" color= "inherit">
 Privancy
</Link>
    </Box>
 </Grid>
 <Grid item xs={12} sm={5}>
    <Box borderBottom={1}>Help</Box>
    <Box>
<Link href="/" color= "inherit">
 Contact
</Link>
    </Box>
    <Box>
<Link href="/" color= "inherit">
 Support
</Link>
    </Box>
    <Box>
<Link href="/" color= "inherit">
 Privancy
</Link>
    </Box>
 </Grid>
 <Grid item xs={12} sm={5}>
    <Box borderBottom={1}>Help</Box>
    <Box>
<Link href="/" color= "inherit">
 Contact
</Link>
    </Box>
    <Box>
<Link href="/" color= "inherit">
 Support
</Link>
    </Box>
    <Box>
<Link href="/" color= "inherit">
 Privancy
</Link>
    </Box>
 </Grid>
</Grid>
</Container></Box></footer> */}