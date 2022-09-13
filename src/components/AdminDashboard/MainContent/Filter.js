import * as React from "react";
import InputLabel from "@mui/material/InputLabel";
import FilledInput from "@mui/material/FilledInput";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import ListItemText from "@mui/material/ListItemText";
import Select from "@mui/material/Select";
import Checkbox from "@mui/material/Checkbox";
import Chip from '@mui/material/Chip';
import Box from "@mui/material/Box";

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

export default function Filter({names,set,value,text}) {
  /* const [type, setType] = React.useState([]); */

  const handleChange = (event) => {
    const {target: { value } } = event;
    /* setType(typeof value === "string" ? value.split(",") : value); */
    set(typeof value === "string" ? value.split(",") : value)
  };

  return (
    <div>
      <FormControl sx={{ m: 1, width:"100%" }}>
        <InputLabel>{text}</InputLabel>
        <Select
          hiddenLabel
          multiple
          value={value}
          onChange={handleChange}
          input={
            <FilledInput
              hiddenLabel
              style={{ backgroundColor: "white",color:'black' }}
              placeholder="Select categories"
            />
          }
          MenuProps={MenuProps}
          renderValue={(selected) => (
            <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
              {selected.map((value) => (
                <Chip key={value} label={value} />
              ))}
            </Box>
          )}
        >
          {names.map((name) => (
            <MenuItem key={name} value={name}>
              <Checkbox checked={value.indexOf(name) > -1} />
              <ListItemText primary={name} />
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
  );
}
