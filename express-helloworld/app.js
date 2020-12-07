var express = require('express');
app = express();

app.get('/', function (req, res) {
  res.send('Hello World!\n');
});
app.get('/sam', function (req, res) {
  res.send('Hello World! Samael \n');
});

app.listen(8086, function () {
  console.log('Example app listening on port 8086!');
});

