# How Does TypeScript's Type Hierarchy Work?
### TypeScript এর Type Hierarchy কীভাবে কাজ করে?

## Introduction

TypeScript মূলত JavaScript এর একটি **Superset**। TypeScript এর সবচেয়ে গুরুত্বপূর্ণ বিষয়গুলোর মধ্যে একটি হলো Type System সম্পর্কে বোঝা।

এর মাধ্যমে আমরা Variable, Function এর Parameters, Function এর Return Type ইত্যাদি নির্দিষ্ট করে দিতে পারি। ফলে আমাদের কোড আরও পরিষ্কার হয় এবং Type related ভুল সহজেই খুঁজে বের করা যায়।

TypeScript এ বিভিন্ন ধরনের Type রয়েছে। এগুলোকে সহজে বোঝার জন্য আমরা **Type Hierarchy** সম্পর্কে ধারণা নিতে পারি।

---

### 1. Top Types

Type Hierarchy এর সবচেয়ে উপরের দিকে রয়েছে `any` এবং `unknown`।

- **Any:** যখন আমরা কোনো Variable এর Type Checking করতে চাই না, তখন `any` ব্যবহার করতে পারি। এটি TypeScript এর Type Safety এড়িয়ে যাওয়ার সুযোগ দেয়।

```typescript
let myName;
let userName: any;
```

- **Unknown:** যখন কোনো Variable এর Type আগে থেকে জানা থাকে না, তখন `unknown` ব্যবহার করতে পারি। তবে Variable ব্যবহার করার আগে এর Type Checking বা Type Narrowing করতে হয়।

```typescript
let value: unknown = "Hello TypeScript";

if (typeof value === "string") {
    console.log(value.toUpperCase());
}
```

---

### 2. Core Types

Core Types এর মধ্যে রয়েছে `string`, `number`, `boolean` ইত্যাদি এগুলোর নির্দিষ্ট Value ব্যবহার করে।

```typescript
let userName: string = "Badhon";
let age: number = 25;
let isActive: boolean = true;
```

আমরা **Literal Type** তৈরি করতে পারি। যেমন কোনো User এর Role নির্ধারণ করতে `"admin"` অথবা `"user"` ব্যবহার করা যায়।

```typescript
type UserRole = "admin" | "user";

let role: UserRole = "admin";
```

---

### 3. Nullish Types

এই অংশে রয়েছে `null` এবং `undefined`। এগুলো দিয়ে কোনো Value অনুপস্থিত বা এখনো নির্ধারিত নয়, এমন অবস্থা বোঝানো যায়।

```typescript
let userName: string | null = null;

userName = "Badhon";
userName = null;
```

---

### 4. Bottom Type

Type Hierarchy এর সবচেয়ে নিচে রয়েছে `never`। এটি এমন একটি Type, যা কোনো Value ধারণ করে না।

যেমন কোনো Function যদি Error Throw করে এবং স্বাভাবিকভাবে Return না করে, তাহলে তার Return Type হতে পারে `never`।

```typescript
function throwError(message: string): never {
    throw new Error(message);
}

throwError("Something went wrong!");
```

---

### Conclusion

TypeScript-এর Type Hierarchy বুঝতে পারলে বিভিন্ন ধরনের Type কীভাবে কাজ করে, তা সহজে বোঝা যায়।

`any` এবং `unknown` দিয়ে শুরু করে Core Types, Nullish Types এবং `never` পর্যন্ত প্রতিটি Type-এর নিজস্ব ব্যবহার রয়েছে। এগুলো সম্পর্কে পরিষ্কার ধারণা থাকলে TypeScript-এর Type System আরও ভালোভাবে বোঝা সম্ভব।