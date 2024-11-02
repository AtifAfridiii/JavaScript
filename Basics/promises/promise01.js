

const PromiseOne = new Promise(function(resolve,reject){
    setTimeout(function(){
     resolve();
    console.log('promise 1');
  
  
    },3000)

})

PromiseOne.then(function(){
    console.log('promise 1 resolved')
})