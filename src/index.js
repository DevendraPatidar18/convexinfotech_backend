import express from "express"
import dotenv from "dotenv";
dotenv.config();
import database from "./db/database.js";
import app from "./app.js";
const port = 3000

database()


console.log(process.env.H);

//routes
import enquiryRouter from "./routes/enquiry.routes.js";

app.use("/api/v1/enquiries", enquiryRouter);


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
