import express from 'express';
import database from './db/database.js';
import cookies from 'cookie-parser';
import cors from 'cors';
import adminUserRouter from './routes/admin.routes.js';


const app = express();


app.use(cors({
  origin: "*",          // open access
  methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
  allowedHeaders: ["Content-Type", "Authorization"]
  //credentials: flase, // allow cookies to be sent
}));

app.use(express.json({ limit: '32kb' })); // to handle large payloads
app.use(express.urlencoded({ extended: true, limit: '32kb' }));
app.use(express.static('public'));
app.use(cookies());

//routes
import enquiryRouter from "./routes/enquiry.routes.js";
//enquiry routes
app.use("/api/v1/enquiries", enquiryRouter);


//chatbot routes
import chatbotRouter from "./routes/chatbot.routes.js";
app.use("/api/v1/chatbot", chatbotRouter);


//admin routes
import adminRouter from "./routes/admin.routes.js";
app.use("/api/v1/admin", adminUserRouter);
export default app;