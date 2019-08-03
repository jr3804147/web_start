var express =require('express');
var app=express();

var myLogger = function (req, res, next) {
    console.log('LOGGED');
    next();
  };
  
  app.use(myLogger);
  

app.get('/', function (req,res){

    res.send('hello world!');
});

app.get('/ab?cd', function(req, res) {
    res.send('ab?cd');
  });
  

app.listen(3000, function (){

    console.log('exmple app');
});