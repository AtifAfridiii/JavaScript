

const PromiseOne = new Promise(function(resolve,reject){
    setTimeout(function(){
     resolve();
    // console.log('promise 1');
  
  
    },3000)

})

PromiseOne.then(function(){
    // console.log('promise 1 resolved')
})

// ******************************************************************************

new Promise(function(resolve,reject){
    setTimeout(function(){
        resolve({username:'Atif',email:'atif!2334'});
    },1000)
}).then(function(user){
   //  console.log(user);
    
})

// *******************************************************************

const promiseFour = new Promise(function(resolve , reject){
    let error = false ;
    if(!error){
        resolve({name:'Atif Afridi' , age : 19 });  
      }else{
        reject('error');
      }
})

promiseFour.then((user)=>{
  console.log(user);
  return user.name
}).then((name)=>{
    console.log(`Name is `+name);
    return name.age
}).catch((error)=>{
    console.log(error);
    
}).finally(()=>{
    console.log('something is happening');
    
})