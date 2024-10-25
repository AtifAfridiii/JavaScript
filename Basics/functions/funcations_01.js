// ****************************** Functions **************************************

// function myname (){

// console.log('atif afridi')

// }

// myname()


function add(num1 , num2){
    return num1 + num2
}
console.log(add(3,9));

function login (name){
    if(name === undefined){
        console.log('please enter your name');
        return 
    }
    
    return `${name} jusss log in`
}

console.log(login('atif'));
