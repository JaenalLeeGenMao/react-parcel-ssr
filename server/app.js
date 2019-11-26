// server/app.js
import path from "path";
import express from "express";
import morgan from "morgan";
import cookiesMiddleware from "universal-cookie-express";
import ssrMiddleware from "./middlewares/ssr";
import initConfig from "../config";

import dotenv from "dotenv";
dotenv.config();

const ENV = process.env.REACT_APP_ENV || process.env.NODE_ENV || "production";
const { REACT_APP_ENV, NODE_ENV } = process.env;
console.log("environment", REACT_APP_ENV, NODE_ENV);
const config = initConfig(ENV);

const app = express();
const port = process.env.PORT || config.port;

app.use(morgan("tiny"));

if (process.env.NODE_ENV === "production") {
  app.use("/static", express.static(path.resolve(__dirname, "./static")));
} else {
  app.use("/static", express.static(path.resolve(__dirname, "../.tmp")));
}

app.get("*", (req, res, next) => {
  // console.log("req", req);
  // console.log("res", res);
  console.log(config);
  console.log("* jalan kok ssr tenang aja :)");
  next();
});

app.use(cookiesMiddleware()).use(ssrMiddleware);

app.use((req, res, next) => {
  res.status(404).send("404...");
});

app.listen(port, function() {
  console.info(`Server running at http://localhost:${port}...`);
});
