//Task 1
//Create an array: add, remove, and log the list.
let products = ["Table", "Chair", "Couch", "Mirror", "Lamp"];
products.push("Bed");
products.pop();
console.log(products);
//Well now what was the point of that...?

//Task 2
//Create an array of scores, update a specific value, find average
let scores = [71, 55, 89, 93, 99, 81];
scores[1] = 75;
let sum = scores.reduce((current, updated) => current + updated, 0);
let average = sum / scores.length;
console.log(`Scores: ${scores}
Average: ${average}`);

//Task 3
//Declare object with properties, update property, add property
let employee = {
    name: "John",
    age: "30",
    department: "IT",
    isActive: true
};
employee.department = "Tax";
employee.position = "Manager";
console.log(employee);