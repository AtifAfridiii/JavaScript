// ********************************* scopes ************************************

function one (){

    const username = 'atif'
    
    function two(){
        const username2 = 'afridi'
        console.log(username);
        
    }
   // console.log(username2);
    
two()

}
// one()

if(true){
    const username  = 'atif'
    if(username==='atif'){
     const fname = 'afridi'
     // console.log(username);
    
    }
    // console.log(fname);
    
}

// console.log(add(5));

function add (any11){
    return any11 +1
}
// console.log(holdValue(5));
const holdValue = function add2 (num11){
    return num11+3
}

const user = {

username : 'atif afridi' ,
age : 19 ,
log_in : function (){
    console.log(`${this.username} user logged in`);

   // console.log(this);
    
}

}

user.log_in()


// ****************************** arrow functions ****************************
const add3 = (num1,num2) => num1+num2+3 ;
// console.log(add3(3,5));


// ************************** IIFE *************************

(function named (){
console.log('hello world'); // => Named IIFE
})() ;


( (name)=>{
    console.log(`${name} hello world2`);
})('atif')