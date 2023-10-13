import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';


export default function InputForm() {
  const clickHandler = () =>{
    fetch('/api/predict', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      // body: JSON.stringify({
      //   firstParam: 'yourValue',
      //   secondParam: 'yourOtherValue',
      // })
    }).
    then(response => response.json())
    .then(data => console.log('data',data));

  }

  return (
    <Box sx={{ p: 2, border: '1px solid grey' }}>
      <Grid container xs={12}  >
        <Grid item xs={4}>
          <div><FormLabel>Plant Location</FormLabel></div>
          <div><TextField size="small" label="Enter Value" variant="filled" fullWidth ></TextField></div>
        </Grid>
        <Grid item xs={2}>
          <div><FormLabel>Avg Daily Consumption (in Watt)</FormLabel></div>
          <div><TextField size="small" label="Enter Value" variant="filled" ></TextField></div>
        </Grid>        
        <Grid item xs={2}>
          <div><FormLabel>Available Land Area (In Sq Mt)</FormLabel></div>
          <div><TextField size="small" label="Enter Area" variant="filled" ></TextField></div>
        </Grid>
        <Grid item xs={2}>
          <div><FormLabel>&nbsp;</FormLabel></div>
          <div><Button variant="contained" size="medium" onClick={clickHandler}>
          Search</Button></div>
        </Grid>
        <Grid item xs={2}>
        </Grid>
     </Grid>
    </Box>

      
  );
}