// this function will run all server
import route from './routes';

const express = require('express');

const port = 1245;
const app = express();

app.use('/', route);

app.listen(port);

export default app;
