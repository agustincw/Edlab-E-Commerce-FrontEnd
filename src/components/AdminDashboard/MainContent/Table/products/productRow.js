import React from 'react';
import TableCell from '@mui/material/TableCell';
import Box from '@mui/material/Box';
import LinearProgress from '@mui/material/LinearProgress';
import Typography from '@mui/material/Typography';

const ProductRow = ({ row }) => {

    const linearColor = (stock)=>{
        if (stock>80){
            return "success"
        }else if(stock>50){
            return "warning"
        }else{
            return "error"
        }
    }

    const LinearProgressWithLabel = (props)=> {
        return (
          <Box sx={{ display: 'flex',alignItems: 'center',flexDirection:'column' }}>
            <Box sx={{ width: '40px',mb:'3px'}}>
              <LinearProgress variant="determinate" color={linearColor(props.value)} {...props} />
            </Box>
            <Box>
              <Typography variant="body2" color="text.secondary">{props.value}</Typography>
            </Box>
          </Box>
        );
      }
    return ( 
        <>
            <TableCell align="left"> <img style={{width:'60px',height:'70px'}} alt="product" src={`${row.thumbnail}`}/> </TableCell>
            <TableCell align="left"> {row.name} </TableCell>
            <TableCell align="left" sx={{minWidth:'90px'}}> ${row.price} </TableCell>
            <TableCell align="left"> <LinearProgressWithLabel value={row.stock}/> </TableCell>
        </>
    );
}
 
export default ProductRow;