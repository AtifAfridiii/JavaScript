
// ********************** For looop ************************

for (let i = 0; i <=10; i++) {
    const element = i;
    console.log(element);
    
}

for (let i = 0; i <=20; i++) {
    const element = i;
    if(element%2===0){
    
        console.log(`Even number ${element}`)
    }
}

for (let i = 1; i <=10; i++) {
    console.log('outer looop '+ i);
    
   for (let j = 1; j <=10; j++) {
   console.log(i + "x" + j + "="+  i*j);
   
   }
    
}

let array = ['venom' , 'super man' , 'bat man']
console.log(array.length);

for (let index = 0; index < array.length; index++) {
    const element = array[index];
    console.log(element);
    
}