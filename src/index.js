import express from "express"
import dotenv from "dotenv";
dotenv.config();
import database from "./db/database.js";
const port = 3000

database()

const app = express()
app.get('/', (req, res) => {
  res.send('Hello World!')
})

console.log(process.env.H);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
