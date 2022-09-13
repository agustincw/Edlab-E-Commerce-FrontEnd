import React from "react";
import {
  TableCell,
  TableRow,
  IconButton,
  Box,
  Collapse,
} from "@mui/material";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import ProductRow from "./products/productRow";
import ProductCollapse from "./products/ProductCollapse";


const Row = (props) => {
  const { row } = props;
  const [open, setOpen] = React.useState(false);

  return (
    <React.Fragment>
      <TableRow sx={{ "& > *": { borderBottom: "unset" }, borderLeft: open ?'1px solid #2A91D1':'none' }}>
        <TableCell sx={{width:'50px'}}>
          <IconButton
            aria-label="expand row"
            size="small"
            onClick={() => setOpen(!open)}
          >
            {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
          </IconButton>
        </TableCell>
        <ProductRow row={row}/>
      </TableRow>
      <TableRow sx={{borderLeft: open ?'1px solid #2A91D1':'none' }}>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <Box sx={{ margin: 1 }}>
              <ProductCollapse handleClose={setOpen} row={row}/>
            </Box>
          </Collapse>
        </TableCell>
      </TableRow>
    </React.Fragment>
  );
};

export default Row;
