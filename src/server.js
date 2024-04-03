const express = require('express');
const app = express();

const mongoose = require('mongoose');
const Note = require('./models/Note');
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const mongodbPath = "mongodb+srv://mujtaba:mujtaba123@cluster0.m68dvr4.mongodb.net/notesdb"
mongoose.connect(mongodbPath).then(function(){
    app.get("/", function(req, res){
       const response = { message: "API Work!"}
       res.json(response);
    });

    const noteRouter = require('./routes/Note');
    app.use('/notes', noteRouter);
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, function() {
    console.log("server started at: " + PORT);
});