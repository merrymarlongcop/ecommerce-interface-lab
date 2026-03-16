// Problem 1: The Strict Type Checker
function checkVariable(input) {
    switch (typeof input) {
        case "string":
            return "string";
        case "number":
            return "number";
        case "boolean":
            return "boolean";
        case "bigint":
            return "bigint";
        case "undefined":
            return "undefined";
        case "object":
            return "object"; // includes null and objects
        default:
            return "unknown";
    }
}

// Test Problem 1
console.log("Problem 1:");
console.log(checkVariable("Hello"));     // string
console.log(checkVariable(10));          // number
console.log(checkVariable(true));        // boolean
console.log(checkVariable(10n));         // bigint
console.log(checkVariable(undefined));   // undefined
console.log(checkVariable(null));        // object


// Problem 2: Secure ID Generator
function generateIDs(count) {
    let ids = [];

    for (let i = 0; i < count; i++) {
        if (i === 5) continue; // skip number 5
          ids.push(`ID-${i}`);
    }

    return ids;
}

// Test Problem 2
console.log(generateIDs(7)); // ["ID-0","ID-1","ID-2","ID-3","ID-4","ID-6"]


// Problem 3: The Functional Sum
function calculateTotal(...numbers) {
    if (!numbers.every(num => typeof num === "number")) {
        throw new TypeError("Invalid input: All arguments must be numbers");
    }

    return numbers.reduce((total, num) => total + num, 0);
}

// Test Problem 3
console.log("\nProblem 3:");
try {
    console.log(calculateTotal(1, 2, 3, 4)); // 10
} catch (error) {
    console.log(error.message);
}


// Problem 4: Leaderboard Filter
function getTopScorers(playerList) {
    return playerList
        .filter(player => player.score)
        .map(player => player.name)
        .join(", ");
}

// Test Problem 4
console.log("\nProblem 4:");
const players = [
    {name: "Merry", score: 10},
    {name: "James", score: 5},
    {name: "Ana", score: 9},
    {name: "Ebeth", score: 7},
    {name: "Irish", score: 12}
];

console.log(getTopScorers(players)); // Merry, Ana, Irish


// Problem 5: The Private Inventory
class Item {
    #discount = 0.1;

    constructor(name, price) {
        this.name = name;
        this.price = price;
    }

    get finalPrice() {
        return this.price - (this.price * this.#discount);
    }
}

// Test Problem 5
console.log("\nProblem 5:");
const item1 = new Item("Laptop", 1000);
console.log(item1.finalPrice); // 900


// Problem 6: Robust Division
function safeDivide(a, b) {
    try {
        if (b === 0) {
            throw new Error("Cannot divide by zero");
        }
        return a / b;
    } catch (error) {
        return error.message;
    } finally {
        console.log("Operation attempted");
    }
}

// Test Problem 6
console.log("\nProblem 6:");
console.log(safeDivide(10, 2)); // 5
console.log(safeDivide(10, 0)); // Cannot divide by zero