// with this function will read the file databse.cvs

const fs = require('fs');

function countStudents(filecsv) {
  const studentsField = {};
  const numberField = {};
  let NumberOfStudent = 0;

  try {
    const csv = fs.readFileSync(filecsv, 'utf-8');
    const line = csv.trim().split('\n');

    for (let i = 1; i < line.length; i += 1) {
      if (line[i]) {
        NumberOfStudent += 1;
        const [firstName, , , field] = line[i].split(',');

        if (!studentsField[field]) {
          studentsField[field] = [];
        }
        studentsField[field].push(firstName);

        if (numberField[field]) {
          numberField[field] += 1;
        } else {
          numberField[field] = 1;
        }
      }
    }

    console.log(`Number of students: ${NumberOfStudent}`);

    for (const [field, number] of Object.entries(numberField)) {
      console.log(`Number of students in ${field}: ${number}. List: ${studentsField[field].join(', ')}`);
    }
  } catch (err) {
    throw new Error(`Cannot load the database${err}`);
  }
}

module.exports = countStudents;
