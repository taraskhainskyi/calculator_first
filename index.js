document.querySelectorAll('.calc .digits button')
  .forEach( el => el.addEventListener('click', digitPressed) );

function digitPressed(ev) {
    const digit = ev.target.innerText;
    const display = document.querySelector('.calc .display');
    display.value += digit;
}  

document.querySelectorAll('.calc .operations button')
  .forEach( el => el.addEventListener('click', operationPressed) );

function operationPressed(ev) {
    const operation = ev.target.innerText;
    const display = document.querySelector('.calc .display');
    if (display.value === '') {
        if (operation === '*' || operation === '/') {
            return;    
        }
    } else if (['+', '-', '*', '/'].includes(display.value.slice(-1)) ) {
        display.value = display.value.slice(0, -1);
    }
    display.value += operation;
}  

document.querySelector('.calc .eq')
  .addEventListener('click', calculate);
  
function calculate() {
    const display = document.querySelector('.calc .display');
    display.value = eval(display.value);
}  
