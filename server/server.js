const express = require('express');
const app = express();
const port = 4141;

app.listen(port, onHear);

function onHear(){
    console.log('Server listening on port 4141');
}