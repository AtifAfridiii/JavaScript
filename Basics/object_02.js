// ****************************** Objects de structure **************************
const obj={
    "name": "John",
    age : 19,
    arr : [
    1,2,3,4,5
    ]
}

const obj2 = {
    name1 :  'Obj 2' ,
    lan : 'js',
    subject : {
        name2 : 'Math',
       teacher : 'xyz',
       chapter : '12345',
    }
}

// console.log(obj);
// console.log(obj.age);
// console.log(obj.arr[3]);
// console.log(obj.arr);
// delete obj.name ; // delete name from obj
// console.log(obj);
// console.log( obj.hasOwnProperty('name') );
//  console.log(obj.);
// console.log(obj.hasOwnProperty('age'));

// ***************** object destructure **********************

const { name, age } = obj;
console.log(name); 
console.log(age);

const { name1, subject: { name2 , teacher ,chapter} } = obj2;
console.log(name1);
console.log(name2);
console.log(chapter);




