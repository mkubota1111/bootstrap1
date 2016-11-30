var connect = require('connect');
var serveStatic = require('serve-static');

var app = connect();
app.use(serveStatic("./web"));
app.listen(5100);
console.log("Listening on port 5100");
