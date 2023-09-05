import express from "express";
import db from "./config/dbConnect.js";
import routes from "./routes/index.js";

db.on("error", console.log.bind(console, 'Algo deu errado, vc errou, mas nao desista!'))
db.once("open", () => {
    console.log('Conexão feita! agora é só codar :)')
})

const app = express();

app.use(express.json())

routes(app);

export default app

