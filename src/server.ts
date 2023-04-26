import express from "express";
import dotevn from "dotenv";
import mustache from "mustache-express";
import path from "path";
import mainRoutes from "./routes/index";
dotevn.config();

const app = express();

app.set("view engine", "mustache");
app.set("views", path.join(__dirname, "views"));
app.engine("mustache", mustache());

app.use(express.static(path.join(__dirname, "../public")));

// routes
app.use(mainRoutes);

app.get("*", (req, res) => {
    res.status(404).send("Page not found.");
});


app.listen(process.env.PORT || 4000, () => console.log("SERVER IS ONLINE"));