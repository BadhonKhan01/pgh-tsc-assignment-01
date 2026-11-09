# What is Type Narrowing in TypeScript?
### TypeScript এ Type Narrowing কী?

## Introduction

TypeScript এ যখন কোনো Variable এর মধ্যে একাধিক Type এর Value থাকতে পারে, তখন তাকে Union Type বলা হয়। কিন্তু অনেক সময় আমাদের জানতে হয়, Variable এর মধ্যে বর্তমানে ঠিক কোন Type এর Value রয়েছে।

এই বিষয়টি নিশ্চিত করার প্রক্রিয়াকে **Type Narrowing** বলা হয়।

এর মাধ্যমে আমরা কোনো Variable এর সম্ভাব্য Type কমিয়ে নির্দিষ্ট একটি Type এ নিয়ে আসতে পারি। ফলে নির্দিষ্ট Type অনুযায়ী Method বা Property ব্যবহার করা সহজ হয় এবং Type related ভুল এড়িয়ে চলা যায়।

TypeScript এ Type Narrowing করার বিভিন্ন উপায় রয়েছে। এর মধ্যে গুরুত্বপূর্ণ তিনটি হলো `typeof`, `instanceof` এবং `in` Operator।

---

## 1. typeof Operator

`typeof` Operator ব্যবহার করে কোনো Variable এর বর্তমান Value এর Type চেক করা যায়।

যখন আমরা `typeof` দিয়ে Type Checking করি, তখন TypeScript বুঝতে পারে Variable টি কোন Type এর এবং সেই অনুযায়ী Type Narrowing করে।

```typescript
function processInput(value: string | number) {
    if (typeof value === "string") {
        console.log(value.toUpperCase());
    } else {
        console.log(value.toFixed(2));
    }
}

processInput("Hello TypeScript");
processInput(100);
```

**ব্যাখ্যা:**

- যদি `value` এর Type `string` হয়, তাহলে `toUpperCase()` Method ব্যবহার করতে পারব।
- অন্যথায় TypeScript বুঝতে পারবে যে এটি `number` এবং `toFixed()` Method ব্যবহার করতে পারব।

---

## 2. instanceof Operator

`instanceof` Operator ব্যবহার করে কোনো Object নির্দিষ্ট Class এর Instance কি না, তা চেক করা যায়।

যখন কোনো Variable এর মধ্যে একাধিক Class এর Object থাকতে পারে, তখন `instanceof` ব্যবহার করে Type Narrowing করা যায়।

```typescript
class Dog {
    bark() {
        console.log("Dog is barking");
    }
}

class Cat {
    meow() {
        console.log("Cat is meowing");
    }
}

function makeSound(animal: Dog | Cat) {
    if (animal instanceof Dog) {
        animal.bark();
    } else {
        animal.meow();
    }
}

makeSound(new Dog());
makeSound(new Cat());
```

**ব্যাখ্যা:**

- যদি `animal` এর Instance `Dog` Class এর হয়, তাহলে `bark()` Method ব্যবহার করতে পারব।
- অন্যথায় TypeScript বুঝতে পারবে যে এটি `Cat` Class এর Instance এবং `meow()` Method ব্যবহার করতে পারব।

---

## 3. in Operator

`in` Operator ব্যবহার করে কোনো Object এর মধ্যে নির্দিষ্ট Property রয়েছে কি না, তা চেক করা যায়।

যখন কোনো Variable এর মধ্যে একাধিক Object Type থাকতে পারে, তখন `in` Operator দিয়ে নির্দিষ্ট Property চেক করে Type Narrowing করা যায়।

```typescript
type Admin = {
    name: string;
    role: "admin";
    permissions: string[];
};

type User = {
    name: string;
    role: "user";
    email: string;
};

function getUserInfo(person: Admin | User) {
    if ("permissions" in person) {
        console.log(person.permissions);
    } else {
        console.log(person.email);
    }
}

getUserInfo({
    name: "Badhon",
    role: "admin",
    permissions: ["create", "edit", "delete"]
});

getUserInfo({
    name: "Rakib",
    role: "user",
    email: "rakib@example.com"
});
```

**ব্যাখ্যা:**

- যদি `person` Object এর মধ্যে `permissions` Property থাকে, তাহলে TypeScript বুঝতে পারবে এটি `Admin` Type।
- অন্যথায় এটি `User` Type হিসেবে Narrow হবে এবং `email` Property ব্যবহার করতে পারব।

---

## Conclusion

Type Narrowing TypeScript এর একটি গুরুত্বপূর্ণ Feature। এর মাধ্যমে আমরা Union Type এর মধ্যে থাকা একাধিক সম্ভাব্য Type থেকে নির্দিষ্ট Type চিহ্নিত করতে পারি।

`typeof`, `instanceof` এবং `in` Operator ব্যবহার করে সহজেই Type Checking করা যায় এবং প্রয়োজন অনুযায়ী Type Narrowing করা সম্ভব হয়।