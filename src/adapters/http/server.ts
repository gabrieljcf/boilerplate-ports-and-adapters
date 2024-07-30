import express from "express";
import { routes } from "./routers";
import exceptionErrorHandling from "./middleware/exceptionErrorHandling";

const app = express();
app.use(express.json());
app.use(routes);
app.use(exceptionErrorHandling);

app.listen(3000, () => {
  console.log("server listen on por 3000");
});
