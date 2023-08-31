import express from "express";
import config from "config";

//rotas

import router from "./router";

//banco de dados
import db from "../config/db";

const app = express();

app.use(express());

app.use("/api/", router);

//app port
const port = config.get<number>("port");

app.listen(port, async () => {
  await db();
  console.log(`conectado a porta:: ${port}`);
});
