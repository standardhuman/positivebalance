const http = require('http');
const fs = require('fs');
const formidable = require('formidable');
const util = require('util');

const server = http.createServer(function(req, res) {

    console.log(req.method, req.url);

    if (req.method.toLowerCase() == 'get' && req.url === "/") {
        sendHTML(res);

    } else if (req.url === "/styles.css") {
        sendCSS(res);

    } else if (req.url === "/client.js") {
        sendClientJS(res);

    } else if (req.method.toLowerCase() == 'post') {
        processFormFieldsIndividual(req, res);

    } else if (req.method.toLowerCase() == 'get') {
        displayForm(res);

    } else {
        console.log("no endpoint");
    }
});

function displayForm(res) {
    fs.readFile('index.html', function(err, data) {
        res.writeHead(200, {
            'Content-Type': 'text/html',
            'Content-Length': data.length
        });
        res.write(data);
        res.end();
    });
}

function sendHTML(res) {
    fs.readFile('index.html', function(err, data) {
        res.writeHead(200, {
            'Content-Type': 'text/html',
            'Content-Length': data.length
        });
        res.write(data);
        res.end();
    });
}

function sendCSS(res) {
    fs.readFile('styles.css', function(err, data) {
        res.writeHead(200, {
            'Content-Type': 'text/css',
            'Content-Length': data.length
        });
        res.write(data);
        res.end();
    });
}

function sendClientJS(res) {
    fs.readFile('client.js', function(err, data) {
        res.writeHead(200, {
            'Content-Type': 'text/javascript',
            'Content-Length': data.length
        });
        res.write(data);
        res.end();
    });
}

function processFormFieldsIndividual(req, res) {
    //Store the data from the fields in your data store.
    //The data store could be a file or database or any other store based
    //on your application.
    var fields = [];
    var form = new formidable.IncomingForm();
    form.on('field', function(field, value) {
        fields[field] = value;
    });
    console.log("fields:", fields);
    form.on('end', function() {
        res.writeHead(200, {
            'content-type': 'text/plain'
        });
        res.write('received the data:\n\n');
        console.log("fields:", fields);
        res.end(util.inspect({
            fields: fields
        }));
    });
    console.log(form);
    form.parse(req);
}

server.listen(1185);
console.log("server listening on 1185");
