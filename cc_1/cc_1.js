//Task 1
// First, ask the user for their name and save it as a string
let employeeName = "John";

//Then, we must assign an employee ID.
const employeeID = 102870;

//Last, we'll create a variable for activity status.
var isActive = true;

//Log the variables and their types to the console.
console.log(`Employee name: Value: ${employeeName} Type: ${typeof employeeName}
Employee ID: Value: ${employeeID} Type: ${typeof employeeID}
Active: Value: ${isActive} Type: ${typeof isActive}`);

//Task 2
//Declare variable productName using let, string value
let productName = "Table";

//Declare variable price with const, numerical value
const productPrice = 150;

//Declare an availability variable, boolean value
var isAvailable = true;

//Log the variables and their types
console.log(`Product Name: Value: ${productName} Type: ${typeof productName}
Product Price: Value: ${productPrice} Type: ${typeof productPrice}
Availability: Value: ${isAvailable} Type: ${typeof isAvailable}`);

//Task 3
//Declare a variable to represent the initial balance
let initialBalance = 100;

//Perform basic operations and log updated values
let balance = initialBalance + 50;
function bal() {
    console.log(`The current balance is ` + balance);
}
bal();
balance *= 2;
bal();
balance /= 3;
bal();
balance -= 50;
bal();

//Task 4
//Declare a variable for customer name and assign a value
let customerName = "Jane";
console.log("Hello " + customerName + ", welcome to our website!");

//Task 5 
//Declare a variable for login status and check access conditions.
let isLoggedIn = true;