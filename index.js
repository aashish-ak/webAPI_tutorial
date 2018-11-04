var express = require('express');
var bparser = require('body-parser');
var path = require('path');

var index = require('./routes/index');

var app = express()
var port = 3000;
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.engine('html', require('ejs').renderFile);

app.use(express.static(path.join(__dirname, 'client')));
app.use(bparser.json());
app.use(bparser.urlencoded({extended :false}));

app.use('/', index);
app.listen(port, function(){
	console.log("It's Worling YO!!");
});