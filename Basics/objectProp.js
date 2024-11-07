
// Object.getOwnPropertyDescriptor()

const val = Object.getOwnPropertyDescriptor(Math,'PI')
// console.log(val);

const obj ={
  name : 'js',
  available : true ,
  PI : 3.14
}

// console.log(Object.getOwnPropertyDescriptor(obj,'name'));

Object.defineProperty(obj,'name',{
    writable: false,
     enumerable: true,
      configurable: false
})
// console.log(Object.getOwnPropertyDescriptor(obj,'name'));

for (let [keys,values] of Object.entries(obj)) {
    console.log(`${keys}:${values}`);
    
}
