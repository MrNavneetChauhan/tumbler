import * as React from 'react';
// import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

export default function Input ({label,type,value ,onChange}) {
  return (


          <TextField value={value} onChange={onChange} className='text' id="outlined-basic" label={label} type={type} variant="outlined"  fullWidth required/>
      
    
  );
}
