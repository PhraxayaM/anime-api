const express = require("express")
const app =  express()
const request = require("request")
const port = 8080 
const url = "https://vpic.nhtsa.dot.gov/api/vehicles/getallmakes?format=json"

app.get("/", (req, res) => { 
    // res.json("Welcome to the car api")
    request(url, function (error, response, body) {
      console.log('error:', error);
      console.log('statusCode:', response && response.statusCode); 
      console.log('body:', body); 
    });
})

app.listen(port, () => {
    console.log("The app is live on", port)
})
