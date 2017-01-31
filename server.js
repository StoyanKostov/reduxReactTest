var url = require( 'url' );
var http = require('http');
var fs = require('fs');
var path = require('path');

http.createServer(function (request, response) {
    var pathname = url.parse(request.url).pathname;
  response.writeHead(200);
  fs.createReadStream( path.join( process.cwd(), pathname )).pipe(response)
}).listen( 8080 );

