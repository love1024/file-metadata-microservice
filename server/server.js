import express from 'express';
import start from '../routes/start';
import mongodb from 'mongodb';

var app = express();
var mongoClient = mongodb.MongoClient;
var mongourl = "";

mongoClient.connect(mongourl,function(err,db) {
    if(err) throw err;
    app.use(express.static(__dirname+'/../src'));
    start(app,db);
});

const port = 2500;
app.listen(process.env.PORT || port);

