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


AWS.config.update({
  region: "us-east-1",
  endpoint: 'https://dynamodb.us-east-1.amazonaws.com',
  accessKeyId: "AKIAJGTIHGFZQ27JUPWA",
  secretAccessKey: "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"
});

var docClient = new AWS.DynamoDB.DocumentClient();

// Create

// No account creation!

// Read

// Update

app.post('/readUser',(request, result) => {
    // Provide all notes to the HTML display.
    
    console.log(request.body);
    
    let activity = {
        TableName: 'greenscore-account',
        Key: request.body
    }
    
    console.log(activity);
    
    docClient.get(activity, (error, data) => {
    
        if (error) {
            console.error("Unable to read item. Error JSON:", JSON.stringify(error, null, 2));
        } else  {
            console.log(data);
            result.send(data);
        } 
    });

});

app.post('/readActivities', (request, result) => {
    
    console.log(request.body);
    
    let activitySearch = {
        TableName: 'greenscore-activity',
    };
    
    docClient.scan(activitySearch, (error, data) => {
    
        if (error) {
            console.error("Unable to read items. Error JSON:", JSON.stringify(error, null, 2));
        } else  {
            console.log(data);
            result.send(data);
        } 
    });
    
    
});

app.post('/addActivity', (request, result) => {
    // Provide all notes to the HTML display.
    
    // io.emit('name', object); // emit to user
    
    console.log(request.body);
    
    let activity = {
        TableName: 'greenscore-activity',
        Item: request.body
    }
    
    
    
    docClient.put(activity, (error, data) => {
    
        if (error) {
            console.error("Unable to add item. Error JSON:", JSON.stringify(error, null, 2));
        } else  {
            console.log("Added item:", JSON.stringify(data, null, 2));
        } 
    });
    
    result.send(data);
});

// Delete

// No account deletion