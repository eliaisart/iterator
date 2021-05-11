const express = require('express');
const app = express();
const path = require("path");
const router = express.Router();

router.get('/', function(req, res){
    res.sendFile(path.join(__dirname + '/src/index.html'));
    ///__dirname: it will resolve to your project folder
});

app.use('/', express.static(__dirname + '/dist'));

//add the router
app.use('/', router);
app.listen(process.env.port || 3000);
console.log('Running at Port 3000')