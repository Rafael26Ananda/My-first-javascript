function pilihankomputer() {
    const computer = Math.random();
if(computer < 0.34) return "jempol";
if(computer >= 0.34 && computer < 0.67) return "kelingking";
    return "telunjuk";
}

function hasil(computer, player) {
if(player == computer) return "Seri!!";
if(player == "jempol")  return (computer == "telunjuk") ? "Menang!!" : "Kalah!!";
if(player == "telunjuk") return (computer == "kelingking") ? "Menang!!" : "Kalah!!";
if(player == "kelingking") return (computer == "jempol") ? "Menang!!" : "Kalah!!";
} 

const pilihanplayer3 = document.querySelectorAll("li img");
pilihanplayer3.forEach(function(pilih){
    pilih.addEventListener("click",function(){
        const pilihankomputer2 = pilihankomputer();
           const pilihanplayer = pilih.className;
           const hasil2 = hasil(pilihankomputer2, pilihanplayer);
        
           const imgcomputer = document.querySelector(".computerimg");
           imgcomputer.setAttribute('src','gambar/' + pilihankomputer2 + '.jpg');
        
           const result = document.querySelector(".hasil");
           result.innerHTML = hasil2;
    });
});









// const playerjempol = document.querySelector(".jempol");
// playerjempol.addEventListener("click", function(){
//    const pilihankomputer2 = pilihankomputer();
//    const pilihanplayer = playerjempol.className;
//    const hasil2 = hasil(pilihankomputer2, pilihanplayer);

//    const imgcomputer = document.querySelector(".computerimg");
//    imgcomputer.setAttribute('src','gambar/' + pilihankomputer2 + '.jpg');

//    const result = document.querySelector(".hasil");
//    result.innerHTML = hasil2;
// });