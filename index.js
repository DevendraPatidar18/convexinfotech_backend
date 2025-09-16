import express from "express"
import dotenv from "dotenv";
dotenv.config({path: './.env'});
import app from "./src/app.js";
import database from "./src/db/database.js";
const port = 3000;



console.log(process.env.H);
database()
//routes
import enquiryRouter from "./src/routes/enquiry.routes.js";

app.use("/api/v1/enquiries", enquiryRouter);


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})