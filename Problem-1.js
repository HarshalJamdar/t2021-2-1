// Problem-1: Create a small calculator which performs operations such as Addition, Subtraction, Multiplication and Division using class.
//     Calculator inputs :> ‘a’, ‘b’ and ‘type of operation’
//     Datatype :> ‘a’ = double, ‘b’ = double, ‘type of operation’ = string

function calculate(a,b,opr){
    if(opr==='+')return a+b;
    else if(opr==='-')return a-b;
    else if(opr==='*')return a*b;
    else if(opr==='/')return a/b;
    else return "invalid input";
}

let res =calculate(2,4,'*');
console.log(res);