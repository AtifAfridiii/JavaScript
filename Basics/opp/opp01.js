

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

