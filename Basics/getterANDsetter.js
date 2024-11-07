
// ********************************* Getter and Setter ***************************************

class User {

    constructor(name , email ){
        this.name=name;
        this.email=email
    }

   set name(val){
    this._name=val
   }
get name(){
    return `ab${this._name.toUpperCase()}`
}

}

const con = new User('atif','xyz@gmail')
console.log(con.name);
