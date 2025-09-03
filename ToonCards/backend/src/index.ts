import express from "express";
import router from "./Routes/UserRoutes";

const app = express();

app.use(express.json());

app.use("/api", router);

app.listen(3333, () => {
  console.log("Servidor rodando na porta 3333");
});
