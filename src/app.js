import express from "express";
import db from "./config/dbConnect.js";
import routes from "./routes/index.js";
import chalk from 'chalk';

const error = chalk.bold.red;

db.on("error", console.log.bind(console, chalk.red('Algo deu MUITO errado!')))
db.once("open", () => {
    console.log(chalk.green('Conexão feita com sucesso'));
})

const app = express();

app.use(express.json())

routes(app);

export default app

