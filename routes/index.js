var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next){
	// res.send("hello you!!");
	res.render('index.html');
	// res.send(req.body);
});

router.get('/hello', function(req, res, next){
	res.send("Goodbye");
})

module.exports = router;