// ****************************************** Conditional Statements **********************************

// let username = 'afridi'
// let age = 25

// if(username==='atif'){
//     console.log(`${username} name matched`);
// }else if(age===25){
//     console.log('age is matched');
    
// }


let userBalance = true 
let userWill = false 

if(userBalance&&userWill){
    console.log('User can enroll in the course ');
    
}else{
    console.log('user can not enroll');
    
}

if(userBalance||userWill){
    console.log('One value is true ');
    
}else{
    console.log('both values are false ');
    
}

// let month = 'nov'

// switch(month){
//     case 'jan' :
//         console.log('January');
//         break ;
        
//     case 'feb' :
//         console.log('febuary');
//         break ;
//     case 'mar' :
//         console.log('march');
//         break ;
//     case 'apr' :
//         console.log('april');
//         break ;
//     case 'may' :
//         console.log('may');
//         break ;
//     case 'june' :
//         console.log('june');
//         break ;
//     case 'july' :
//         console.log('july');
//         break ;
//     case 'aug' :
//         console.log('august');
//         break ;
//     case 'sep' :
//         console.log('september');
//         break ;
//     case 'oct' :
//         console.log('october');
//         break ;
//     case 'nov' :
//         console.log('novemeber');
//         break ;

//         case 'dec' :
//             console.log('decemeber');
//             break ;
//         default :
//         console.log('No month');
//         break ;

        
// }

// truthy => "0" , " " , "false" , [] , {} , function(){}
// falsy => 0 , -0 , null , undefined ,BigInt 0n , "" , nan

let userEmail = []

if(userEmail.length===0){
     // console.log('Array is empty');
    
}

let obj = {

}

if(Object.keys(obj).length===0){
   // console.log("Object is empty");
    
}

if(false==0){
   // console.log(true);
    
}


let val ;
val = null ?? 10 ;

console.log(val);

let score = 99 
score>90 ? console.log('score is greater') : console.log('score is less');
;
