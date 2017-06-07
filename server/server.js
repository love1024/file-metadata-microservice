import express from 'express';
import upload from '../routes/upload';
import mongodb from 'mongodb';

var app = express();

app.use(express.static(__dirname+'/../src'));

app.get("/",function(req,res) {
    res.render("index");
});
upload(app);


const port = 2500;
app.listen(process.env.PORT || port);

