

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

// *********************************** protype inheritance ********************


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

// ************************** class *********************************

class Anything {
    constructor(name ,passoward){
        this.name = name;
        this.passoward = passoward
    }
 
    hide (){
        return `${this.passoward}abc`
    }


}

const acc = new Anything('insta','123')
console.log(acc.hide());


// **************************** inheritance *********************************

class Teacher {
    constructor(name){
        this.name = name;

    }



}

class User extends Teacher {
    constructor(name,age,email){
        super(name);
         this.age = age ;
         this.email = email
    };

    // static 
    
     logme () {
        console.log(`name is ${this.name} , age is ${this.age} , email is ${this.email}`);
        
    }
}

const student = new User('atif',19,'xyz@gmail.com')
student.logme();

console.log(student instanceof Teacher);
