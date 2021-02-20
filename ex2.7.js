// Ex2.7 - Basic Math

const basicOp=(ch,number1, number2)=>{
    let result;
    switch(ch){
        case '+':
            result = number1 + number2;
            break;
        case '-':
            result = number1 - number2;
            break;
        case '*':
            result = number1 * number2;
            break;
        case '/':
            if(number2===0)
                result="Can't divide by 0";
            else
                result = number1 / number2;
            break;
    }
    return result;
}

console.log("+ op:",basicOp('+',4,7));
console.log("- op:",basicOp('-',15,18));
console.log("* op:",basicOp('*',5,5));
console.log("/ op:",basicOp('/',49,7));