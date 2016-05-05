// Express
var express = require('express'), http = require('http'), app = express();
app.use(express.static(__dirname + '/public8080'));

var server = http.createServer(app).listen(8080);
console.log('server start:', 8080);

// Seraph for access Neo4j server from WebScoket server.
var db = require("seraph")({
  server:"http://localhost:7474",
  user: "[user id for neo4j]",
  pass: "[password for neo4j]"});
// Socket.IO
var io = require('socket.io'),
    io = io.listen(server);

io.sockets.on('connection', function(socket) {
  var packet = {};
  packet.id = socket.id.substr(2,6);

  socket.emit('mylogin', packet.id);
  io.sockets.emit('login', packet.id);
    
  socket.on('query', function(data) {
    db.query(data, function(err, result) {
      if (err) console.log(err);
      console.log('Search result: ', result);
      socket.emit('result', result);
    });
  });

  socket.on('read', function(id) {
    db.read(id, function(err, node) {
      if (err) console.log(err);
      console.log('Node read: ', id);
      db.readLabels(id, function(err, labels) {
        node.labels = labels;
        socket.emit('node', node);
      });
    });
  });
  
});

