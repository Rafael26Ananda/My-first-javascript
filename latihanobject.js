function Oplet(supir,perjalanan,penumpang,kas) {    
      this.supir = supir;
      this.perjalanan = perjalanan;
      this.penumpang = penumpang;
      this.kas = kas;

      this.penumpangnaik = function(namapenumpang) {
        this.penumpang.push(namapenumpang);
        return this.penumpang;
      }

      this.penumpangturun = function(namapenumpang,bayar) {
        if (this.penumpang.length === 0) {
            alert ('Oplet masih kosong');
            return false;
        }
        for (var i = 0;i < this.penumpang.length;i++) {
            if (this.penumpang[i] == namapenumpang) {
                this.penumpang[i] = undefined;
                this.kas += bayar;
                return this.penumpang;
            }
        }
      }
}

var oplet1 = new Oplet("Adhyat Yusuf",["Panam","Sukajadi"],[],0);
var oplet2 = new Oplet("Zulfahri",["Arengka","Nangka"],[],0);
var oplet3 = new Oplet("Bim Yusuf",["Sukajadi","Sail"],[],0);
var oplet4 = new Oplet("Ghilman Zikra",["Sudirman","Arengka"],[],0);