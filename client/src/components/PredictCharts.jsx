import * as React from 'react';
import SimpleBarChart from './SimpleBarChart'
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

export default function PredictCharts() {
  
  return (
    <Grid container xs={12} spacing={4}  >
        <Grid item xs={6}>
            <Box sx={{ p: 2, border: '1px solid grey' }}>
            <Typography variant="h11" component="h2">
            Solar
            </Typography>
            <SimpleBarChart />
            </Box>
        </Grid>

        <Grid item xs={6}>
            <Box sx={{ p: 2, border: '1px solid grey' }}>
            <Typography variant="h11" component="h2">
            Wind
            </Typography>
            <SimpleBarChart />
            </Box>
        </Grid>
    </Grid>

      
  );
}