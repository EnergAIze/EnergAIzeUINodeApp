import React from 'react'
// import ReactDOM from 'react-dom'
// import logo from './logo.svg';
import './App.css';

import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import AppHeader from "./components/AppHeader";
import InputForm from "./components/InputForm";
import PredictCharts from "./components/PredictCharts";


function ColoredComponent({ color }) {
  return (
    <div
      style={{
        backgroundColor: color,
        color: "white",
        paddingTop: "8px",
        paddingBottom: "8px",
        textAlign: "center"
      }}
    >
      <Typography variant="body1">Sample piece of text</Typography>
    </div>
  );
  }


function App() {
  return (
    <div className="App">
      <AppHeader/>

      <InputForm/>

      <PredictCharts />
      

    </div>
  );
}

export default App;
