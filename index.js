const express = require('express');
const ecstatic = require('ecstatic');
const http = require('http');
const fs = require('fs');
const moment = require('moment');

const app = express();

app.use(ecstatic({
  root: `${__dirname}/captured`,
  showdir: true,
}));

app.get('/c/', (req, res) => {
  const c = req.query.c;
  console.log(`Incoming: ${c}`);

  const date = moment().format();

  fs.writeFile(`captured/captured_${date}.txt`, c, (err) => {
    console.log(`Created: captured_${date}.txt`);
    // throws an error, you could also catch it here
    if (err) throw err;

    // success case, the file was saved
    console.log('Captured!');
  });
  res.send('Success!');
});

http.createServer(app).listen(9000);

console.log('Listening on http://localhost:9000');