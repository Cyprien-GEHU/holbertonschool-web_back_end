// this function do the page when /students routes

import readDatabase from '../utils';

export default class StudentsController {
  static getAllStudent(request, response, DB) {
    readDatabase(DB).then((result) => {
      const students = [];
      students.push('This is the list of our students');
      Object.keys(result).sort().forEach((key) => {
        students.push(`Number of students in ${key}: ${result[key].length}. List: ${result[key].join(', ')}`);
      });
      response.status(200);
      response.send(students.join('\n'));
    }).catch(() => {
      response.status(500);
      response.send('Cannot load the database');
    });
  }

  static getAllStudentsByMajor(request, response, DB) {
    const { major } = request.params;
    if (major !== 'CS' && major !== 'SWE') {
      response.status(500);
      response.send('Major parameter must be CS or SWE');
    } else {
      readDatabase(DB).then((result) => {
        response.status(200);
        response.send(`List: ${result[major].join(', ')}`);
      }).catch(() => {
        response.status(500);
        response.send('Cannot load the database');
      });
    }
  }
}
