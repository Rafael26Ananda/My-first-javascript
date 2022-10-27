var tanya = true;
while (tanya) {
var player = prompt("pilih: gajah,semut,orang");


var computer = Math.random();

if(computer < 0.34) {
    computer = "gajah";
} else if(computer >= 0.34 && computer < 0.67) {
    computer = "semut";
} else {
    computer = "orang";
}

var hasil = ""
if(player == computer) {
    hasil = "Seri!!";
} else if(player == "gajah") {
    // if(computer == "orang") {
        // hasil = "Menang!!";
    // } else {
        // hasil = "Kalah!!";
    // }
    hasil = (computer == "orang") ? "Menang!!" : "Kalah!!";

} else if(player == "orang") {
    hasil = (computer == "semut") ? "Menang!!" : "Kalah!!";
} else if(player == "semut") {
    hasil = (computer == "gajah") ? "Menang!!" : "Kalah!!";
} else {
    hasil = "Anda Memasukkan Pesan Yang Salah!";
}

alert('Kamu Memilih : ' + player + ' dan Komputer memilih : ' + computer + '\nMaka Hasilnya : Kamu ' + hasil)

tanya = confirm("Mau Mengulang Permainan Suit Ini?");
}

alert("Terima Kasih Sudah Bermain Permainan Ini!")