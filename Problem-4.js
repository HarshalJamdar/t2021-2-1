// Problem-4:  Get the total count of number list in the dictionary which is multiple of [1,2,3,4,5,6,7,8,9]
//     (examples)
//     input: [1,2,8,9,12,46,76,82,15,20,30]
//     Output:
//         {1: 11, 2: 8, 3: 4, 4: 4, 5: 3, 6: 2, 7: 0, 8: 1, 9: 1}


function isMultiple(arr){
    let map = {1: 0, 2: 0, 3: 0, 4: 0, 5: 0, 6: 0, 7: 0, 8: 0, 9: 0};
    if(arr.length!==0) map[1]=arr.length;
    for(let i=0;i<arr.length;i++){ 
        if(arr[i]%2==0) map[2]++; 
        if(arr[i]%3==0) map[3]++; 
        if(arr[i]%4==0) map[4]++; 
        if(arr[i]%5==0) map[5]++; 
        if(arr[i]%6==0) map[6]++; 
        if(arr[i]%7==0) map[7]++; 
        if(arr[i]%8==0) map[8]++; 
        if(arr[i]%9==0) map[9]++; 
    } 
    console.log(map);
}

isMultiple([1,2,8,9,12,46,76,82,15,20,30])

