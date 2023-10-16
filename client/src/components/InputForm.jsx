import React,{useState,useContext, useEffect} from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import CircularProgress from '@mui/material/CircularProgress';
import data from './mock'
// import { useContext } from 'react';
import {PredictContext} from "./context";

export default function InputForm(props) {

  const { predictData, setPredictData } = useContext(PredictContext);

  const [disabled, setDisabled] =  useState(true);

  const [loader, setLoader] =  useState(false);

  const [lat, setLat] = useState();
  const [long, setlong] = useState();
  const [avgConsmptn, setavgConsmptn] = useState('');
  const [landArea, setlandArea] = useState('');


  const latChangeHandler = (event) => {
    setLat(event.target.value);
  }
  const longChangeHandler = (event) => {
    setlong(event.target.value);
  }

  const avgConsmptnChangeHandler = (event) => {
    setavgConsmptn(event.target.value);
  }

  const landAreaChangeHandler = (event) => {
    setlandArea(event.target.value);
  }

  useEffect( () => {
    if(lat && long && avgConsmptn && landArea)

      setDisabled(false);
  },[lat,long,avgConsmptn,landArea])
  const clickHandler = () =>{
    setLoader(true);
    fetch('/api/predict', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        lat: lat,
        long: long,
      })
    }).
    then(response => response.json())
    .then(res => {
      setPredictData(res);
      setLoader(false);
    });
    // setPredictData(res);
  }

  return (
    <Box sx={{ p: 2, marginTop: "4px",borderBottom:"1px solid #DDE5ED",background:"#F6F9FC 0% 0% no-repeat padding-box"}}>
      <Grid container xs={12} spacing={2} >
        <Grid item xs={2} sx={{textAlign: "left"}}>
          <div><FormLabel >Latitude</FormLabel></div>
          
        </Grid>
        <Grid item xs={2} sx={{textAlign: "left"}}>
          <div><FormLabel>Longitude</FormLabel></div>
          
        </Grid>
        <Grid item xs={2} sx={{textAlign: "left"}}>
          <div><FormLabel>Avg Daily Consumption (in Watt)</FormLabel></div>
          
        </Grid>        
        <Grid item xs={2} sx={{textAlign: "left"}}>
          <div><FormLabel>Available Land Area (In Sq Mt)</FormLabel></div>
          
        </Grid>
        <Grid item xs={2}>
          <div><FormLabel>&nbsp;</FormLabel></div>
          
        </Grid>
        <Grid item xs={2}>
          <div>&nbsp;</div>
        </Grid>
     </Grid>

     <Grid container xs={12} spacing={2} >
        <Grid item xs={2} sx={{textAlign: "left"}}>
          <div><TextField size="small" label="Enter Value" variant="filled" value={lat}  
          onChange={(e)=>latChangeHandler(e)}
          sx={{border:"1px solid #B8C5DA",borderRadius:"4px"}}></TextField></div>
        </Grid>
        <Grid item xs={2} sx={{textAlign: "left"}}>
          <div><TextField size="small" label="Enter Value" variant="filled" value={long}  
          onChange={(e)=>longChangeHandler(e)}></TextField></div>
        </Grid>
        <Grid item xs={2} sx={{textAlign: "left"}}>
          <div><TextField size="small" label="Enter Value" variant="filled" value={avgConsmptn}
          onChange={(e)=>avgConsmptnChangeHandler(e)}></TextField></div>
        </Grid>        
        <Grid item xs={2} sx={{textAlign: "left"}}>
          <div><TextField size="small" label="Enter Area" variant="filled" value={landArea}
          onChange={(e)=>landAreaChangeHandler(e)}></TextField></div>
        </Grid>
        <Grid item xs={2}>
          <div><Button variant="contained" fullWidth size="large" onClick={clickHandler} disabled={disabled}>
          Search</Button></div>
        </Grid>
        <Grid item xs={2} sx={{textAlign:'left'}}>
          {loader ? <CircularProgress/> :<div> &nbsp; </div> }
        </Grid>
     </Grid>
    </Box>

      
  );
}