const express = require('express');
const comm = require('./communication.js');

const PORT = 3000;
const BUFFER = [];

const app = express();
const getCharFromBuffer = comm.initCommunication(BUFFER);

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

app.get('/app.bundle.js', (req, res) => {
  res.sendFile(__dirname + '/app.bundle.js');
});

app.get('/app.bundle.js.map', (req, res) => {
  res.sendFile(__dirname + '/app.bundle.js.map');
});

app.get('/img/*', (req, res) => {
  res.sendFile(__dirname + req.url);
});

app.get('/json/*', (req, res) => {
  res.sendFile(__dirname + req.url);
});

app.get('/charCode', (req, res) => {
  const char = getCharFromBuffer();
  res.send(char);
})

app.listen(PORT, console.log("run server!"));