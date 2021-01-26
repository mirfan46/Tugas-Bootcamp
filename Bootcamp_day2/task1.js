const nilai = (n) => {
    if (n >= 90) {
        console.log('A');
    } else if( n <=89 && n >=80){
        console.log('B');
    } else if (n <=79 && n >=70) {
        console.log('C')
    } else if(n <= 69 && n >=60) {
        console.log('D');
    } else {
        console.log('E')
    }
}

nilai(100);