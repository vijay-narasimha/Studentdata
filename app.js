const express = require("express");
const router = require("./routes.js");
const app = express();

app.set("view engine", "ejs");
app.set("views", "./views");
app.use(express.json({ extended: true }));
app.use(express.urlencoded({ extended: true }));
app.use("/", router);
app.all("*", (req, res) => {
	res.send("<h1> Can't find the url</h1>");
});
module.exports = app;
