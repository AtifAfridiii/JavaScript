// **************************************** filters ********************************************

let arr = [10,20,30,40,60]

let val = arr.filter((item)=>item>=30)
// console.log(val);


// ********************** map **************************************

val = arr.map((item)=>item+1)
// console.log(val);

// ************************ reduce **********************************

let sum = arr.reduce((acc,cur)=>acc+cur,0)
console.log(sum);
