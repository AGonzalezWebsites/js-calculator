const output = document.querySelector('.result');

const C = document.querySelector('.C');
const CE = document.querySelector('.CE');

const zero = document.querySelector('.zero');
const one = document.querySelector('.one');
const two = document.querySelector('.two');
const three = document.querySelector('.three');
const four = document.querySelector('.four');
const five = document.querySelector('.five');
const six = document.querySelector('.six');
const seven = document.querySelector('.seven');
const eight = document.querySelector('.eight');
const nine = document.querySelector('.nine');
const decimal = document.querySelector('.decimal');

C.addEventListener('click', () => clearCalc());
CE.addEventListener('click', () => clearCalc());

decimal.addEventListener('click', () => numPressed(decimal.value));
zero.addEventListener('click', () => numPressed(parseInt(zero.value)));
one.addEventListener('click', () => numPressed(parseInt(one.value)));
two.addEventListener('click', () => numPressed(parseInt(two.value)));
three.addEventListener('click', () => numPressed(parseInt(three.value)));
four.addEventListener('click', () => numPressed(parseInt(four.value)));
five.addEventListener('click', () => numPressed(parseInt(five.value)));
six.addEventListener('click', () => numPressed(parseInt(six.value)));
seven.addEventListener('click', () => numPressed(parseInt(seven.value)));
eight.addEventListener('click', () => numPressed(parseInt(eight.value)));
nine.addEventListener('click', () => numPressed(parseInt(nine.value)));

const divide = document.querySelector('.divide');
const multiply = document.querySelector('.multiply');
const subtract = document.querySelector('.subtract');
const add = document.querySelector('.add');

divide.addEventListener('click', () => opPressed(divide.value));
multiply.addEventListener('click', () => opPressed(multiply.value));
subtract.addEventListener('click', () => opPressed(subtract.value));
add.addEventListener('click', () => opPressed(add.value));

const equal = document.querySelector('.equal');
equal.addEventListener('click', () => display(getResult(operator, leftNum, rightNum)));


const clearCalc = () =>{
    console.log(1);
    operatorPressed = false;
    leftNum = "0";
    rightNum = "0";
    output.innerText = '0';
}


let operatorPressed = false;
let leftNum = "0";
let rightNum = "0";
const numPressed = (num) => {
    if (!operatorPressed && leftNum.length < 8) {
        leftNum = `${leftNum}${num}`;
        output.innerText = removeLead(leftNum);     
    } else if (!operatorPressed) alert("Too Many Numbers");
    
    if (operatorPressed && rightNum.length < 8) {
        rightNum = `${rightNum}${num}`;
        output.innerText = `${parseFloat(leftNum)} ${operator} ${removeLead(rightNum)}`;
    } else if (operatorPressed) alert("Too Many Numbers")
}

//Removes leading numer, specifically the initial zero
const removeLead = (num) => {
    return parseFloat(num).toString()
}

let operator = "";
const opPressed = (op) => {
    operator = op;
    operatorPressed = true;
    output.innerText = `${parseFloat(leftNum)} ${operator}`;
}

const getResult = (op, a, b) => {
    {switch (op)
        {
            case '+': return parseFloat(a) + parseFloat(b);
            case '-': return a - b;
            case '*': return a * b;
            case '/': return a / b;
            default: return 'Try Again';
        }
    }
}

let result = `0`;
const display = (x) => {
    result = Math.round(x * 10000) / 10000;
    output.innerText = result;
    saveLastEquation();
}

const saveLastEquation = () => {
    alert(`${parseFloat(leftNum)} ${operator} ${removeLead(rightNum)} = ${result}`)
}






