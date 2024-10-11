
/// In this file we will know how to declare variables and print them 

const age = 21  // once const value is initialized we can not change it later otherwise it give us error at the run time 
let firstName = "Atif" 
var lastName = "Afridi"
 /// midlleName = 'something'  =>   we can also declare variable like that but its not preffer to use
 
console.log(firstName, lastName, age) // Atif Afridi 21

firstName = 'Jack'
console.log(firstName) // Jack 

lastName = 'willow'
console.log(lastName) // willow

console.log(age); //21



/// This will print all the varaibles in the form of table 

console.table([
    firstName , lastName , firstName , lastName , age
])