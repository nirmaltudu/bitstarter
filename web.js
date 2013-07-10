var express = require('express');
var fs = require('fs');

var app = express.createServer(express.logger());
function getContent()
{
    var content = 'Hello World 2!';
    try {
        var cont = fs.readFileSync('index.html');
	content = cont.toString();
    }
    catch(err) {
	alert(err.message);
    }
    return content;
}

app.get('/', function(request, response) {

  response.send(getContent());
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
