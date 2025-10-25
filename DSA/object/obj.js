


const studentData = [
    { name: "Alice", grades: [80, 90, 100] },
    { name: "Bob", grades: [70, 75, 65] },
    { name: "Charlie", grades: [60, 50] },
  ];


function calculateAverage(grades) {
    let total = 0;

    for (let i = 0; i < grades.length; i++) {
      total += grades[i];
    }

    let average = Math.floor(total / grades.length);
    return average;
  }
 

  function printStudentReport(students) {
    for (let student of students) {
      let name = student.name;
      let averageGrade = calculateAverage(student.grades);

      console.log(`${name}, Average Grade: ${averageGrade}`);
    }
  }
  printStudentReport(studentData);