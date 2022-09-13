import React, {useState} from 'react'
import Box from '@mui/joy/Box';
import Card from '@mui/joy/Card';
import CardCover from '@mui/joy/CardCover';
import CardContent from '@mui/joy/CardContent';
import Typography from '@mui/joy/Typography';
import Chip from '@mui/material/Chip';


import { useNavigate } from "react-router";

const ProductDestacado = () => {
const navigate = useNavigate()
    const handleClick = () => {
     
      navigate("/products/mac-book-pro")
    }
  return (
    <div>
 
      <Box   
    
      sx={{ display: 'flex', p: 0 }}
    >
      <Card   sx={{  width:"100%", height:800 }}>
        <CardCover>
       
        <img className="sinBordes"
        src="https://www.muycomputer.com/wp-content/uploads/2020/05/MacBook-Pro-de-13-pulgadas.jpg" height="800px" width="100%"   />
          
        </CardCover>
        <CardContent sx={{ textAlign:"center", gap: 1 }}>
             
        <Typography
   
            fontWeight="lg"
            fontSize={50}
            textColor="#fff"
            mt={{ xs:90, sm:94 }}
            fontFamily= {"Roboto"}
          >
          <Typography textColor="#fff"  fontFamily= {"Roboto"}></Typography>
          </Typography>
         <Box >  <Chip label="Learn More" sx={{backgroundColor:"#000", color:"#fff",padding:0.8}}  onClick={handleClick} /></Box>
         
        
        </CardContent>
      </Card>
    </Box>
    </div>
  )
}

export default ProductDestacado