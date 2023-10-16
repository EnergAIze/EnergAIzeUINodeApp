import React,{useContext} from 'react';
import SimpleBarChart from './SimpleBarChart'
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import {PredictContext} from "./context";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell,{ tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles';

export default function Report(props) {
   const {predictData} = useContext(PredictContext);

  const header = ['Day', 'Power Consumption (in Watt)']

  const rows = [
    [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15],
    [11,22,13,54,65,46,87,89,92,30,21,42,63,84,75],
  ];

  const StyledTableRow = styled(TableRow)(({ theme }) => ({
    '&:nth-of-type(odd)': {
      backgroundColor: "#EBF0F6",
      color: "#232323",
      borderBottom:"1px solid #DDE5ED",
      borderTop:"1px solid #DDE5ED",
    },
    '&:nth-of-type(even)': {
      backgroundColor: "#FFFFFF",
      color: "#232323",
      borderBottom:"1px solid #DDE5ED",
    },
    'th:nth-of-type(1)': {
      fontWeight: "bold",
      width: "10%",
    },
    'td:nth-of-type(odd)': {
      width: "6%",
    },'td:nth-of-type(even)': {
      width: "6%",
    }
  }));

  
  return !!predictData && (
    <div style={{marginLeft:'25px',marginRight:'25px'}}>
    { predictData?.avg_power ? (<Grid container xs={12} >
      <Typography variant="h5"  sx={{color:'#4E4E4E'}}>
      Total Power Generated: <strong>{predictData?.avg_power}</strong>
      </Typography>
    </Grid>) : '' }


    { predictData?.solar ? (<TableContainer style={{marginTop:'25px'}} component={Paper}>
      <Table   aria-label="simple table">
        <TableBody>
          {rows.map((row,index) => (
            <StyledTableRow
              key={index}
              
            >
                <TableCell component="th" variant="head">{header[index]}</TableCell>
                {row.map((value) => (
              
                <TableCell component="td" scope="row">
                  {value}
                </TableCell>
                ))} 
              </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>) : '' }
    </div>
  );
}

