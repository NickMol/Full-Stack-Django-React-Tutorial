import * as React from 'react';
import { Box, Typography } from '@mui/material';

export default function MyMessage({messageText,messagecolor}) {
  return (
      <Box
        sx={{
            width:'100%',
            height:'30px',
            color:'white',
            marginBottom: '20px',
            padding:'10px',
            display:'flex',
            backgroundColor: messagecolor,
            alignItems:'center'
        }}
      >
            <Typography>{messageText}</Typography>
      </Box>
   
  );
}
