import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
// import MenuIcon from '@mui/icons-material/Menu';

export default function AppHeader() {
  return (
    <Box sx={{ flexGrow: 1 , boxShadow: "3px 3px 3px #DDE5ED"}}>
      <AppBar position="static" color="transparent" sx={{boxShadow: "3px 3px 3px #DDE5ED"}} >
        <Toolbar variant="dense">
        <Typography variant="h5" sx={{
          fontSize: '14px',
          color: '#204464',
          fontWeight: 'bold',
          height:'17px'
        }}>
          Power Generation Prediction
        </Typography>
        </Toolbar>
      </AppBar>
    </Box>
  );
}