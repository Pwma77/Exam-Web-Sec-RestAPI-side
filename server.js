const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
const port = 2000;

app.use(bodyParser.json({limit:'100mb'}));
app.use(cors());

app.all('*', function (req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'PUT, GET, POST, DELETE, OPTIONS');
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    next();
});

app.post('/api/postEndpoint', function (req, res){
    
    let bodyOfTheRequest = req.body;

    let fullname = `My fullname is: ${bodyOfTheRequest.firstname} ${bodyOfTheRequest.lastname}`

    res.send({
        "status":"OK",
        "fullname":fullname
    });
})

app.get('/api/getEndpoint', function (req, res){
    res.send({
        "status":"OK",
        "greetings":"Hello!"
    });
})

app.listen(port, function(){
    console.log(`Running RESTFUL API on ${port}`);
});