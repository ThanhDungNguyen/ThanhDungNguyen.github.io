const express = require('express');

const app = express();

app.set("views", "./views");
app.set("view engine", "ejs");
app.use(express.static("public"));

app.get("/", (req, res) => {
    console.log("Received GET request");
    res.render("index");
});

app.listen(3000, () => {
    console.log("Server is running...");
});
