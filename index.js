import express from "express"
import dotenv from "dotenv";
dotenv.config();
import database from "./src/db/database.js";
import app from "./src/app.js";
const port = 3000;

await database()


console.log(process.env.H);

//routes
import enquiryRouter from "./src/routes/enquiry.routes.js";

app.use("/api/v1/enquiries", enquiryRouter);


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})