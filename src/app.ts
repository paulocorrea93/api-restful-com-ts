//ENV variables
require("dotenv").config();

import express from "express";
import config from "config";

//rotas

import router from "./router";

//Logger
import Logger from "../config/logger";

//banco de dados
import db from "../config/db";

//middlewares
import morganMiddleware from "./middleware/morganMiddleware";

const app = express();

app.use(express.json());

app.use(morganMiddleware)

app.use("/api/", router);

//app port
const port = config.get<number>("port");

app.listen(port, async () => {
  await db();
  Logger.info(`conectado a porta:: ${port}`);
});
