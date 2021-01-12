const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.json());

const test1Routes = require('./routes/test1');
const test2Routes = require('./routes/test2');

app.use('/test1', test1Routes);

app.use('/test2', test2Routes);

app.listen(3000, () => {
  console.log('JSON Server is running');
});

