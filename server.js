const express = require('express');
const request = require('request');

const path = require('path');

const app = express();

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));

const predictDataMock = require('./mock.json');

// NOTE: you must manually enter your API_KEY below using information retrieved from your IBM Cloud
const API_KEY = "";


const getToken = (callback) => {
    const url = 'https://iam.cloud.ibm.com/identity/token?grant_type=urn:ibm:params:oauth:grant-type:apikey&apikey=' + API_KEY;
    const reqHeaders = {
        "Content-Type": "application/x-www-form-urlencoded",
        "Accept": "application/json"
    }
    try {
        request.post({ url, json: true, headers: reqHeaders }, (error, res) => {
            if (error) {
                callback(`Error - ${error}`, undefined)
            } else {
                callback(undefined, res.body.access_token)
            }
        })
    } catch {
        //
    }
}

const apiPost = (token, callback) => {
    const payload = '{"input_data": [{"fields": ["Temperature","Relative Humidity","Wind Speed","Solar Zenith Angle Calculated"], "values": [[10.7,30.27,1.7,157.7119]]}]}';	
    const url = "https://us-south.ml.cloud.ibm.com/ml/v4/deployments/a2949b24-cb55-47dc-a626-b11184a62f21/predictions?version=2021-05-01";
    const reqHeaders = {
        "Content-Type": "application/x-www-form-urlencoded",
        "Accept": "application/json",
        "Authorization": `Bearer ${token}`
    }
    try {
        request.post({ url, json: true, form: payload, headers: reqHeaders }, (error, res) => {
            if (error) {
                callback(`Error - ${error}`, undefined)
            } else {
                callback(undefined, res.body)
            }
        })
    } catch {
      //
    }
}

app.post('/api/predict', (req, res) => {

    getToken((error, token) => {
        if (error) {
            return res.send(predictDataMock)
            // return res.send({ error })
        }
        //console.log(token)
        apiPost(token, (error, data) => {
            // TBD return correct response after formatting
            if (error) {
                return res.send(predictDataMock)
                //return res.send({ error })
            }
            return res.send(predictDataMock)
            //return res.send(data)
        })
    })
    
})



app.use('/power-predict/' , express.static(__dirname + '/client/build'));


app.get('/power-predict/*', function (req, res) {
  console.log("here in static1:" + __dirname);
  res.sendFile(path.join(__dirname + '/client/build/index.html'));
});