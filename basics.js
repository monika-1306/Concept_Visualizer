//1.variables
var name="Monika";
let age=20;
const pi=3.16;
console.log(name,age,pi);
//2.data types
//numbers and strings
let num1=10;
let num2=5;
let sum=num1+num2;
console.log("sum: ",sum);
let greeting ="hello " +name;
console.log(greeting);
//boolean
let isEmployee= true;
if (isRaining){
console.log("Access granted.");
}
else{
console.log("Access denied.");
//Arrays
let fruits=["Apple","Banana"];
for(let i=0;i<fruits.length;i++){
console.log(fruits[i]);
}
//objects
let person={
name:"Monika",
age:19,
isStudent:true
};
console.log(person.name + "is" +person.age + "years.old");
//functions
function greet(name){
console.log("Hello, " +name + "!);
}
greet("Monika");
//arrow function
const greet = () => {
console.log("Greetings from an arrow function!");
};
greet();
//loop
for(let i=1;i<5;i++){
console.log("count: "+i);
}
//while loop
let count=1;
while(count<=3){
console.log("count:"+count);
count++;
}
//do-while
let num=1;
do{
console.log("Number:"+num);
numm++;
}
while(num<=3);
//function with parametrs
function greet(name) {
console.log("Hello, " + name + "!");
}
greet("Monika");
//function with return value
function add(a, b) {
return a + b;
}
let result = add(5, 3);
console.log("Sum is:", result); 
//push
let fruits = ["Apple", "Banana"];
fruits.push("Cherry");
console.log(fruits);  // ["Apple", "Banana", "Cherry"]
//pop
fruits.pop();
console.log(fruits);  // ["Apple", "Banana"]
//shift
fruits.shift();
console.log(fruits);  // ["Banana"]
//unshift
fruits.unshift("Mango");
console.log(fruits);  // ["Mango", "Banana"]
//slice
let fruits = ["Apple", "Banana", "Cherry", "Date"];
let sliced = fruits.slice(1, 3); 
console.log(sliced);// ["Banana", "Cherry"]
console.log(fruits);            
//splice
let fruits = ["Apple", "Banana", "Cherry", "Date"];
let removed = fruits.splice(1, 2);
console.log(removed);   // ["Banana", "Cherry"]
console.log(fruits);    // ["Apple", "Date"]
//adding a property
let person = {
  name: "Monika",
  age: 19
};
// Add a new property
person.city = "visakapatnam";
onsole.log(person); //{ name: "John", age: 30, city: "New York" }
//deleting a property
delete person.age;
console.log(person);// Output: { name: "John", city: "New York" }
//checking if property exist or not
console.log("name" in person);   // true
console.log("age" in person);    // false (because we deleted it)
//array destructuring
let colors = ["red", "green", "blue"];
let [first, second, third] = colors;
console.log(first);   // red
console.log(second);  // green
console.log(third);   // blue
//object destructuring
let person = {
  name: "MOnika",
  age: 19,
  city: "visakapatnam"
};
let { name, age } = person;
console.log(name); // Monika
console.log(age);  // 19
