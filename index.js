import express from "express"
import dotenv from "dotenv";
dotenv.config();
import app from "../ser/server/src/app.js";
import database from "../ser/server/src/db/database.js";
const port = 3000;

await database()

console.log(process.env.H);

//routes
import enquiryRouter from "../ser/server/src/routes/enquiry.routes.js";

app.use("/api/v1/enquiries", enquiryRouter);


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})