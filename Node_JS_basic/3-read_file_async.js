// function that reads a file asynchronously

const fs = require('fs');

function countStudents(path) {
  return new Promise((resolve, reject) => {
    fs.readFile(path, 'utf8', (err, data) => {
      if (err) {
        reject(new Error('Cannot load the database'));
        return;
      }
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
      let outputconvertedtostring = '';
      outputconvertedtostring += `Number of students: ${listwithoutfirstline.length}\n`;
      outputconvertedtostring += `Number of students in CS: ${studentsincs.length}. List: ${studentsincs.join(', ')}\n`;
      outputconvertedtostring += `Number of students in SWE: ${studentsinswe.length}. List: ${studentsinswe.join(', ')}`;
      resolve(outputconvertedtostring);
    });
  });
}

module.exports = countStudents;
