const fs = require('fs');
const express = require('express');
var bodyParser = require('body-parser');
var app = express();
var http = require('http').Server(app);
var io = require('socket.io')(http);

// Express 'Routes'
app.use('/', express.static(__dirname));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
http.listen(process.env.PORT, process.env.IP, () => {
    console.log("Node Server has Started.");
});