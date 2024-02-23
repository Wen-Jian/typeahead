import express from "express";
import cors from "cors";
import { config } from "./config/config";
import router from "./routes/routes";

const app = express();

app.use(cors());
app.use(express.json());

app.use(router)

app.set('view engine', 'pug')
app.set('views', './src/views')

app.listen(config.port, () => {
    console.log(`Server is running on port ${config.port}`);
  });
  