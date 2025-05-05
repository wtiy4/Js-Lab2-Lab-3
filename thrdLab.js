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
