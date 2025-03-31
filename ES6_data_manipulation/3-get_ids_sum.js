export default function getStudentIdsSum(students) {
  return students.reduce((sum, array) => sum + array.id, 0);
}
