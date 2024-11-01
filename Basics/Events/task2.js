

const randomColor = function(){
let color = '0123456789ABCDEF'

let hex = '#'

for (let i = 0; i < 6; i++) {
   color+=hex[Math.floor(Math.random()*16)];
    
}
return color ;

}

