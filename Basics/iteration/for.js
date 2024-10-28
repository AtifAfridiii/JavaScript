// ********************************* For of ************************

let array = ['venom' , 'super man' , 'bat man']

for (const value of array){
 // console.log(value);

}


let program  = 'hello world'

for(const num of program){
   // console.log(num);
    
}


let map = new Map()
map.set('name' , 'john') 
map.set('age', 21)

for(const [key, val] of map){
   // console.log(key,val);
    
}


// ******************************** For in *********************************************


let array1 = ['venom' , 'super man' , 'bat man']

for(const key in array1){
    // console.log(key,  array1[key]);
    
}

let obj = {
    name : 'john',
    age : 21,
    country : 'USA'
}

for(const key in obj){
  // console.log(key,obj[key]);
    
}

// ******************************* for each ************************************

let arr = ['js','cpp','java','dart','ruby']
arr.forEach((item,index,array)=>{
    // console.log(item,index,array);
    
})

let objArr = [
    {
        name : 'js',
        fileName : 'javaScript'
    },
    {
        name : 'cpp',
        fileName : 'C++'
    },
    {
        name : 'java',
        fileName : 'JVM'
    },
]

objArr.forEach((item)=>{
 console.log( item.name);

 
})