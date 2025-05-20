const express = require('express');
const countStudents = require('./3-read_file_async');

const app = express();
const port = 1245;
const database = process.argv[2];

app.get('/', (req, res) => {
  res.send('Hello Holberton School!');
});

app.get('/students', (req, res) => {
  countStudents(database)
    .then((dataDB) => {
      const { studentData, studentCS, studentSWE } = dataDB;
      res.statusCode = 200;
      res.write('This is the list of our students\n');
      res.write(`Number of students: ${studentData.length}\n`);
      res.write(`Number of students in CS: ${studentCS.length}. List: ${studentCS.join(', ')}\n`);
      res.write(`Number of students in SWE: ${studentSWE.length}. List: ${studentSWE.join(', ')}`);
      res.end();
    })
    .catch((err) => {
      res.statusCode = 500;
      res.send(err);
    });
});

app.listen(port);

module.exports = app;
