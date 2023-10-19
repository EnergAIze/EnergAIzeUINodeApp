import React,{useContext} from 'react';
import SimpleBarChart from './SimpleBarChart'
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import {PredictContext} from "./context";


export default function PredictCharts(props) {
   const {predictData} = useContext(PredictContext)

   console.log("inpredict chart",predictData)
   
  return !!predictData && (
    <Grid container xs={12} >
      { predictData?.forecast?.solar ? 
        (<Grid item xs={6}>
            <Box sx={{ p: 2, borderRadius:'5px', border: '1px solid #DDE5ED',margin:'25px',background:' #F6F9FC 0% 0% no-repeat padding-box' }}>
            <Typography sx={{ textAlign:'left',color:'#4E4E4E',fontSize:'18px'}}>
            Solar
            </Typography>
            <SimpleBarChart data={predictData?.forecast?.solar} label="Watts/m2"/>
            </Box>
        </Grid>) : '' }

        { predictData?.forecast?.wind ? 
          (<Grid item xs={6}>
            <Box sx={{ p: 2,  borderRadius:'5px', border: '1px solid #DDE5ED',margin:'25px 25px 25px 0px',background:' #F6F9FC 0% 0% no-repeat padding-box' }}>
            <Typography sx={{ textAlign:'left',color:'#4E4E4E',fontSize:'18px'}}>
            Wind
            </Typography>
            <SimpleBarChart data={predictData?.forecast?.wind} label="Watts" />
            </Box>
        </Grid>) : '' }
    </Grid>

      
  );
}