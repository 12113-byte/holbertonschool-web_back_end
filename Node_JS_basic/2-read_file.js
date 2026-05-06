// function that reads a file synchronously

const fs = require('fs');

function countStudents(path) {
  try {
    const data = fs.readFileSync(path, 'utf8');
    const lines = data.split('\n');
    const noemptylines = lines.filter((lines) => lines.trim() !== '');
    const listwithoutfirstline = noemptylines.slice(1);

    const studentsincs = [];
    const studentsinswe = [];

    listwithoutfirstline.forEach((item) => {
      const student = item.split(',');
      if (student[3] === 'CS') {
        studentsincs.push(student[0]);
      } else if (student[3] === 'SWE') {
        studentsinswe.push(student[0]);
      }
    });
    console.log(`Number of students: ${listwithoutfirstline.length}`);
    console.log(`Number of students in CS: ${studentsincs.length}. List: ${studentsincs.join(', ')}`);
    console.log(`Number of students in SWE: ${studentsinswe.length}. List: ${studentsinswe.join(', ')}`);
  } catch (err) {
    throw new Error('Cannot load the database');
  }
}

module.exports = countStudents;
