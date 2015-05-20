/**
 * Created by derek on 5/17/2015.
 */
var express = require('express');
var app = express();

app.use(express.static(__dirname + "/.."));

app.listen(process.env.PORT || 3000, function(){
    console.log('server running on port 3000');
});
