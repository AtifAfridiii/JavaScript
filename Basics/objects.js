// ************************** Objects ********************

let mySym = Symbol('mySym')

let any = {

    name : "Atif" ,
    age : 21 ,
    'Email' : "atifjs@gmail.com" ,
    [mySym] : 'My Symbol',
    arr : ['hello' , 'js' , 1110 , true , 10.89 ,]
}
// console.log(any);
// console.log(any['name']);
// console.log(any.age);
// console.log(any.name);
// console.log(any.any); // undefined
// console.log(any.Email);
// console.log( any[mySym]);
// any.name = 'Afrid',
// console.log(any);
// Object.freeze(any)
// any.age=19 
// console.log(any);
// console.log(any.arr[3]);



// any.greeting = function(){

//     console.log('Hello world');
// }

// any.greetingTwo = function(){
//     console.log(`Hello ${this.name}`);
// }

// console.log(any.greeting());
// console.log( any.greetingTwo());

