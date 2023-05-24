import { AppDataSource } from "./db/data-source.js";
import { Server } from "socket.io";
import "reflect-metadata";
import express from "express";
import http from "http";
import bodyParser from "body-parser";
import userRouter from "./routes/user.routes.js";
import cors from "cors";
import restaurantRouter from "./routes/restaurant.routes.js";

const app = express();
const server = http.createServer(app);
export const io = new Server(server, {
  cors: {
    origin: "*",
  },
});

// Middleware
app.use(bodyParser.json());
app.use(cors());

// Routes
app.use(userRouter);
app.use(restaurantRouter);

// Database
AppDataSource.initialize();

// POrt
server.listen(3000);
