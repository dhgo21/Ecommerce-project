
// import express, { json } from "express";
// import cors from "cors";
// import { config } from "dotenv";
// config();
// import router from "./Routes/payments.routes.js";

// const app = express();
// const port = 4000;

// app.use(json());
// app.use(cors());

// app.use("/api", router);

// app.get("/", (req, res) => {
//   res.send("hello");
// });

// app.listen(port, () => {
//   console.log(`App is listening at port : http://localhost:${port}`);
// });


import express from "express";
import cors from "cors";
import dotenv from "dotenv";
dotenv.config(); // 👈 this loads .env
import router from "./Routes/payments.routes.js"; // ✅ correct path

const app = express();
const port = 4000;

app.use(express.json()); // ✅ parses JSON bodies
app.use(cors());

app.use("/api", router); // ✅ connects all /api routes

app.get("/", (req, res) => {
  res.send("hello");
});

app.listen(port, () => {
  console.log(`App is listening at port : http://localhost:${port}`);
});
