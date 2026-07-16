import express from "express";
import cors from "cors";
import resourceRoutes from "./modules/farmers/routes/resource.routes";
import cookieParser from "cookie-parser";
import morgan from "morgan";
import uploadRoutes from "./modules/farmers/routes/upload.routes";

const app = express();

app.use(cors());
app.use(express.json());
app.use(cookieParser());
app.use(morgan("dev"));
app.use("/api/resources", resourceRoutes);
app.use("/api/upload", uploadRoutes);

app.get("/", (req, res) => {
    res.send("AgroLink API Running 🚀");
});

export default app;

