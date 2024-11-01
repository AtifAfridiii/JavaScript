const randomColor = function() {
    let color = '0123456789ABCDEF';
    let hex = '#';
    for (let i = 0; i < 6; i++) {
        hex += color[Math.floor(Math.random() * 16)];
    }
    return hex;
};

let intervalID;

const startChange = function() {
    intervalID = setInterval(changebgColor, 1000);

    function changebgColor() {
        document.body.style.backgroundColor = randomColor();
    }
};

const stopChange = function() {
    clearInterval(intervalID); 
};

document.querySelector('#start').addEventListener('click', startChange);
document.querySelector('#stop').addEventListener('click', stopChange);
