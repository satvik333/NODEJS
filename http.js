var express = require('express');
var app = express();
var fs = require("fs");

app.get('/listUsers', (req, res) => {
   fs.readFile( 'C:/Users/satvik.ms/Desktop/NODEJS' + "/" + "users.json", 'utf8', function (err, data) {
      console.log( data );
      res.write( data );
      res.end()
   });
})
app.get('/:id', function (req, res) {
    fs.readFile( 'C:/Users/satvik.ms/Desktop/NODEJS' + "/" + "users.json", 'utf8', function (err, data) {
       var users = JSON.parse( data );
       var user = users["user" + req.params.id] 
       console.log( user );
       res.end( JSON.stringify(user));
    });
 })
var user = {
    "user4" : {
       "name" : "mohit",
       "password" : "password4",
       "profession" : "teacher",
       "id": 4
    }
 }

 app.post('/addUser', function (req, res) {
    fs.readFile( 'C:/Users/satvik.ms/Desktop/NODEJS' + "/" + "users.json", 'utf8', function (err, data) {
       data = JSON.parse( data );
       data["user4"] = user["user4"];
       console.log( data );
       res.end( JSON.stringify(data));
    });
 })
 app.put('/update/:id', (req, res) => {
    fs.readFile( 'C:/Users/satvik.ms/Desktop/NODEJS' + "/" + "users.json", 'utf8', function (err, data) {
        data=JSON.parse(data)
        data.name=req.body.name
        data.password=req.body.password
        data.profession=req.body.profession
        data.id=req.body.id
        res.end(data);
    })
    })
 app.delete('/deleteUser', function (req, res) {
    fs.readFile( 'C:/Users/satvik.ms/Desktop/NODEJS' + "/" + "users.json", 'utf8', function (err, data) {
       data = JSON.parse( data );
       delete data["user" + 2];
        console.log( data );
       res.end( JSON.stringify(data));
    });
 })
var server = app.listen(8081,  () => {
   var host = server.address().address
   var port = server.address().port
   console.log("Example app listening at http://%s:%s", host, port)
})

