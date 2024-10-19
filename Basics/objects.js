// ************************** Objects ********************

// let mySym = Symbol('mySym')

// let any = {
    
//     name : "Atif" ,
//     age : 21 ,
//     'Email' : "atifjs@gmail.com" ,
//     [mySym] : 'My Symbol',
//     arr : ['hello' , 'js' , 1110 , true , 10.89 ,] ,
//     obj : {
//         student : true,
//         id : 12345,
//         'institute': "xyz",
//         js : "yes",
//         arr : [1,2,3,4,5,6,7,8,9]
//        },
// }
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
// console.log(any.obj.js);
// console.log(any.obj['institute']);
// console.log(any.obj.arr[3]);
// console.log(any.obj.arr.includes(9));


// any.greeting = function(){

//     console.log('Hello world');
// }

// any.greetingTwo = function(){
//     console.log(`Hello ${this.name}`);
// }

// console.log(any.greeting());
// console.log( any.greetingTwo());


// const obj = {}
// obj.name ='Atif',
// obj.age = 21
// console.log(obj);
// obj.name='afridi'
// console.log(obj);

const obj1 = {1 : 'a' , 2 : 'b' } ;
const obj2 = {3 : 'c' , 4: 'd'}
const obj3 = {...obj1,...obj2}; // concatenating two objects
console.log(obj3);

obj4 = Object.assign( {},obj1 , obj2) ; // another way of concatenating
console.log(obj4);

console.log(Object.keys(obj3));
console.log(Object.values(obj3));
console.log(Object.entries(obj3));


