import * as React from 'react';
import TextField from '@mui/material/TextField';

export default function DescriptionForm({label,rows}) {
  return (
        <TextField
          id="outlined-multiline-static"
          sx={{width:'100%'}}
          label={label}
          multiline
          rows={rows}
          
        />
      
  );
}
