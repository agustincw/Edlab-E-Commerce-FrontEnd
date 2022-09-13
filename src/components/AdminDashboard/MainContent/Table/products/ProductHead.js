import React from 'react';
import TableCell from '@mui/material/TableCell'

const ProductHead = () => {
    

    return ( 
        <>
            <TableCell align="left">Image</TableCell>
            <TableCell align="left">Name</TableCell>
            <TableCell align="left">Price</TableCell>
            <TableCell align="center">Stock</TableCell>
        </>
    );
}
 
export default ProductHead;