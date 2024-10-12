

// ******************** Data Types *********************

/// 1) Permitive data types  => 7
/// String , Number , Boolean , null , undefined , Symbol , BigInt

let val = String('hwello')
// console.log(typeof val, val) 

let symp = Symbol(234)
// console.log(typeof symp, symp)

let symp2 = Symbol(234)
// console.log(symp === symp2) // false

let bigNumber = 1123334444455666n
// console.log(typeof bigNumber, bigNumber) // BigInt


/// 2) Non permitive 

/// Array , object , function 


/// Array 
let arr = [
    1, 2, 3, 4, 5 , 'ss','sss','ddd'
]

// console.log(typeof arr, arr[3]) // object
// console.log(arr.length) // 8
// console.log(arr[8]) // undefined

let arr2 = String(arr)
// console.log(typeof arr2 , arr2) 


// object 

let  obj =  {
    name : 'john',
    age : 25,
    isMarried : false,
    address : null,
}
// console.log(typeof obj , obj['age']);


/// Function
function add(a,b){
a='hello '
b= 'world'
console.log( typeof add, a,b);

}

// add()
