let input = [3, 52, 103, -6, 10, 0, 3, 1, -4, 40, 71]

function bubbleSort(input) {
    let swapped = false;

    const a = [...input]

    for(let i = 1; i< a.length - 1; i++){
        swapped = false

        for (let j = 0; j < a.length - i; j++){
            if(a[j+1] < a[j]){
            [a[j], a[j + 1]] = [a[j + 1], a[j]]
            swapped = true
            }
        }

        if(!swapped) {
            return a;
        }
    }

    return a;
    
}

console.log(bubbleSort(input));