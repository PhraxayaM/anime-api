const express = require("express")
const app =  express()
const request = require("request")
const port = 8080

app.get("/", (req, res) => {
    res.json("Welcome to the car api")
})

app.listen(port, () => {
    console.log("The app is live on", port)
})
