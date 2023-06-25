const one = document.querySelector('.one')
const two = document.querySelector('.two')
const three = document.querySelector('.three')
const four = document.querySelector('.four')
const five = document.querySelector('.five')
const six = document.querySelector('.six')
const seven = document.querySelector('.seven')
const eight = document.querySelector('.eight')
const nine = document.querySelector('.nine')

one.addEventListener('click', () => numPressed(parseInt(one.value)))
two.addEventListener('click', () => numPressed(parseInt(two.value)))
three.addEventListener('click', () => numPressed(parseInt(three.value)))
four.addEventListener('click', () => numPressed(parseInt(four.value)))
five.addEventListener('click', () => numPressed(parseInt(five.value)))
six.addEventListener('click', () => numPressed(parseInt(six.value)))
seven.addEventListener('click', () => numPressed(parseInt(seven.value)))
eight.addEventListener('click', () => numPressed(parseInt(eight.value)))
nine.addEventListener('click', () => numPressed(parseInt(nine.value)))

let operatorPressed = false;
let leftNum = 0;
let rightNum = 0;
const numPressed = (num) => {
    if (!operatorPressed) leftNum = `${leftNum}${num}`;
    else rightNum += `${rightNum}${num}`;
}





