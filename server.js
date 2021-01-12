const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.json());

const test1Routes = require('./routes/test1');
const test2Routes = require('./routes/test2');
const test3Routes = require('./routes/test3');

app.use('/test1', test1Routes);
app.use('/test2', test2Routes);
app.use('/test3', test3Routes);

app.listen(3000, () => {
  console.log('JSON Server is running');
});

