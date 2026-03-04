function gradingStudents(grades) {
  let arr = [];
  for (let i = 0; i < grades.length; i++) {
    let n = grades[i];

    if (n < 38) {
      arr.push(n);
    } else {
      let r = n % 5;

      if (r >= 3) {
        arr.push(n + (5 - r));
      } else {
        arr.push(n);
      }
    }
  }
  return arr;
}
console.log(gradingStudents([73, 67, 38, 33]));
