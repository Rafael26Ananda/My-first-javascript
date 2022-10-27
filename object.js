var orang = {
   nama : "Rafael Ananda",
   lahir: "26 April 2005",
   nilai: [90,92,88,94],
   lulus: true,
   alamat:{
          jalan: "JL.Beringin no.55",
          kompleks: "Beringin Indah",
          rt: "rt.10",
          rw: "rw.06"
   }
  
};

console.log(orang);

console.log(this === window);