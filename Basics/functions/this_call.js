 

 const user1 = function(username){
   this.username=username
 }

 const details = function(username,age,email){
     user1.call(this,username)
    this.age=age
    this.email=email
 }

const con = new details('atif',19,'zzz')
console.log(con);
