// contoh function
function kali (a,b) {
  return a * b
}
console.log (kali(3,3))
// 

// array
var random = ['','banteng merah',"aku",7,false,'babi',[1,2,3]]
random.push('fuyu','biyori','relax')

for ( var a = 1; a <= 9; a++) {                              
  console.log ('array ke-' + a + ' adalah ' + random [a])
}
// 

// method sort
random.sort();
console.log (random.join())
// 

// method forEach
random.forEach(function(c) {
	console.log(c);
  });
// 

// another forEach
var angka = [1,2,3,4,5,6,7,8,9]
angka.forEach(function(e) {
  console.log (e);
});
// 