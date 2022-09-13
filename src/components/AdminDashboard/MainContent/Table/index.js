import React from 'react';
import {TableContainer,Table,TableHead,TableRow,TableCell,TableBody,Paper} from '@mui/material'
import products from './ejemplo';
import Row from './Row';
import ProductHead from './products/ProductHead';
import { useState } from 'react';
import axios from 'axios'


export default function MainTable() {
  const [products, setProducts] = useState([])
  
  React.useEffect(() => {
    axios
      .get('http://localhost:3001/api/products')
      .then((res) => {
        setProducts(res.data)
      console.log('hola', res.data)
      });
  }, []);



    return (
      <TableContainer style={{ width: '100%' }} component={Paper}>
        <Table aria-label="collapsible table">
          <TableHead>
            <TableRow>
              <TableCell />
              <ProductHead/>
            </TableRow>
          </TableHead>
          <TableBody>
            {products.map((product) => (
              <Row key={product.name} row={product} />
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    );
  }