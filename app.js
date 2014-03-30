var express = require('express');
var test = require('./src/test.js');
var app = express();

app.get('/test', test.runTest);

var server = app.listen(3000, function() {
    console.log('Listening on port %d', server.address().port);
});

