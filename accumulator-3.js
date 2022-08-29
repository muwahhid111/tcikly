let arr = ['html', 'css', 'js', 'c#', 'pyton', 'java', 'c++', 'go', 'php', 'fortran']
let accumulator = [];
for(let i = 0; i < arr.length; i++){
    if(arr[i].length > 3){
        accumulator.push(arr[i])
    }
}console.log(accumulator)