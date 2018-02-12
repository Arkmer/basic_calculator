const express = require('express');
const app = express();
const port = 4141;
app.use(express.static('server/public'));

const baseReturn = require('./modules/base.js');

app.listen(port, onHear);

function onHear(){
    console.log('Server listening on port 4141');
}

app.get('/base', fEquals)
// app.post('/base', fResult)

function fEquals(req, res){
    res.send(baseReturn);
    console.log('fEquals');
}

// function fResult(req, res){
//     res.send(baseReturn);
//     console.log('fResult');
// }