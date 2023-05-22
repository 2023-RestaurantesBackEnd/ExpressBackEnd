import { AppDataSource } from "./db/data-source.js";
import { Server, Socket } from "socket.io";
import "reflect-metadata";
import cors from "cors";
import express, { Request, Response } from "express";
import http from "http";
const app = express();

const server = http.createServer(app);
const io = new Server(server, {
  cors: {
    origin: "*",
    methods: "*",
    allowedHeaders: ["*/*"],
  },
});

AppDataSource.initialize().then(() => {
  console.log("📚 db initialized");
});

io.on("connection", (socket: Socket) => {
  console.log("User connected to socket");
});

app.get("/", (req: Request, res: Response) => {
  io.emit("update", {
    username: `amir data base update ${Math.random()}`,
  });
  res.send({
    username: "amir",
  });
});

server.listen(3000, () => {
  console.log("Backend started 💀💀");
});
