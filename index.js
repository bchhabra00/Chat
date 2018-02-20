const Hapi = require('hapi');

const server = new Hapi.Server();
const promisify = require('util-promisify');
const fs = require('fs');
var Path = require('path');

server.connection({
    port: 3000,
    host: 'localhost'
    
})


server.route({
    method: 'GET',
    path:'/',
    handler: function (request, reply) {
const read = promisify(fs.readFile);
const file = read(Path.join(__dirname , 'login.html'))
        return reply.response(file).header('content-type','text/html');
    }
  });

  server.route({
    method: 'GET',
    path:'/signup.html',
    handler: function (request, reply) {
const read = promisify(fs.readFile);
const file = read(Path.join(__dirname , 'signup.html'))
        return reply.response(file).header('content-type','text/html');
    }

});

server.start((err) => {

    if (err) {
        throw err;
    }
    console.log(`Server running at: ${server.info.uri}`);
});






