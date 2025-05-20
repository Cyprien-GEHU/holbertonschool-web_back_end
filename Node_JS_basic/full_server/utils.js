// this programme read the database

const fs = require('fs');

export default function readDatabase(fileCSV) {
  return new Promise((resolve, reject) => {
    fs.readFile(fileCSV, 'utf-8', (err, data) => {
      if (err) {
        reject(err('Cannot load the databse'));
      } else {
        const [Head, ...lines] = data.split('\n').filter((line) => line.length > 0);
        const head = Head.split(',');
        const listOfObject = lines.map((line) => line.split(',').reduce((object, value, index) => Object.assign(object, { [head[index]]: value }), {}));
        const listOfField = listOfObject.reduce((res, value) => {
          res[value.field] = res[value.field] || [];
          res[value.field].push(value.firstname);
          return res;
        }, {});
        resolve(listOfField);
      }
    });
  });
}
