import express from "express";
import roleRouter from "./routers/RoleRouters.js";
import userRole from "./routers/UsersRouter.js";
import auth from "./routers/AuthRouters.js";
import category from "./routers/CategoryRouters.js";
import product from "./routers/ProductsRouters.js";
import cors from "cors";
const app = express();

app.use(express.json());
app.use(cors());
app.use("/api", auth);
app.use("/api", roleRouter);
app.use("/api", userRole);
app.use("/api", category);
app.use("/api", product);
app.use("/upload", express.static("upload"));

app.listen(4000, () => {
  console.log("server berjalan di port 4000");
});
