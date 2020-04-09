const express = require('express');
const bodyParser = require('body-parser');
const app = express();
app.use(bodyParser.json());
const path = require('path');
const db = require('./db');
const collection = "todo";
const PORT = 3000;

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

app.get('/getTodos', function (req, res) {
    db.getDB().collection(collection).find({}).toArray((err, documents) => {
        if (err)
            console.log(err);
        else {
            res.json(documents);
        }
    })
});

app.put('/:id', function (req, res) {
    const todoID = req.params.id;
    const userInput = req.body;

    db.getDB.collection(collection).findOneAndUpdate({ _id: todo }, { $set: { todo: userInput.todo } }, { returnOriginal: false }, (err, result) => {
        if (err)
            console.log(err);
        else
            res.json(result);
    })
})

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