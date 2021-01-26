// Konversi jam ke menit
function jamKeMenit(jam){
    let menit = jam * 60;
    return menit + " menit"
}

console.log(jamKeMenit(14));

// Konversi menit ke jam
function menitKeJam(menit){
    let jam = menit / 60;
    return jam + " jam";
}

console.log(menitKeJam(90));

// Konversi menit ke tahun
function menitKeTahun(menit){
    minPerTahun = 24 * 365 * 60;
    let tahun = Math.floor(menit / minPerTahun);
    return tahun + " tahun";
}

console.log(menitKeTahun(525600))