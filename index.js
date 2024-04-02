const express = require("express");
const body_parser = require("body-parser");

const app = express().use(body_parser.json());

app.listen(8000,()=>{
    console.log("webhook is running");
})