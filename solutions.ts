// Problem 1
function multiplyValue(value: number, multiplier: number = 2): number {
    return value * multiplier;
}

// Problem 2
function processInput(value: string | number | boolean): string | number {
    if(typeof value === "boolean"){
        return (value === true) ? "Active" : "Inactive";
    } else if(typeof value === "number"){
        return value * 10
    }

    return value.trim().toLowerCase();
}

// Problem 3
function formatCoordinate(value: readonly [number, number, string]): string {
    const [latitude, longitude, locationName] = value;
    return `Location: ${locationName} (${latitude}, ${longitude})`;
}

// Problem 4
function concatenateArrays <T>(...arrays: T[][]): T[] {
    return arrays.flat();
}

// Problem 5

interface Course {
    title: string,
    students: number,
    isPublished: boolean
}

function getPopularCourses(course: Course[], minStudents: number): Course[] {
    const newArr: Course[] = [];
    course.forEach(item => {
        if(item.isPublished && item.students >= minStudents){
            newArr.push(item)
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
function pluckValues <T, K extends keyof T>(items: T[], key: K): T[K][] {
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

    protected name: string;
    private baseSalary: number;

    constructor(name: string, baseSalary: number){
        this.name = name;
        this.baseSalary = baseSalary;
    }

    getDetails(): string {
        return `Employee: ${this.name}, Base Salary: ${this.baseSalary}`;
    }
}

class Manager extends Employee {

    private department: string;

    constructor(name: string, baseSalary: number, department: string){
        super(name, baseSalary);
        this.department = department;
    }

    getRoleInfo(): string {
        return `Manager of ${this.department}: ${this.name}`;
    }
}


const manager = new Manager("Alice", 50000, "Engineering");
const details = manager.getDetails();
const roleInfo = manager.getRoleInfo();

// console.log(details);
// console.log(roleInfo);


// Problem 8

function validateAgeAsync(age: number): Promise<string>{
    if(age >= 18){
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve("Access Granted");                
            }, 1000);
        })
    }

    throw new Error("Error: Access Denied: Must be 18 or older");
}

validateAgeAsync(30).then((msg) => {
    console.log(msg);
}).catch((error) => {
    console.log(error);
})
