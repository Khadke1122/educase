import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

export default function InputText() {
  return (
    <Box
      component="form"
      sx={{
        '& > :not(style)': { m: 1, width: '38ch' },
      }}
      
    >
      <TextField label="Full Name *"  defaultValue="Marry Doe" color="primary" focused />
      
      <TextField label="Phone number *"  defaultValue="92622772227" color="primary" focused />
      <TextField label="Email address *"  defaultValue="MarryDoe@gmail.com" color="primary" focused />
      <TextField label="Password *"  defaultValue="Marry Doe" color="primary" focused />
      <TextField label="Company name *"  defaultValue="MarryDoe Pvt. Ltd" color="primary" focused />
      
    </Box>
  );
}