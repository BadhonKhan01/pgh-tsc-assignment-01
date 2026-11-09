title: How does TypeScript's type hierarchy work

Introduction: TypeScript মূলত JavaScript এর একটি Superset। TypeScript এর সবচেয়ে গুরুত্বপূর্ণ বিষয়গুলোর মধ্যে একটি হলো Type System সম্পর্কে বোঝা। এর মাধ্যমে আমরা Variable, Function এর Parameters, Function এর Return Type ইত্যাদি নির্দিষ্ট করে দিতে পারি। ফলে আমাদের কোড আরও পরিষ্কার হয় এবং Type related ভুল সহজেই খুঁজে বের করা যায়। TypeScript এ বিভিন্ন ধরনের Type রয়েছে। এগুলোকে সহজে বোঝার জন্য আমরা Type Hierarchy সম্পর্কে ধারণা নিতে পারি।

Top Types: Type Hierarchy এর সবচেয়ে উপরের দিকে রয়েছে any এবং unknown। যখন আমরা কোনো Variable এর Type Checking করতে চাই না, তখন any ব্যবহার করতে পারি। এটি TypeScript এর Type Safety এড়িয়ে যাওয়ার সুযোগ দেয়। যখন কোনো Variable এর Type আগে থেকে জানা থাকে না, তখন unknown ব্যবহার করতে পারি। তবে Variable ব্যবহার করার আগে এর Type Checking বা Type Narrowing করতে হয়। 

উদাহরণ: `Any`
let myName;
let myName: any;

উদাহরণ: `Unknown`
let value: unknown = "Hello TypeScript";
if (typeof value === "string") {
    console.log(value.toUpperCase());
}

Core Types: Core Types এর মধ্যে রয়েছে string, number, boolean ইত্যাদি। এগুলোর নির্দিষ্ট Value ব্যবহার করে আমরা Literal Type তৈরি করতে পারি। যেমন কোনো User এর Role নির্ধারণ করতে "admin" অথবা "user" ব্যবহার করা যায়।

উদাহরণ: `Core Types`
let userName: string = "Badhon";
let age: number = 25;
let isActive: boolean = true;

উদাহরণ: `Literal Type`
type UserRole = "admin" | "user";
let role: UserRole = "admin";

Nullish Types: এই অংশে রয়েছে null এবং undefined। এগুলো দিয়ে কোনো Value অনুপস্থিত বা এখনো নির্ধারিত নয়, এমন অবস্থা বোঝানো যায়।

উদাহরণ: `Nullish Types`
let userName: string | null = null;
userName = "Badhon";
userName = null;

Bottom Type: Type Hierarchy এর সবচেয়ে নিচে রয়েছে never। এটি এমন একটি Type, যা কোনো Value ধারণ করে না। যেমন কোনো Function যদি Error Throw করে এবং স্বাভাবিকভাবে Return না করে, তাহলে তার Return Type হতে পারে never।

উদাহরণ: `Bottom Type`
function throwError(message: string): never {
    throw new Error(message);
}

throwError("Something went wrong!");