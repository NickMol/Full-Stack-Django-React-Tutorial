import * as React from 'react';
import TextField from '@mui/material/TextField';

export default function DescriptionForm({label,rows,value,name,onChange,onBlur,error, helperText}) {
  return (
        <TextField
          id="outlined-multiline-static"
          sx={{width:'100%'}}
          label={label}
          multiline
          rows={rows}
          value = {value}
          name = {name}
          onChange = {onChange}
          onBlur={onBlur}
          error = {error}
          helperText = {helperText}
          
        />
      
  );
}
