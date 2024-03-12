function checkStudents(students, cohortMonth) {
  if (students.length === 0) {
    return [];
  }
  if (students.length === 1) {
    if (students[0].cohort === cohortMonth) {
      return true;
    } else {
      return false;
    }
  }

  return (allInSameCohort = students.every((student) => {
    return student.cohort === cohortMonth;
  }));
}

module.exports = checkStudents;
