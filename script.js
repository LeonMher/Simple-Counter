const inc = document.querySelector('.incrementBtn');
const dec = document.querySelector('.decrementBtn');
const display = document.querySelector('.number');


function incrementFunc(){
    display.innerHTML ++
}

function decrementFunc(){
    display.innerHTML --
}

function resetFunc(){
    display.innerHTML = 0
}