// Problem 1
function multiplyValue(value, multiplier = 2) {
    return value * multiplier;
}
// Problem 2
function processInput(value) {
    if (typeof value === "boolean") {
        return (value === true) ? "Active" : "Inactive";
    }
    else if (typeof value === "number") {
        return value * 10;
    }
    return value.trim().toLowerCase();
}
// Problem 3
function formatCoordinate(value) {
    const [latitude, longitude, locationName] = value;
    return `Location: ${locationName} (${latitude}, ${longitude})`;
}
// Problem 4
function concatenateArrays(...arrays) {
    return arrays.flat();
}
function getPopularCourses(course, minStudents) {
    const newArr = [];
    course.forEach(item => {
        if (item.isPublished && item.students >= minStudents) {
            newArr.push(item);
        }
    });
    return newArr;
}
const courses = [
    { title: "TypeScript Mastery", students: 120, isPublished: true },
    { title: "Draft Course", students: 200, isPublished: false },
    { title: "Basic HTML", students: 45, isPublished: true },
    { title: "Next.js Pro", students: 85, isPublished: true }
];
// getPopularCourses(courses, 80);
// Problem 6
function pluckValues(items, key) {
    return items.map(item => item[key]);
}
const users = [
    { id: 1, name: "Rakib", role: "Admin" },
    { id: 2, name: "Sadia", role: "Editor" },
    { id: 3, name: "Tariq", role: "Subscriber" }
];
// console.log(
// pluckValues(users, "name"),
// pluckValues(users, "id")
// );
// Problem 7
class Employee {
    name;
    baseSalary;
    constructor(name, baseSalary) {
        this.name = name;
        this.baseSalary = baseSalary;
    }
    getDetails() {
        return `Employee: ${this.name}, Base Salary: ${this.baseSalary}`;
    }
}
class Manager extends Employee {
    department;
    constructor(name, baseSalary, department) {
        super(name, baseSalary);
        this.department = department;
    }
    getRoleInfo() {
        return `Manager of ${this.department}: ${this.name}`;
    }
}
const manager = new Manager("Alice", 50000, "Engineering");
const details = manager.getDetails();
const roleInfo = manager.getRoleInfo();
// console.log(details);
// console.log(roleInfo);
// Problem 8
function validateAgeAsync(age) {
    if (age >= 18) {
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve("Access Granted");
            }, 1000);
        });
    }
    throw new Error("Error: Access Denied: Must be 18 or older");
}
validateAgeAsync(30).then((msg) => {
    console.log(msg);
}).catch((error) => {
    console.log(error);
});
export {};
