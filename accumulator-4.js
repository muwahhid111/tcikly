let arr = ['Khas', 'Iznaur', 'Mansur', 'Adam', 'Alvi', 'Rasul', 'Magomed', 'Zelim', 'Bers', 'Yakub']
let accumulator = [];
for(let i = 0; i < arr.length; i++){
    if(arr[i][0].toLowerCase() == 'a'){
        accumulator.push(arr[i])
    }
}console.log(accumulator)