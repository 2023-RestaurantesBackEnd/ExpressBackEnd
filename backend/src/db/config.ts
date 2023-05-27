import { config } from "dotenv";

config();

const dataConnection = {
  host: process.env.HOST || "",
  port: process.env.PORT || "",
  database: process.env.DATABASE || "",
  user: process.env.USER || "",
  passwd: process.env.PASSWORD || "",
  sync: process.env.SYNCRONIZE || "",
  log: process.env.LOGGIN || "",
};

export default dataConnection