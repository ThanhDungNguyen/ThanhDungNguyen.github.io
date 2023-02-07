const express = require('express');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cookieParser());
app.set("views", "./views");
app.set("view engine", "ejs");

app.get("/", (req, res) => {
    console.log("Received GET request: " + JSON.stringify(req.cookies));
    res.render("add-cookie", {cookies: req.cookies});
});

app.post("/add", (req, res) => {
    console.log("Received POST request: " + JSON.stringify(req.body));
    res.cookie(req.body.key, req.body.value, { maxAge: 10 * 60 * 1000, httpOnly: true });
    res.send("Cookie has been set");
});

app.listen(3000, () => {
    console.log("Server is running...");
});
