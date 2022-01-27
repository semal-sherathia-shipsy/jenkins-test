var express = require('express');
var app = express();

app.get('/',function(req,res) {
  res.send("Hello World");
});

app.get('/series', function(req, res) {
  const response = [
    'Mouse', 'Demon Slayer', 'The Office', 'Friends', 'Ba reum', 'Semal', 'oo', 'Panth'
  ]
  res.send(response)
})

app.listen(4002);