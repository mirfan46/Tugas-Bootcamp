let bilangan = [-6, -4, 0, 1, 2, 2, 3, 10, 12, 44, 52, 72, 98];

// Mengecek max number
function max (cekMax) {
    console.log(Math.max(...cekMax));
}

max(bilangan)

// Mengecek min number
function min(cekMin) {
    console.log(Math.min(...cekMin));
}

min(bilangan);

// Menghitung average
function average(arr){
    let total= 0;
    for(let i =0; i < arr.length; i++){
        total += arr[i];
        
    }
    console.log( total / arr.length)
}
average(bilangan);

//Menghitung median
function median(arr) {
    const median = Math.floor(arr.length / 2);
    nums = [...arr].sort((a,b) => a -b);
    return arr.length % 2 !== 0 ? nums[median] : (nums[median -1] + nums[median] / 2);

}

console.log('Median = ', median(bilangan));