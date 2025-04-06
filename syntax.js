//1.variables
var variableName = value;
let variableName = value;
const CONSTANT_NAME = value;

//2.data types
// Numbers
let num = 10;
// Strings
let str = "Hello";
// Booleans
let flag = true;
// Arrays
let arr = [value1, value2];
// Objects
let obj = { key1: value1, key2: value2 };
//boolean conditions
if (condition) {
  // true block
} else {
  // false block
}
//arrays
let arr = [item1, item2];
arr[index];            
arr.length; 

//3.loops
//1.for loop
for (initialization; condition; increment) {
}
//2.while loop
while (condition) {
  // loop body
}
//3.do-while loop
do {
  // loop body
} while (condition);

//4.functions
//function declaration
function functionName(parameters) {
  // body
  return value;
}
//anonymous function
let variable = function(parameters) {
  // body
};
//arrow function
let functionName = (parameters) => {
  // body
};

//5.objects
let obj = {
  key: value,
  methodName: function() {
    // method body
  }
};
//operations
object.key = value;           // add/update
delete object.key;            // delete
"key" in object;              // check existence

//6.destructuring assignment
//array destructuring
let [var1, var2] = array;
//object destructring
let { key1, key2 } = object;

//7.spread opeartor
//arrays
let newArray = [...array1, ...array2];
//objects
let newObj = { ...obj1, ...obj2 };

