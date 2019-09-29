// load the things we need
var express = require('express');
var app = express();

// var mysql      = require('mysql');
// var connection = mysql.createConnection({
//   host     : 'localhost',
//   user     : 'root',
//   password : 'password',
//   database : 'prezidents_db'
// });
 
// connection.connect();

// set the view engine to ejs
app.set('view engine', 'ejs');

// use res.render to load up an ejs view file

// index page 
app.get('/', function(req, res) {
	res.render('pages/index');
});

app.get('/about', function(req, res) {
	res.render('pages/about');
});


app.get('/partner', function(req, res) {
	res.render('pages/partner');
});


app.get('/hobbies', function(req, res) {
	res.render('pages/hobbies');
});


app.get('/class', function(req, res){
	res.render('pages/class', {
		data: [
			{id: 1, name: 'obi'},
			{id: 2, name: 'harry'},
			{id: 3, name: 'ricardo'},
			{id: 4, name: 'marina'},
			{id: 5, name: 'prakash'},
			{id: 6, name: 'david'},
			{id: 7, name: 'david 2'},
			{id: 8, name: 'kit'}
		],

		classroom : 505
	});	
})




app.get('/presidents', function(req, res){
	connection.query('SELECT * FROM presidents', function (error, results, fields) {
	  if (error) res.send(error)
	  else res.render('pages/presidents', {
	  	data: results,
	  })
	});
})


app.listen(3000, function(){
	console.log('listening on 3000')
});