function cekData(event){
    var tombol=event.which||event.getKeyCode;
    if(tombol===13){
        var kode=document.getElementById('kodeInput').value;
        if(kode=="001"){
            document.getElementById('tipeInput').value="The BMW Z4 ROADSTER";
            document.getElementById('hargaInput').value="Rp 1.773.000.000,00";
            }
        else if(kode=="002"){
            document.getElementById('tipeInput').value="The BMW M2";
            document.getElementById('hargaInput').value="Rp 2.150.000.000,00";
            }
        else if(kode=="003"){
            document.getElementById('tipeInput').value="The BMW M SERIES";
            document.getElementById('hargaInput').value="Rp 1.990.000.000,00";
            }
        else{
            alert('Maaf product tidak tersedia....!!');
            }
        }
    }
    var data=[];
    var i=0;
    j=1;

    function focusTxt(){
        document.getElementById('namaInput').focus();
        document.getElementById('alamatInput').focus();
        document.getElementById('tipeInput').focus();
        document.getElementById('hargaInput').focus();
        document.getElementById('jumlahInput').focus();
    }

    function beli(){
        var namaInput=document.getElementById('namaInput').value;
        data[i]={
            namaOutput : namaInput,
            kodeOuput : document.getElementById('kodeInput').value,
            alamatOutput : document.getElementById('alamatInput').value,
            tipeOutput : document.getElementById('tipeInput').value,
            hargaOutput : document.getElementById('hargaInput').value,
            jumlahOutput : document.getElementById('jumlahInput').value,
        }
        // document.getElementById('namaOutput').innerText=namaInput;
        document.getElementById('namaInput').value="";
        document.getElementById('tipeInput').value="";
        document.getElementById('hargaInput').value="";
        document.getElementById('jumlahInput').value="";
        
        i++;
        alert("Pembayaran anda telah dilakukan duduk santai kami akan segeera kirim :)........");
    }

    function tampil(){
        var isi = "<tr><th>No</th><th>Alamat</th><th>kode barang</th><th>Tipe Mobil</th><th>Harga</th><th>Subtotal</th></tr>";
        Total=data.length;
        var totalBayar = 0;
        for(var i=0; i<Total; i++){
            var subtotal = data[i].hargaOutput * data[i].jumlahOutput;
            totalBayar += subtotal;
            isi=isi+"<tr><td>"+(j++)+"</td><td>"+data[i].alamatOutput+"</td><td>"+data[i].kodeOuput+"</td><td>"+data[i].tipeOutput+"</td><td>"+data[i].hargaOutput+"</td><td>Rp."+subtotal+"</td></tr>";
            }
        document.getElementById('hasil').innerHTML=isi;
        document.getElementById('totalBayar').innerText = "Rp " + totalBayar;
    }