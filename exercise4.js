function dataHandling2(input){
  
  input.splice(1,2);
  input.splice(1,0, 'Roman Alamsyah Elsharawy');
  input.splice(2,0);
  input.splice(2,0, 'Provinsi Bandar Lampung');
  input.splice(4,0, 'Pria');
  input.splice(5,1);
  input.splice(5,0, 'SMA Internasional Metro');
  console.log(input);
  console.log('\n');
  
  var tanggal = input[3];
  
  console.log(tanggal)

  splitTanggal = tanggal.split('/');
  console.log(splitTanggal)

  sliceTanggal = splitTanggal[1];
  intTanggal = parseInt(sliceTanggal);
  
  var switchBulan;
  
  switch(intTanggal){
    case 1: {switchBulan=('Januari');break;}
    case 2: {switchBulan=('Februari');break;}
    case 3: {switchBulan=('Maret');break;}
    case 4: {switchBulan=('April');break;}
    case 5: {switchBulan=('Mei');break;}
    case 6: {switchBulan=('Juni');break;}
    case 7: {switchBulan=('Juli');break;}
    case 8: {switchBulan=('Agustus');break;}
    case 9: {switchBulan=('September');break;}
    case 10: {switchBulan=('Oktober');break;}
    case 11: {switchBulan=('November');break;}
    case 12: {switchBulan=('Desember');break;}
  }
  console.log(switchBulan);
  console.log('\n');
  
  sortTanggal = splitTanggal.sort(function(a, b) { 
    return b - a; 
    
  });
  console.log(sortTanggal);
  console.log('\n');
  
  ubahTanggal = tanggal.split('/').join('-');
  console.log(ubahTanggal);  
  console.log('\n');

  
  input.splice(1,2);
  input.splice(1,0, 'Roman Alamsyah');
  console.log(input[1]);
    console.log('\n');

}

console.log(dataHandling2(["0001", "Roman Alamsyah", "Bandar Lampung", "21/05/1989", "Membaca"]));
