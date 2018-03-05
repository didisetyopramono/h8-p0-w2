var nama = '';
var peran = '';

        if (nama === ''){
        console.log('nama harus diisi!');
        } 
        else if (peran ==='Ksatria')
        {
        console.log('Selamat datang di Dunia Proxytia, '+nama+'. Halo Ksatria '+nama+', 
                    Kamu dapat menyerang dengan senjatamu!');
        }       

        else if (peran === 'Tabib')
        {
        console.log('Selamat datang di Dunia Proxytia, '+nama+'. Halo Tabib '+nama+',
                    Kamu akan membantu temanmu yang terluka.');
        } 
        else if (peran === 'Penyihir'){
        console.log('Selamat datang di Dunia Proxytia, '+nama+'. Halo Penyihir '+nama+',
                    ciptakan keajaiban yang membantu kemenanganmu!');
        }
