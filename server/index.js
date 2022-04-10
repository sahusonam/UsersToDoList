import express from "express";
import bodyParser from 'body-parser';
import cors from "cors";
import itemsRoutes from "./routes/items.js";

const app = express(); 

const port = process.env.PORT || 8080;

app.use(cors());
app.use(bodyParser.json()); 

app.use("/items",itemsRoutes);
app.get("/", (req, res) => res.send("Welcome to the TODO API!"));

app.listen(port,()=> console.log(`Listening on port ${port}... `));