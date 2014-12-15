var express = require('express');
var bodyParser = require('body-parser');
var methodOverride = require('method-override');
var postgres = require('pg');

var app = express();

app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({extended: true}));
app.use(methodOverride('_method'));

var db = require("./models");

app.get =("/", function(req,res){
	res.send("Hello World");
});

app.listen(3000, function (){
	console.log(new Array("*").join())
});

