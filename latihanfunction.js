function fafafa (a,b) {
return a + b
}
function lalala (a,b) {
    return a * b
}
var hasil = fafafa (lalala(2,2), lalala(5,5));
alert(hasil)

function tambah (a,b) {
    return a + b;
}
alert(tambah(34,34))

var s = "rafael ananda"
console.log(s.charAt(8))

function luaspersegipanjang (p,l) {
    return  p * l
}

alert(luaspersegipanjang (45,55))

function volumekubus(p,l,t) {
    return p * l * t
}

alert("masukkan angka untuk mencari volume kubus")
var p = parseInt(prompt("masukkan angka pertama"))
var l = parseInt(prompt('masukkan angka kedua'))
var t = parseInt(prompt('masukkan angka ketiga'))
var hasil = volumekubus(p,l,t)
alert(hasil)

function rekursif (a) {
   if (a === 451){
    return
   }
    console.log(a)
    return rekursif(a+1)
}

rekursif(19)