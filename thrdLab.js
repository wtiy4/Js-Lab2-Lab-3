// الاول
let students = ["Ali", "Sara", "Ahmed", "Lana", "Omar", "Noor"]


const stsrtWithA = students.filter(name => name.startsWith("A") || name.startsWith("a"))
console.log(stsrtWithA)


// الثاني
const fourLetter = students.filter(el => el.length > 4)
console.log(fourLetter)

// الثالث
const upperCaase = students.map(el => el.toUpperCase())
console.log(upperCaase)


// الرابع
const startsWithR = students.find(el => el.toLowerCase().includes("r"))
console.log(startsWithR)

// الخامس
const sortedList = students.sort()
console.log(` Sorted List: ${sortedList}`)

// السادس
const isExist = students.some(el => el.includes("Omar"))
console.log(isExist)

// السابع
const totalChars = students.reduce((sum, name) => sum + name.length, 0);
console.log(totalChars)

// الثامن
const evenNumb = students.filter(name => name.length % 2 === 0);
console.log("الأسماء التي عدد حروفها زوجي:", evenNumb);

// التاسع
const reversedList = students.map(name => name.split("").reverse().join(""));
console.log(reversedList)

// 10
const filteredStudents = students.filter(name => !name.toLowerCase().includes("o"));
console.log("الأسماء بعد الحذف:", filteredStudents);


// 11
const studentGrades = [
    ["Ali", [95, 100, 90]],
    ["Sara", [67, 59, 72]],
    ["Ahmed", [100, 100, 100]],
    ["Lana", [97, 100, 91]],
    ["Omar", [49, 29, 30]],
    ["Noor", [90, 98, 98]]
];

console.log(studentGrades);


// 12
const avergeGrades = studentGrades.map(([name, grades]) => {
    const average = grades.reduce((sum, grade) => sum + grade, 0) / grades.length;
    return [name, average];
});
console.log(avergeGrades);



// 13
const studentsWithAverage = students.map(([name, grades]) => {
    const average = grades.reduce((sum, grade) => sum + grade, 0) / grades.length;
    return [name, average];
});

// تصفية الطلاب الذين معدلهم أكبر من 80
const topStudents = studentsWithAverage.filter(([name, average]) => average > 80);

console.log(topStudents);