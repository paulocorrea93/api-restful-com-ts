import mongoose from "mongoose";
import config from "config";

async function connect() {
  const dbUri = config.get<string>("dbUri");

  try {
    await mongoose.connect(dbUri);
    console.log("Conectado ao banco de dados.");
  } catch (e) {
    console.log("Não foi possível conectar ao banco de dados");
    console.log(`Erro ${e}`);
  }
}

export default connect;