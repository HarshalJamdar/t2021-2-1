// Problem-2:  With a single integer as the input, generate the following until a = x [series of numbers as shown in the below examples]

//     Output: (examples)
//         1) input a = 1, then output : 1
//         2) input a = 2, then output : 1, 3
//         3) input a = 3, then output : 1, 3, 5
//         4) input a = 4, then output : 1, 3, 5, 7
//         .
//         .
//         5) input a = x, then output : 1, 3, 5, 7, .......

function generateOdd(n){
    let count=1;
    let res=[];
    while(res.length<n){
        if(count%2!==0) res.push(count);
        count++;
    }
    console.log(res);
}

generateOdd(10);


