import express from "express";
import dotevn from "dotenv";
import mustache from "mustache-express";
import path from "path";
import mainRoutes from "./routes/index";
dotevn.config();

const app = express();

// view engine config
app.set("view engine", "mustache");
app.set("views", path.join(__dirname, "views"));
app.engine("mustache", mustache());

// middlewares
app.use(express.static(path.join(__dirname, "../public")));
// app.use(express.urlencoded({extended: true}));

// routes
app.use(mainRoutes);

// not found page
app.get("*", (req, res) => {
    res.status(404).render("pages/404");
});

// start server
app.listen(process.env.PORT || 4000, () => console.log("SERVER IS ONLINE"));