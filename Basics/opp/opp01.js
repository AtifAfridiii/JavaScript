

// ************************************************* oop ************************************

let name = 'Atif     ' ;

String.prototype.Truelength = function(){

console.log(`True lenght is ${this.trim().length}`)

}
name.Truelength()

let fname = 'atif afridi'
let lname ;

String.prototype.div= function(){
    lname = this.split(' ')
    
    console.log(`name is ${lname}`);
    
}
fname.div()
console.log(lname);

// *********************************** inheritance ********************


const user = {
    name : 'atif',
    age : '19' ,
    email : 'atif@gmail.com',
}

const dept = {
    name : 'cs',
    student : '101',
}

Object.setPrototypeOf(dept,user);



