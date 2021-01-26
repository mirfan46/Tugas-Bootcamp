const tahunKabisat = (tahun) => {
    if((tahun % 4) === 0){
        if((tahun%100) === 0) {
            console.log(tahun)
        }
        else {
            if((tahun % 400) === 0) {
                console.log(tahun);
            } else{
                console.log(tahun)
            }
        }
    }
}

const masukkanTahun = (first, last) => {
    for(i = first; i <=last; i++) {
        tahunKabisat(i)
    }
}

masukkanTahun(2000,2020);