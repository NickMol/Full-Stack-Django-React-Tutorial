import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import FormHelperText from '@mui/material/FormHelperText';

export default function SelectForm({label, options,value,name,onChange,onBlur, error, helperText}) {
 
  return (
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">{label}</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          label={label}
          value = {value}
          name = {name}
          onChange = {onChange}
          onBlur={onBlur}
          error = {error}
          helperText = {helperText}
        >

          {
            options.map((option) =>(
                <MenuItem value={option.id}>{option.name}</MenuItem>
            ))
          }
          
        </Select>
        <FormHelperText error>{helperText}</FormHelperText>
      </FormControl>
  );
}
