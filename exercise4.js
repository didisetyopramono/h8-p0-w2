function dataHandling2() {

input.splice(1, 1, 'Roman Alamsyah Elsharawy');
input.splice(2, 1, 'Provinsi Bandar Lampung');
input.splice(4, 1, 'Pria', 'SMA International Metro');
console.log(input);

 var bulan = 05;
 switch(bulan) {
   case 1:    'Januari'; break;
   case 2:    'Februari'; break;
   case 3:    'Maret'; break;
   case 4:    'April'; break;
   case 5:    'Mei'; break;
   case 6:    'Juni'; break;
   case 7:    'Juli'; break;
   case 8:    'Agustus'; break;
   case 9:    'September'; break;
   case 10:   'Oktober'; break;
   case 11:   'November'; break;
   case 12:   'Desember'; break;
   default:   'HmmmmMMMmmmm!!!'; 
 }

var format = input[3];
var tanggal = format.split('/');
tanggal.sort(function(value1, value2) { return value2 - value1 });
console.log(tanggal);

var joinVar = format.split('/');
var join = joinVar.join('-');
console.log(join);

var nama = input[1];
var i = nama.slice(0,15);
console.log(i);
}

var input = ["0001", "Roman Alamsyah ", "Bandar Lampung", "21/05/1989", "Membaca"];
dataHandling2(input);
