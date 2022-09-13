import React, {useState,forwardRef} from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';

const Alert = forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

export default function CustomizedSnackbars(props ) {

  return (
   <> 
 <Snackbar open={props.open} autoHideDuration={3000} onClose={props.handleClose}>
  <Alert onClose={props.handleClose}  severity={props.type} sx={{ width: '100%' }}>
   {props.text}
   </Alert>
 </Snackbar>

 </>
     
  
  );
}
