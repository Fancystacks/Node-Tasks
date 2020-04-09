const express = require('express');
const bodyParser = require('body-parser');
const app = express();
app.use(bodyParser.json());
const path = require('path');
const db = require('./db');
const collection = "todo";
const PORT = 3000;

db.connect((err) => {
    if (err) {
    console.log("Can't connect to database");
    return;
    } else {
        app.listen(PORT, () => {
            console.log(`Server is listening on port ${PORT}...`);
        })
    }
})