/*eslint-disable*/
export default function updateStudentGradeByCity(student, city, grades) {
  return student
    .filter((student) => student.location === city)
    .map((student) => {
      const grade = grades.filter((grades) => grades.studentId === student.id)[0];
      student.grade = grade ? grade.grade : 'N/A';
      return student;
    });
}
