let arr = [-1, -2, -3, 1, 2, 3, 4, 5, 6, 7, ]
let i = 0;
let accumulator = 0;
while(i < arr.length){
    if(arr[i] > 0){
        accumulator += arr[i]
      
    }  i++
}console.log(accumulator)