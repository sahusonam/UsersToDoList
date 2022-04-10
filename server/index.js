import express from "express";
import bodyParser from 'body-parser';

const app = express(); 
const port = process.env.PORT || 8080;

app.use(bodyParser.json()); 

app.get("/", (req, res) => res.send("Welcome to the TODO API!"));

app.listen(port,()=> console.log(`Listening on port ${port}... `));