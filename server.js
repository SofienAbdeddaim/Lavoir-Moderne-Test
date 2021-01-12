const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.json());

const test1Routes = require('./routes/test1');

app.use('/test1', test1Routes);

app.listen(3000, () => {
  console.log('JSON Server is running');
});

