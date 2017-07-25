var path = require('path');
var express = require('express');
var app = express();
var PORT = process.env.PORT || 8080

app.use(express.static(path.join(__dirname, 'src')));
// app.use(express.static(path.join(__dirname, 'src', 'js')));
// app.use('/src', express.static(path.join(__dirname, 'src')));
// app.use('src/js', express.static(path.join(__dirname, '/src/js')));

app.get('/', function(request, response) {
  response.sendFile(path.join(__dirname, '/src/index.html'))
  // response.sendFile('index.html', { root: path.join(__dirname, 'src') });
});

app.listen(PORT, function(error) {
  if (error) {
    console.error(error);
  } else {
    console.info("==> 🌎  Listening on port %s. Visit http://localhost:%s/ in your browser.", PORT, PORT);
  }
});
