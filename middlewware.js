const express=require('express')
const app=express()
const fs=require('fs')
app.use(middle)

function middle(req,res,next){
 console.log("Middleware")
 next()
 return
}
app.get('/listUsers', (req, res) => {
    fs.readFile( 'C:/Users/satvik.ms/Desktop/NODEJS' + "/" + "users.json", 'utf8', function (err, data) {
       console.log( data );
       res.write( data );
       res.end()
    });
 })