//Arreglo
const studentGrades = [100, 50, 65, 70, 85, 96, 45];

//Función
const computeGrades = (arreglo) => {
	arreglo.forEach((studentGrade) => {
		if (studentGrade < 60) {
			(studentGrade = F), lose;
		} else if (studentGrade > 60 < 69) {
			studentGrade = D;
			passed;
		} else if (studentGrade > 70 < 79) {
			studentGrade = C;
			passed;
		} else if (studentGrade > 80 < 89) {
			studentGrade = B;
			passed;
		} else if (studentGrade > 90 < 100) {
			studentGrade = A;
			passed;
		}
	});
	return studentGrades;
};

//Llamar a la función
const result = computeGrades(studentGrades);
console.log(result);
