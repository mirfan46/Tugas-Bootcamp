const membalikanKalimat = (kalimat) => {
    let arr = kalimat.split(" ");
    arr.reverse()
    kalimat = arr.join(" ")
    console.log(kalimat)
}

console.log(membalikanKalimat('makan nasi goreng'));