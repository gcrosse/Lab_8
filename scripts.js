const student = {
    studentName: 'John Doe',
    age: 22,
    enrolled: true,
    courses: ['Math', 'English', 'Science'],
    displayInfo() {
        return `${this.studentName}, Age: ${this.age}, Enrolled: ${this.enrolled}`;
    }
};
console.log(student.studentName);
console.log(student.age);
console.log(student.displayInfo());

const studentJSON = JSON.stringify(student);
console.log(studentJSON)

const studentFromJSON = JSON.parse(studentJSON);
console.log(studentFromJSON);

const { studentName, courses } = student;
console.log(studentName);
console.log(courses);

const scores = [85, 92, 78, 90];
const [firstScore, secondScore] = scores;
console.log(firstScore);
console.log(secondScore);

const studentClone = {...student, graduationYear: 2024}
console.log(studentClone);

const newCourses = ['History', 'Art'];
const allCourses = [...student.courses, ...newCourses]
console.log(allCourses);

student.addCourse = function(courses) {
    this.courses.push(courses);
}

student.totalCourses = function() {
    return this.courses.length;
};

student.addCourse('Computer Science');
console.log(student.courses);
console.log(student.totalCourses());

const averageScore = scores.reduce((sum, score) => sum + score, 0) / scores.length;
console.log(averageScore);