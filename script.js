var jumlahBemo = 10
var Bemojalan = 6

for(var Bemo = 1; Bemo <= jumlahBemo; Bemo++) {
    if(Bemo <= 4 || Bemo === 6) {
       console.log('Bemo No. ' + Bemo +' Beroperasi dengan baik.');
    } else if (Bemo === 8 || Bemo === 10 || Bemo === 5) {
       console.log('Bemo no. '+ Bemo +' sedang lembur.');
    } else { 
       console.log('Bemo no. '+ Bemo +' Tidak beroperasi.');
}

}