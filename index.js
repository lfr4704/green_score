const fs = require('fs');
const express = require('express');
let bodyParser = require('body-parser');
let app = express();
let http = require('http').Server(app);
let io = require('socket.io')(http);

// AWS
let AWS = require('aws-sdk');
let uuid = require('uuid');

// Express 'Routes'
app.use('/', express.static(__dirname));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
http.listen(process.env.PORT, process.env.IP, () => {
    console.log("Node Server has Started.");
});

// AWS credentials
let aws_access_key_id = 'AKIAJK6O3LGKFHSSKWOQ';
let aws_secret_access_key = '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';

