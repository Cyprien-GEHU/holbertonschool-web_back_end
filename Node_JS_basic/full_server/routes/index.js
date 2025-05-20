// we definies the route of each function

import AppController from '../controllers/AppController';
import StudentsController from '../controllers/StudentsController';

const express = require('express');

const route = express.Router();

route.get('/', AppController.getHomepage);
route.get('/students', (req, res) => {
  StudentsController.getAllStudent(req, res, process.argv[2]);
});
route.get('/students/:major', (req, res) => {
  StudentsController.getAllStudentsByMajor(req, res, process.argv[2]);
});

export default route;
