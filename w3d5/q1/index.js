const express = require('express');
const path = require('path');
const app = express();

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, "view"));

app.use('/styles', express.static(path.join(__dirname, 'styles')));

app.get('/', (req, res) => {
    const date = new Date();

    let cssFilename = (date.getHours() > 6 && date.getHours() < 18) ? "day.css" : "night.css";

    res.render("index", {
        time: date.toTimeString(),
        cssFilename: cssFilename
    });
});

app.listen(3000);
